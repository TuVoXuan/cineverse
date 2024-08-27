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