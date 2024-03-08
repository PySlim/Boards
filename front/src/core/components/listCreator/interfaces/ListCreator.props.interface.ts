import {ListInterface} from "../../../apis/BoardApi/interfaces/list.interface.ts";

export interface ListCreatorPropsInterface{
    idBoard: string | number ,
    lists: ListInterface[],
    setLists: (value: T | ((prevState: T) => T)) => void,
    errorMessage: string,
    setErrorMessage: (value: T | ((prevState: T) => T)) => void,
    setIsError: (value: T | ((prevState: T) => T)) => void,
}