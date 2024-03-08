import React from "react";
import {FormUpdatePropsInterface} from "./interfaces/formUpdate.props.interface.ts";

export function FormUpdate(props:FormUpdatePropsInterface) {
    const { handlerButton } = props

    return (
        <div className={"mt-10 sm:mt-20"}>
            <div className={"max-w-[320px] mx-auto"}>
                {
                    React.Children.map(props.children, child =>
                     React.cloneElement(child, {handlerButton}))
                }
            </div>
        </div>
    );
}

function FormInput({titleInput, type, value, setValue }){
    return (
        <div className={"mb-4 flex justify-center items-center flex-col"}>
            <div className={" w-[320px]"}>
                <p>{titleInput}</p>
            </div>
            <div className={"mt-2"}>
                <input type={type} className={"border border-gray-400 w-[320px] rounded-md h-[40px] py-2 px-2"}
                       value={value} onChange={(e) => setValue(e.target.value)}/>
            </div>
        </div>
    )
}

function FormButton({handlerButton}){
    const handlerClickButtonUpdate = ()=>{
        handlerButton()
    }
    return (
        <div className={"flex justify-center items-center mt-4"}>
            <button
                className={"w-[320px] h-[44px] bg-[#6D28D9] text-white font-bold rounded hover:bg-[#581cb8] focus:outline-none"}
                onClick={handlerClickButtonUpdate}>Update
            </button>
        </div>
    )
}

FormUpdate.FormInput = FormInput
FormUpdate.FormButton = FormButton