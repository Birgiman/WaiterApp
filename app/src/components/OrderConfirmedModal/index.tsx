import { Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';

import { Container, OkButton } from './styles';

interface OrderCinfirmedModalProps {
	visible: boolean;
	onOk: () => void;
}

export function OrderConfirmedModal({ visible, onOk }: OrderCinfirmedModalProps) {
	return(
		<Modal
			visible={visible}
			animationType={'fade'}
		>
			<StatusBar style='light'/>

			<Container>
				<CheckCircle />
				<Text size={20} weight='600' color='#fff' style={{ marginTop: 12, marginBottom: 4 }}>
					Pedido confirmado
				</Text>
				<Text color='#fff' opacity={0.9}>
					O pedido já entrou na fila de produção!
				</Text>
				<OkButton onPress={onOk}>
					<Text weight='600' color='#d73035'>
						OK
					</Text>
				</OkButton>
			</Container>
		</Modal>
	);
}
