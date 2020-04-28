export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    exp: number;
    iat: number;
}
export interface TokenResponse {
    token: string;
}

export interface TokenPayload {
    email: string;
    password: string;
    name?: string;
}