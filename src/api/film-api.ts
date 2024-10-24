import axiosService from "@/configurations/axios-service";

const API_URL = process.env.API_URL;
const ENDPOINT = 'films';
const URL = `${API_URL}/${ENDPOINT}`;

export const filmApi = {
    getFilmDetail: async (filmCode: string) => {
        const response = await axiosService.get<IRespondSuccess<IFilmDetail>>(`${URL}/${filmCode}`);
        return response.data;
    },
    getFilmsShowing: async () => {
        const response = await axiosService.get<IRespondSuccess<IShortFilmInfo[]>>(`${URL}/showing`);
        return response.data;
    },
    getFilmsShowingInMonthOfYear: async (month: number, year: number) => {
        const response = await axiosService.get<IRespondSuccess<IShortFilmInfo[]>>(`${URL}/showing/${month}/${year}`);
        return response.data;
    }
}