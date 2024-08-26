declare interface ICinemaBranches  {
    id: number;
    name: string;
    code: string;
    logo: {
        id: number;
        url: string;
    }
    branches: {
        id: number;
    name: string;
    code: string;
    cinema_company_id: number;
    }[]
}
