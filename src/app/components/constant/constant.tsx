export const server:string = "http://localhost:4433/"
export const NextServer:string = "http://localhost:4000/"
const apiurl = {
    LOGIN: "auth/login",
    LOGOUT: "api/authen",
    REGISTER: "auth/register",
    AUTHENTICATION: "auth/authentication"
}

export const API_URL = Object.keys(apiurl).reduce((acc,key)=>{
    acc[key] = `${server}${apiurl[key as keyof typeof apiurl]}`;
    return acc;
}, {} as { [key: string]: string })

export const NEXT_API_URL = Object.keys(apiurl).reduce((acc,key)=>{
    acc[key] = `${NextServer}${apiurl[key as keyof typeof apiurl]}`;
    return acc;
}, {} as { [key: string]: string })
