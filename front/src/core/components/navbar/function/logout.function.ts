import boardConstants from "../../../constants/board.constants.ts";

export function logout(){
    window.localStorage.removeItem(boardConstants.tokenKey);
    window.localStorage.removeItem(boardConstants.idUser);
}