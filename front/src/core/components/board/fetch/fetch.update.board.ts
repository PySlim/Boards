import boardApi from "../../../apis/BoardApi/board.api.ts";

export const fetchUpdateBoard = async (id: string | number, title: string , color: string)=>{
    const response = await  boardApi.patch(`/board/${id}`,{title, color})
    return response.data.data[0]
}