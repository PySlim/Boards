import boardApi from "../../../apis/BoardApi/board.api.ts";

export const UpdateListFetch = async (idList: number, title: string)=>{
   const response = await boardApi.patch(`/list/${idList}`,{title})
    return response.data.data[0]
}

export const GetCardByList = async (id: number)=>{
    const response = await boardApi.get(`/card/list/${id}`)
    return response.data.data
}

export const CreateCard = async (title: string, body: string, list: number)=>{
    const data={
        title,
        body,
        list_id: list
    }
    const response = await boardApi.post(`/card/`, data)
    return response.data.data[0]
}