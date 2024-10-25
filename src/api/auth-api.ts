import axiosService from "@/configurations/axios-service";

const API_URL = process.env.API_URL;

export const authApi = {
    login: async (account: string, password: string) => {
        const response = await axiosService.post<IRespondSuccess<ILogin>>(`${API_URL}/sign-in`, {
            account, password
        });
        return response.data;
    },
    register: async (body: IRegisterBody) => {
			const response = await axiosService.post<IRespondSuccess<string>>(`${API_URL}/sign-up`, body);
			return response.data;
		}
}