import {instance} from "./instance/instance";


export const followApi = {
    async setFollowUser(userId: number) {
        const res = await instance.post(`follow/${userId}`);
        return res.data;
    },
    async setUnfollowUser(userId: number) {
        const res = await instance.delete(`follow/${userId}`);
        return res.data;
    }
}