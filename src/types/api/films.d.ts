declare interface IFile extends ITimestamped {
    public_id: string,
    url: string,
}

declare interface IFilmGenre extends ITimestamped {
    name: string,
    code: string,
    pivot: {
        film_id: number,
        genre_id: number
    }
}

declare interface IFilmArtist extends ITimestamped
{
    name: string,
    biography: string|null,
    birthday: string | null,
    code: string,
    pivot: {
        film_id: number,
        artist_id: number
    }
}

declare interface IFilmDetail extends ITimestamped{
    release_date: string,
    duration: number,
    age_restricted: number,
    trailer: string,
    thumbnail: IFile,
    thumbnail_bg: IFile,
    title: string,
    description: string,
    code: string,
    genres: IFilmGenre[],
    directors: IFilmArtist[],
    producers: IFilmArtist[],
    actors: IFilmArtist[],
}