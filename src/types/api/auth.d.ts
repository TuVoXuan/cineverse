declare interface IUser {
    id: number,
    name: string | null,
    email: string,
    account: string,
    is_active: number,
    phone: string,
    avatar: IFile | null,
    created_at: string,
    updated_at: string
}

declare interface ILogin {
    user: IUser,
    token: string
}