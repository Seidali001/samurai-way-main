import {instance} from "./instance/instance";




export const authMeApi = {
    async getAuthMe() {
        const res = await instance.get(`auth/me`);
        return res.data.data;
    }
}
