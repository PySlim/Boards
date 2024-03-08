import boardApi from "../../../apis/BoardApi/board.api.ts";

export async  function fetchGetBoards(id: string | number){
       const response = await boardApi.get(`/board/user/${id}`)
       console.log(response.data.data)
       return response.data.data;
}