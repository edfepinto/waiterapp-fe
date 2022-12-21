import { Order } from '../../types/Order';

import { Actions, ModalBody, OrderDetails, Overlay } from './styles';

import closeIcon from '../../assets/images/close-icon.svg';

import { formartCurrency } from '../../utils/formartCurrency';

interface OrderModalProps {
  visible: boolean,
  order: Order | null,
  onClose: () => void,
  onCancelOrder: () => Promise<void>,
  isLoading: boolean,
  onChangeOrderStatus: () => void
}

export function OrderModal({
  visible,
  order,
  onClose,
  onCancelOrder,
  isLoading,
  onChangeOrderStatus
} : OrderModalProps) {
  if(!visible || !order) return null;

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type='button' onClick={onClose}>
            <img src={closeIcon} alt="Fechar Modal" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕓'}
              {order.status === 'IN_PRODUCTION' && '👨‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em preparação'}
              {order.status === 'DONE' && 'Pronto'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-itens">
            {order.products.map(({_id, product, quantity}) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="28"
                />

                <span className='quantity'>{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formartCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formartCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          {order.status !== 'DONE' && (
            <button
              type='button'
              className='primary'
              disabled={isLoading}
              onClick={onChangeOrderStatus}
            >
              <span>👨‍🍳</span>
              <strong>Iniciar produção</strong>
            </button>
          )}

          <button
            type='button'
            className='secondary'
            onClick={onCancelOrder}
            disabled={isLoading}
          >
            Cancelar pedido
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
