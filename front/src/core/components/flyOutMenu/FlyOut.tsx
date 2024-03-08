import React, {useState} from "react";
import points from '../../assets/points.svg'
import { FlyOutPropsInterface} from "./interfaces/FlyOut.props.interface.ts";
import {DeleteCardFetch} from "./fetch/delete.card.fetch.ts";

export default function FlyOut(props) {

    const [open, setOpen] = useState(false)
    return (
        <div className={"bg-[#FFFFFF] rounded-r-xl"}>
            {
                React.Children.map(props.children, child =>
                React.cloneElement(child, {setOpen, open}))
            }
        </div>
    );
}

function FlyOutToggle({setOpen, open}){
    return (
        <img src={points} alt="menu" onClick={()=>setOpen(!open)}/>
    )
}

function FlyOutList({open, children}){
    return open && <ul className={"absolute border bg-[#FBC200] text-white font-bold py-2 px-2 rounded-lg"}>{children}</ul>
}

function FlyOutItem(props: FlyOutPropsInterface){
    const { id, setIsCreateCard, isCreateCard } = props

    const handlerDelete = async ()=>{
        if(props.children === "Edit")console.log("Editado")
        if(props.children === "Delete"){
            try{
                await DeleteCardFetch(Number(id))
                setIsCreateCard(!isCreateCard)
            }catch (error) {
                const msg = error as string
                console.log(msg)
            }
        }
    }

    return <li onClick={handlerDelete}>{props.children}</li>
}

FlyOut.FlyOutToggle = FlyOutToggle
FlyOut.FlyOutList = FlyOutList
FlyOut.FlyOutItem = FlyOutItem