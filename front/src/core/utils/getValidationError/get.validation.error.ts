import {TypeWithKey} from "./type.with.key.ts";
import {AxiosError} from "axios";

export const getValidationError= (error: AxiosError)=>{
    const cd = error.code
    let messageBadRequest ='';
    if (cd === "ERR_BAD_REQUEST" || cd === "ERR_BAD_RESPONSE"){

        if(error.response && error.response.data && error.response.data.error && error.response.data.error.message){
            messageBadRequest = error.response.data.error.message
        }else{
            messageBadRequest= "The input data is incorrect"
        }
    }
    const codeMatcher: TypeWithKey<string>={
        "ERR_NETWORK": "Error connecting to the servers",
        "ERR_BAD_REQUEST": messageBadRequest,
        "ERR_BAD_RESPONSE": messageBadRequest,
        "GENERIC": "Generic Error"
    };
    if(cd) return codeMatcher[cd]
    return codeMatcher["GENERIC"]
}