declare interface IShowTimeItem {
    id: number,
    screening_time: string
}

declare interface IShowtime {
    film: {
        id: number,
        title: string,
        duration: number,
        trailer: string,
        thumbnail: {
            id: number,
            url: string
        },
        code: string,
        age_restricted: number
    },
    showtimes: {
        voiceover?: {
            id: number,
            screening_time: string
        }[],
        vietsub?: {
            id: number,
            screening_time: string
        }[]
    }
}

declare interface IShowtimeForFilm {
    company: {
        id: number,
        name: string,
        logo: {
            id: number,
            url: string
        }
    },
    branches: {
        id: number,
        name: string,
        address: string,
        region_id: number,
        code: string,
        showtimes: {
            vietsub: IShowTimeItem[],
            voiceover: IShowTimeItem[]
        }
    }[]
}