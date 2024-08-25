import axiosService from "@/configurations/axios-service";

const API_URL = process.env.API_URL;
console.log("API_URL: ", API_URL);
const ENDPOINT = 'regions';
const URL = `${API_URL}/${ENDPOINT}`;

export const regionApi = {
    getAll: async() => {
        const response = await axiosService.get<IRespondSuccess<IPagination<IRegion>>>(`${URL}?is_client=true&page_size=100`);
        return response.data;
    }
}