import styled from 'styled-components';

export const OverLay = styled.div`
	background: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(4.5px);
	display: flex;
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0px;
	top: 0px;
	align-items: center;
	justify-content: center;
`;

export const ModalBody = styled.div`
	background: #fff;
	border-radius: 8px;
	padding: 32px;
	width: 480px;

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		strong {
			font-size: 24px;
		}
		button {
			line-height: 0;
			border: 0;
			background: transparent;
		}
	}

	.status-container {
		margin-top: 32px;

		small {
			font-size: 14px;
			opacity: 0.8;
		}

		div {
			margin-top: 8px;
			display: flex;
			align-items: center;
			gap: 8px;
		}
	}
`;

export const OrderDetails = styled.div`
	margin-top: 32px;

	> strong {
		font-weight: 500;
		font-size: 14px;
		opacity: 0.8;
	}
`;
