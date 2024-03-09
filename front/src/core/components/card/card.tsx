import {CardPropsInterface} from "./interfaces/card.props.interface.ts";
import {FlyOutMenu} from "../flyOutMenu/FlyOutMenu.tsx";
import React, {useEffect, useState} from "react";

export  function Card(props: CardPropsInterface) {
    const { body, title, id, setLocalCards, localCards } = props
    const [showEdit, setShowEdit] = useState(false)

    return (
        <div>
            {
                React.Children.map(props.children, child =>
                React.cloneElement(child,{body, title, id, setLocalCards, localCards, showEdit, setShowEdit}))
            }
        </div>
    )
}
function CardPresentation({title, id, setLocalCards, localCards, body, showEdit, setShowEdit}){
    if(showEdit) return null
    return (
        <div className={"border mb-2 rounded-l-xl"}>
            <div className={"flex justify-between mb-2 pl-2"}>
                <p>
                    {title}
                </p>
                <FlyOutMenu id={id} setLocalCard={setLocalCards} localCards={localCards} setShowEditCard={setShowEdit} showEditCard={showEdit}/>
            </div>
            <div>
                <div className={" px-2 py-2 bg-[#FFFFFF] rounded-l-xl w-[100%]"}>
                    <p>
                        {body}
                    </p>
                </div>
            </div>
        </div>
    )
}
function CardEditor({title,body, showEdit, setShowEdit}){
    if(!showEdit) return null
    const [titleCard, setTitleCard] = useState(title)
    const [bodyCard, setBodyCard] = useState(body)

    const handlerClickCancel = ()=>{
        setShowEdit(false)
    }
    return (
        <div className={"bg-[#FFFFFF] px-2 py-2 rounded-lg mb-3 border-[#FBC200] border"}>
            <div>
                <p>
                    Card Title
                </p>
            </div>
            <div className={" mt-2"}>
                <input type="text" className={"border px-2 py-2 rounded-lg"} value={titleCard} onChange={(e)=>setTitleCard(e.target.value)}/>
            </div>
            <div>
                <p>
                    Card Body
                </p>
            </div>
            <div>
                <input type={"text"} className={"border px-2 py-2 rounded-lg"} value={bodyCard} onChange={(e)=>setBodyCard(e.target.value)}/>
            </div>
            <div className={"flex gap-8 mt-2"}>
                <button
                    className={" bg-[#FBC200] text-white font-bold py-3 px-3 rounded-lg text-sm hover:bg-[#5c21bd]"}>Update
                    card
                </button>
                <button className={" bg-[#E5E5E5] font-bold py-3 px-3 rounded-lg text-sm"} onClick={handlerClickCancel}> Cancel
                </button>
            </div>
        </div>
    )
}

Card.CardPresentation = CardPresentation
Card.CardEditor = CardEditor