export const server:string = "http://localhost:4433/"

const apiurl = {
    LOGIN: "auth/login",
    REGISTER: "auth/register"
}

export const API_URL = Object.keys(apiurl).reduce((acc,key)=>{
    acc[key] = `${server}${apiurl[key as keyof typeof apiurl]}`;
    return acc;
}, {} as { [key: string]: string })
