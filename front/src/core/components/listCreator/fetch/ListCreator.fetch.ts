import boardApi from "../../../apis/BoardApi/board.api.ts";
import {ListInterface} from "../../../apis/BoardApi/interfaces/list.interface.ts";

export const ListCreatorFetch = async (object: ListInterface)=>{
    const response = await boardApi.post(`/list/`, object)
    return response.data.data[0]
}