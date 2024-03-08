import axios, {InternalAxiosRequestConfig} from 'axios';
import BoardConstants from "../../constants/board.constants.ts";
import {getValidationError} from "../../utils/getValidationError/get.validation.error.ts";


const boardApi = axios.create({
    baseURL: BoardConstants.baseUrl
})

const reloadHeader = (request: InternalAxiosRequestConfig)=>{
    request.headers.Authorization = "Bearer " + window.localStorage.getItem(BoardConstants.tokenKey)
    return request
}
boardApi.interceptors.request.use((request)=>{
    return reloadHeader(request)
})

boardApi.interceptors.response.use((response)=>{
    return response
},(error)=>{
    return Promise.reject(getValidationError(error))
})

export default boardApi

