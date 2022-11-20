import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';

import { OverLay, ModalBody, OrderDetails } from './styles';

interface OrderModalProps {
	visible: boolean;
	order: Order | null;
}

export function OrderModal({ visible, order }: OrderModalProps) {
	if (!visible || !order) {
		return null;
	}
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
				</OrderDetails>
			</ModalBody>
		</OverLay>
	);
}
