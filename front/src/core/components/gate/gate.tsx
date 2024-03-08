import React from 'react';
import {GatePropsInterface} from "./interfaces/gate.props.interface.ts";
import logo from '../../assets/logo.svg'
import arrow from '../../assets/arrow-right.svg'
import {GateInputPropsInterface} from "./interfaces/gateInput.props.interface.ts";


export function Gate(props: GatePropsInterface) {
    const {nameButton, nameLink, handlerLink, handlerButton, username, password} = props;

    return (
        <div>
            {
                React.Children.map(props.children, child =>
                    React.cloneElement(child, {nameButton, nameLink, handlerLink, handlerButton, username, password}))
            }
        </div>
    );
}


export function GateLogo() {
    return (
        <div className={" flex justify-center items-center"}>
            <div>
                <img src={logo} alt={"logg"} height={"96"} width={"96"}/>
            </div>
        </div>
    );
}

export function GateTitle(){
    return (
        <div className={"mt-9 flex justify-center items-center"}>
            <p className={" h-[72px]  w-[320px] text-4xl font-semibold text-center"}>
                Welcome to Boardable
            </p>
        </div>
    )
}

export function GateInput({ titleInput, setFunction, type }: GateInputPropsInterface){
    return (
        <div className={"mt-9  flex justify-center items-center flex-col"}>
            <div className={" w-[320px]"}>
                <p>{titleInput}</p>
            </div>
            <div className={"mt-2"}>
                <input type={type} className={"border border-gray-400 w-[320px] rounded-md h-[40px] py-2 px-2"}
                       onChange={(e) =>setFunction(e.target.value)}/>
            </div>
        </div>
    )
}

export function GateButton({handlerButton, nameButton, username, password}){
    const handlerButtonClick = ()=>{
        handlerButton(username, password)
    }
    return (
        <div className={"flex justify-center items-center mt-4"}>
            <button
                className={"w-[320px] h-[44px] bg-[#6D28D9] text-white font-bold rounded hover:bg-[#581cb8] focus:outline-none"}
                onClick={handlerButtonClick}>{nameButton}
            </button>
        </div>
    )
}

export function GateLink({handlerLink, nameLink}){
    return (
        <div className={"mt-8  flex justify-center items-center"}>
            <div className={"min-w-[143px] h-[24px] flex justify-center items-center"} onClick={handlerLink}>
                <div>
                    <p className={" text-[14px] font-semibold text-center text-[#6D28D9]"}>
                        {nameLink}
                    </p>
                </div>
                <div>
                    <img src={arrow} alt={"rows"}/>
                </div>
            </div>
        </div>
    )
}

Gate.GateLogo = GateLogo;
Gate.GateTitle = GateTitle;
Gate.GateInput = GateInput;
Gate.GateButton = GateButton;
Gate.GateLink = GateLink;


