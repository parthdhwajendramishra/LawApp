export type Authentication = {
    data: {
        username: string
        token: string
    }

}
export type RootState = {
    authentication: Authentication
}       