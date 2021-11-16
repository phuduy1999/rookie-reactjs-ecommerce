import axiosClient from "./axiosClient";

const categoryApi = {
  getParent: () => {
    const url = '/categories/parent';
    return axiosClient.get(url);
  },

  getSub: (id) => {
    const url = `/categories/sub/${id}`;
    return axiosClient.get(url);
  },

}

export default categoryApi;
