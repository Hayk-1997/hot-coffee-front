import { AxiosResponse } from 'axios';
import { TLoginInputs } from '../../types/user/login';
import { axiosInstance } from '../../config/axios/axios';

export const  fetchLoginRequest = async (formData: TLoginInputs) => {
    const { data } = await axiosInstance.post<AxiosResponse<any>>('');

    return data;
}