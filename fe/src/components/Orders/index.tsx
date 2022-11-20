import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
	{
		'_id': '63790d58ce8d95c95aa34e40',
		'table': '3698',
		'status': 'WAITING',
		'products': [
			{
				'product': {
					'name': 'Coca Cola',
					'imagePath': '1668715381078-coca-cola.png',
					'price': 7,
				},
				'quantity': 1,
				'_id': '63790d58ce8d95c95aa34e41'
			},
			{
				'product': {
					'name': 'Hamburger',
					'imagePath': '1668715464125-burger-molho-especial.png',
					'price': 20,
				},
				'quantity': 3,
				'_id': '637a2be08484f2596928b2f1'
			}
		],
	}
];

export function Orders() {
	return (
		<Container>
			<OrdersBoard
				icon="🕐"
				title="Fila de espera"
				orders={orders}
			/>
			<OrdersBoard
				icon="👩🏻‍🍳"
				title="Em preparação"
				orders={[]}
			/>
			<OrdersBoard
				icon="✅"
				title="Pronto!"
				orders={[]}
			/>
		</Container>
	);
}
