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
        address: string
    }[]
}

declare interface IBranchCinema {
    id: number;
    name: string;
    address: string;
    code: string;
} 

declare interface IAuditorium {
    id: number,
    cinema_branch_id: number;
    name: string,
    capacity: number;
    seat_direction: string,
    code: string,
    columns: number,
    rows: number,
    cinema_branch: IBranchCinema
}

declare interface ISeatDB {
    id: number;
    label: string | null,
    seat_type: string,
    x_position: number
}

declare interface ISeatLayoutDB {
    [row: string] : ISeatDB[]
}

declare interface ISeatLayoutForShowtime {
    seatingLayout: ISeatLayoutDB;
    auditorium: IAuditorium
}
