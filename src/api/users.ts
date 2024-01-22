import {instance} from "./instance/instance";




export const userApi = {
    async getUsers() {
        const res = await instance.get("users/");
        return res.data;
    },
    async getCurrentPageUsers(currentPage: number = 1, count: number = 10) {
        const res = await instance.get(`users?page=${currentPage}&count=${count}`);
        return res.data;
    },
    async setFollowUser(userId: number) {
        const res = await instance.post(`follow/${userId}`);
        return res.data;
    },
    async setUnfollowUser(userId: number) {
        const res = await instance.delete(`follow/${userId}`);
        return res.data;
    }


}
