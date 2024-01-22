import {instance} from "./instance/instance";




export const profileApi = {
    async getProfile(userId: string) {
        const res = await instance.get(`profile/${userId}`);
        return res.data;
    }
}