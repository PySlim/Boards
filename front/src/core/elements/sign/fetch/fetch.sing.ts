import boardApi from "../../../apis/BoardApi/board.api.ts";
import boardConstants from "../../../constants/board.constants.ts";

export async function sing(username: string, password: string){
    const response = await boardApi.post("/user/sign",{
        username,
        password
    });
    const { token, id } = response.data.data[0];
    window.localStorage.setItem(boardConstants.tokenKey, token);
    window.localStorage.setItem(boardConstants.idUser,id)
    return response.data.data[0];

}