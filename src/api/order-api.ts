import axiosService from "@/configurations/axios-service";

const API_URL = process.env.API_URL;
const ENDPOINT = 'orders';
const URL = `${API_URL}/${ENDPOINT}`;

export const orderApi = {
    getMonoPaymentURL: async (body: IMomoPayment) => {
        const response = await axiosService.post<IRespondSuccess<string>>(`${URL}`, body);
        return response.data
    },
    checkOrderPaymentMomoProcess: async (orderId: string) => {
        const response = await axiosService.get<IRespondSuccess<boolean>>(`${URL}/check-status/${orderId}`);
        return response.data;
    },
    getOrderInfo: async (orderId: string) => {
        const response = await axiosService.get<IRespondSuccess<IOrderInfo>>(`${URL}/${orderId}`);
        return response.data;
    }
}

