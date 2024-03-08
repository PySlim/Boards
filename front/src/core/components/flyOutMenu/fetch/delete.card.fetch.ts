import boardApi from "../../../apis/BoardApi/board.api.ts";

export const DeleteCardFetch = async (id: number)=>{
     await boardApi.delete(`/card/${id}`)
}