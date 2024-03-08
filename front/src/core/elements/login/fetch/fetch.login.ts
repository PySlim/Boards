import boardConstants from "../../../constants/board.constants.ts";
import boardApi from "../../../apis/BoardApi/board.api.ts";

export async function login(username: string, password: string):Promise<void>{
        const response = await boardApi.post('/user/login',{username, password});
        window.localStorage.setItem(boardConstants.tokenKey, response.data.data[0]['token']);
        window.localStorage.setItem(boardConstants.idUser,response.data.data[0]['id'])
        return response.data.data[0] ;
}