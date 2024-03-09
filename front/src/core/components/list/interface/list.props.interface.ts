import React from "react";

export interface ListPropsInterface{
    id: string | number,
    titleList: string,
    setIsUpdateLists: (value: T | ((prevState: T) => T)) => void,
    isUpdateList: boolean,
    setIsError: (value: T | ((prevState: T) => T)) => void,
    setErrorMessage: (value: T | ((prevState: T) => T)) => void,
    cards: [],
    children: React.ReactNode
}