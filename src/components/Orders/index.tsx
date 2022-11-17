import { Order } from '../../types/Order';

import { OrdersBoard } from '../OrdersBoard';

import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '63760f90876b61c9888f2cd5',
    'table': '1',
    'status': 'IN_PRODUCTION',
    'products': [
      {
        'product': {
          'name': 'Burguer Mega Chicken',
          'imagePath': '1668681518276-chicken.png',
          'price': 32,
        },
        'quantity': 1,
        '_id': '63760f90876b61c9888f2cd6'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668681590527-coca-cola.png',
          'price': 7,
        },
        'quantity': 1,
        '_id': '63760f90876b61c9888f2cd7'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕓"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
