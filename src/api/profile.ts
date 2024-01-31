import {instance} from "./instance/instance";


export const profileApi = {
    async getProfile(userId: number) {
        userId = 27608
        const res = await instance.get(`profile/${userId}`);
        return res.data;
    },
    async getProfileStatus(userId: number) {
        userId = 27608
        return await instance.get(`/profile/status/${userId}`);
    },
    async updateProfileStatus(status: string) {
        return await instance.put(`/profile/status/`, {status: status});

    },

}