import {DataInterface} from "../../../utils/router/data.interface";
import {NextFunction} from "express";

export interface UserDataInterface extends Omit<DataInterface,'List'>{
    GetUserByUserName(username: string, next: NextFunction):Promise<any>
    Sign(username: string, next: NextFunction):Promise<any>
    GetUserById(id: string, next: NextFunction):Promise<any>
    GetUserByEmail(email:string, next: NextFunction):Promise<any>
}
