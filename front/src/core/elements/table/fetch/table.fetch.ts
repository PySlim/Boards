import boardApi from "../../../apis/BoardApi/board.api.ts";

export const GetListByBoard = async (id: number)=>{
    const response = await boardApi.get(`/list/board/${id}`)
    return response.data.data
}

export const GetBoardById = async (id: number)=>{
    const response = await boardApi.get(`/board/${id}`)
    return response.data.data[0]
}