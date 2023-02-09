export interface IFriendRequest {
    name: string
    email: string
    phone: string
}

export interface IFriendResponse {
    name: string
    email: string
    phone: string
    user: string
}

export interface IFriendUpdate {
    phone?: string
    email?: string
    name?: string
}