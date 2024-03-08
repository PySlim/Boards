import React from "react";

export interface SelectPropsInterface{
    titleSelect: string,
    target: string,
    handlerSelect: (event:React.ChangeEvent<HTMLSelectElement>)=> void
}