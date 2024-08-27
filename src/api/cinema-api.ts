import axiosService from "@/configurations/axios-service";

const API_URL = process.env.API_URL;
const ENDPOINT = 'cinemas';
const URL = `${API_URL}/${ENDPOINT}`;

export const cinemaApi = {
    getCinemaBranchByRegion: async (region: string) => {
        const response = await axiosService.get<IRespondSuccess<ICinemaBranches[]>>(`${URL}/branches/region/${region}`);
        return response.data;
    }
}