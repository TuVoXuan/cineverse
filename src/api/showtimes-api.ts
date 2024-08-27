import axiosService from "@/configurations/axios-service";

const API_URL = process.env.API_URL;
const ENDPOINT = 'showtimes';
const URL = `${API_URL}/${ENDPOINT}`;

export const showtimesApi = {
    getShowtimesByDateAndCinemaBranch: async (branch: string, date: string) => {
        const response = await axiosService.get<IRespondSuccess<IShowtime[]>>(`${URL}/branch/${branch}/date/${date}`);
        return response.data;
    }
}