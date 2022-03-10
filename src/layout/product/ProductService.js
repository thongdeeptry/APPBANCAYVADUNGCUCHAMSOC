import axiosInstance from '../../ultil/axios'


export const getProductForHomePage = async () =>{
    const res = axiosInstance.get('api/products/get-for-home-page');
    return res;
}
export const getProductDetai = async (id) =>{
    const res = axiosInstance.get(`api/products/${id}/view`);
    return res;
}
export const SaveCart = async (data) =>{
    const response = await axiosInstance.post('api/carts',data);
    return response;
}
export const search = async (keyword) =>{
    const response = await axiosInstance.post(`api/products/search?name=${keyword}`);
    return response;
}