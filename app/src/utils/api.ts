import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://26.48.110.69:3001',
});
