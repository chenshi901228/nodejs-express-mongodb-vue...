

const baseUrl = "http://39.104.121.78"

import { MessageBox } from 'element-ui';
export default {
    namespaced: true,
    state: {
        rows: [],
        default_type: "全部",
        total: 0,
        currentPage: 1,
        pageSize: 5,
        loading: true
    },
    mutations: {
        loadState(state, payload) {
            state.loading = payload
        },
        getData(state, payload) {
            Object.assign(state, payload)
        }
    },
    actions: {
        getData_async({ commit }, payload) {
            commit("loadState", true)
            axios
                .post(baseUrl + "/getProject", {
                    type: payload.default_type,
                    currentPage: payload.currentPage,
                    pageSize: payload.pageSize
                })
                .then(res => {
                    commit("getData", res.data.list)
                    commit("loadState", false);
                })
                .catch(error => {
                    if (error) {
                        commit("loadState", false);
                        MessageBox.alert("Error:" + error.message, "提示", {
                            confirmButtonText: "确定"
                        });
                    }
                });
        },
        delProject_async({ commit }, payload) {
            commit("loadState", true)
            axios
                .post(baseUrl + "/delProject", {
                    _id: payload._id,
                    type: payload.default_type,
                    currentPage: payload.currentPage,
                    pageSize: payload.pageSize
                })
                .then(res => {
                    commit("getData", res.data.list)
                    commit("loadState", false)
                })
                .catch(error => {
                    if (error) {
                        commit("loadState", false);
                        MessageBox.alert("Error:" + error.message, "提示", {
                            confirmButtonText: "确定"
                        });
                    }
                });
        }
    }
}