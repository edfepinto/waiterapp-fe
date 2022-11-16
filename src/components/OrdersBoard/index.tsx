import { Order } from '../../types/Order';

import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
  icon: string,
  title: string,
  orders: Order[]
}

export function OrdersBoard({icon, title, orders} : OrdersBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map(({_id, table, products}) => (
            <button type='button' key={_id}>
              <strong>Mesa {table}</strong>
              <span>{products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
