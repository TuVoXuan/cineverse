declare interface IRespondSuccess<T>{
    success: boolean,
    message: string,
    data: T
}
declare interface IRespondError {
    success: boolean,
    message :string
}
declare interface IPagination<T>{
    current_page: number,
    data: T[],
    first_page_url: string,
    from: number,
    last_page: number,
    last_page_url: string,
    links: any,
    next_page_url: string,
    path: string,
    per_page: number,
    prev_page_url: string | null,
    to: number,
    total: number
}