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
					'price': 40,
				},
				'quantity': 1,
				'_id': '63790d58ce8d95c95aa34e41'
			},
			{
				'product': {
					'name': 'Coca cola',
					'imagePath': '1668715381078-coca-cola.png',
					'price': 40,
				},
				'quantity': 1,
				'_id': '63790d58ce8d95c95aa34e41'
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
