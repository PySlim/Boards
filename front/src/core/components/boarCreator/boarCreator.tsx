import React, {useEffect, useState} from "react";
import {BoardCreatorPropsInterface} from "./interface/boardCreator.props.interface.ts";
import {SwatchesPicker, ColorResult} from "react-color";
import elipse from '../../assets/Ellipse.svg'

export const BoardCreator = (props: BoardCreatorPropsInterface) => {
    const { title, handlerCreateBoard, titleInitial, colorInitial, titleButton} = props
    const [currentColor, setCurrentColor] = useState("")
    const [titleValue, setTitleValue] = useState("")
    const [showColorPicker, setShowColorPicker] = useState(false)

    useEffect(()=>{
        setTitleValue(titleInitial)
        setCurrentColor(colorInitial)
    },[])

    return (
        <div style={{backgroundColor: currentColor}} className={`h-36 w-64  text-lg font-bold rounded-lg px-4 py-4`}>
            {
                React.Children.map(props.children, child =>
                 React.cloneElement(child, {setCurrentColor, currentColor, title, titleValue, setTitleValue, setShowColorPicker, showColorPicker, handlerCreateBoard, titleButton}))
            }
            {showColorPicker && <SwatchesPicker color={currentColor} onChangeComplete={(color: ColorResult)=>setCurrentColor(color.hex)}/>}
        </div>
    );
};



function BoardCreatorTitle({title}) {
    return (
        <div>
            <p>
                {title}
            </p>
        </div>
    );
}

function BoardCreatorInput({titleValue, setTitleValue}){
    return (
        <div>
            <input type={"text"}
                   className={" w-56 rounded-lg h-10 px-3 py-2"} value={titleValue}
                   onChange={(e) => setTitleValue(e.target.value)}/>
        </div>
    )
}

function BoardCreatorColorButton({setShowColorPicker, showColorPicker, handlerCreateBoard, titleValue, currentColor, setCurrentColor, setTitleValue, titleButton}){
    const handlerClickPicker = ()=>{
        setShowColorPicker(!showColorPicker)
    }
    const handlerClickCreate = ()=>{
        handlerCreateBoard(titleValue,currentColor)
        setCurrentColor("#C5CAE9")
        setTitleValue("")
    }
    return (
        <div>
            <div className={"flex items-center justify-between mt-4"}>
                <div className={"flex gap-2"}>
                    <div>
                        Color
                    </div>
                    <img src={elipse} alt="color" onClick={handlerClickPicker}/>
                </div>
                <button className={"bg-[#6D28D9] text-white py-2 px-4 rounded-lg text-sm"} onClick={handlerClickCreate}>
                    {titleButton}
                </button>
            </div>
        </div>
    )
}

BoardCreator.BoardCreatorTitle = BoardCreatorTitle;
BoardCreator.BoardCreatorInput = BoardCreatorInput;
BoardCreator.BoardCreatorColorButton = BoardCreatorColorButton;
