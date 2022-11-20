import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

import { OverLay, ModalBody, OrderDetails } from './styles';

interface OrderModalProps {
	visible: boolean;
	order: Order | null;
}

export function OrderModal({ visible, order }: OrderModalProps) {
	if (!visible || !order) {
		return null;
	}

	// let total = 0;
	// order.products.forEach(({ product, quantity }) => {
	// 	total += product.price * quantity;
	// });

	const total = order.products.reduce((total, { product, quantity }) => {
		return total + (product.price * quantity);
	}, 0);

	return (
		<OverLay>
			<ModalBody>
				<header>
					<strong>Mesa {order.table}</strong>
					<button type="button">
						<img src={closeIcon} alt="Icone de fechar" />
					</button>
				</header>
				<div className="status-container">
					<small>Status do Pedido</small>
					<div>
						<span>
							{order.status === 'WAITING' && '🕐'}
							{order.status === 'IN_PRODUCTION' && '👩🏻‍🍳'}
							{order.status === 'DONE' && '✅'}
						</span>
						<strong>
							{order.status === 'WAITING' && 'Filda de espera'}
							{order.status === 'IN_PRODUCTION' && 'Em preparação'}
							{order.status === 'DONE' && 'Pronto!'}
						</strong>
					</div>
				</div>
				<OrderDetails>
					<strong>Itens</strong>

					<div className="order-items">
						{order.products.map(({ _id, product, quantity }) => (
							<div className="item" key={_id}>
								<img src={`http://localhost:3001/uploads/${product.imagePath}`}
									alt={product.name}
									width="56"
									height="28.51"
								/>

								<span className="quantity">{quantity}x</span>
								<div className="product-details">
									<strong>{product.name}</strong>
									<span>{formatCurrency(product.price)}</span>
								</div>
							</div>
						))}
					</div>
					<div className="total">
						<span>Total:</span>
						<strong>{formatCurrency(total)}</strong>
					</div>
				</OrderDetails>
			</ModalBody>
		</OverLay>
	);
}
