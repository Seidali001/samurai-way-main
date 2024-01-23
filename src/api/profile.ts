import {instance} from "./instance/instance";




export const profileApi = {
    async getProfile(userId: number) {
        const res = await instance.get(`profile/${userId}`);
        return res.data;
    }
}