import {useNavigate} from "react-router-dom";
import edit from '../../assets/edit.png'
import React from 'react';
import {BoardFrontPropsInterface} from "./interfaces/boardFront.props.interface.ts";
export function BoardFront(props: BoardFrontPropsInterface) {
    const { id, valueTitle, setShowText, showText} = props;
    return (
        <div className={"flex flex-row h-[100%]"}>
            {
             React.Children.map(props.children, child =>
              React.cloneElement(child, {id, valueTitle, setShowText, showText}))
            }
        </div>
    );
}


function BoardTitle ({id, valueTitle}){
    const navigate =useNavigate()
    const handlerNavigate = ()=>{
        navigate(`/table/${id}`)
    }
    return (
        <div className={"flex items-center justify-center w-[90%] "} onClick={handlerNavigate}>
            <p className={"ml-[17%]"}>
                {valueTitle}
            </p>
        </div>
    )
}

function BoardTools ({setShowText, showText}){
    const toggleShowText =  () => {
        setShowText(!showText);
    }
    return (
        <div className={" flex items-end"} onClick={toggleShowText}>
            <img src={edit} alt="edit" height={30} width={30}/>
        </div>
    )
}

BoardFront.BoardTitle = BoardTitle;
BoardFront.BoardTools = BoardTools;
