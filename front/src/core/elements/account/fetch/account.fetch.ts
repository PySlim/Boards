import boardApi from "../../../apis/BoardApi/board.api.ts";
import boardConstants from "../../../constants/board.constants.ts";
import {UserUpdateInterface} from "../../../apis/BoardApi/interfaces/user.interface.ts";

export const GetUserData = async ()=>{
    const id = window.localStorage.getItem(boardConstants.idUser)
    const response = await boardApi.get(`/user/${id}`)
    return response.data.data[0]
}

export const UpdateUserData = async (object: UserUpdateInterface)=>{
    const id = window.localStorage.getItem(boardConstants.idUser)
    const response = await boardApi.patch(`/user/${id}`, object)
    return response.data.data[0]
}