import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroind = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
	margin-top: ${isAndroind ? `${StatusBar.currentHeight}px` : '0'};
`;
