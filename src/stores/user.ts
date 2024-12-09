/* eslint-disable camelcase */
import { create } from "zustand";

export interface User {
    userId: string;
    userName: string;
    email: string;
    mobile: string;
    isAdmin: boolean;
}

export interface UserState {
    /**
     * 当前用户信息
     */
    user: User | null;

    /**
     * 获取当前用户信息
     * @returns 用户信息
     */
    fetchUser: () => Promise<User | null>;
}

// import _ from 'lodash';
// import {
//     get,
// } from 'src/common/request';

export function getUser() {
    return new Promise((resolve) => {
        resolve({
            userId: "c435a3a94e3248758862b28d5f0427cc",
            userName: "search",
            email: "atding@163.com",
            mobile: "13800000000",
            isAdmin: true,
        });
    });
}

const useUserStore = create<UserState>()((set: any) => ({
    user: null,
    systemUsers: [],
    fetchUser: () => {
        return getUser()
            .then((res: any) => {
                set({ user: res });
                return res;
            })
            .catch((err) => {
                console.log("fetchUser::error", err);
                set({ user: null });
                return null;
            });
    },
}));

// import axios from "axios";
// import useSWR from 'swr'；
// import {create} from 'zustand';

// export const getFetcher = (url) => {
//   return axios.get(url).then((res) => res.data);
// };

// export const useStore = create((set, get) => ({
//   products: [],
//   getProducts: (key) => {

//     console.log('==========request=========');

//     return useSWR(key, getFetcher, {
//       suspense: true, // 开启React Suspense
//       onSuccess: (data) => set(() => ({products: data.products})) // 在回调函数里处理状态变更
//     })
//   },
// }));

// function ProductList() {
//     const {data} = useStore(s => s.getProducts(API_PRODUCTS.getProducts)); // 传入selector，获取特定的action

export default useUserStore;
