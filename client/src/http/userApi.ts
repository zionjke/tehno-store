import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";



export type UserParamsType = {
    email: string
    password: string,
}

export type UserResponceType = {
    email: string
    id: number
    role: string
}

export const authApi = {
    async registration (userData: UserParamsType) {
        const {data} = await $host.post('/api/user/registration', {...userData,role:'ADMIN'})
        localStorage.setItem('token',data.token)
        return jwtDecode(data.token)
    },
    async login(userData: UserParamsType) {
        const {data} = await $host.post('/api/user/login', userData)
        localStorage.setItem('token',data.token)
        const user = jwtDecode(data.token)
        return user
    },
    async check(){
        const {data} = await $authHost.get('/api/user/auth')
        localStorage.setItem('token',data.token)
        return jwtDecode(data.token)
    }
}