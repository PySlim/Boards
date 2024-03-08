import {useEffect, useState} from "react";
import BoardFrontComponent from "../boardFront/BoardFront.component.tsx";
import {BoardInterface} from "./interfaces/board.interface.ts";

import {fetchUpdateBoard} from "./fetch/fetch.update.board.ts";
import BoardCreatorComponent from "../boarCreator/boardCreator.component.tsx";

export function Board(props: BoardInterface) {
    const { color, id, valueTitle } = props
    const [showText, setShowText] = useState<boolean>(true);
    const [currentColor, setCurrentColor] = useState<string>(color)
    const [titleValue, setTitleValue] = useState("inicial")

    useEffect(()=>{
        setTitleValue(valueTitle)
    },[])
    const handlerButtonSave = async (titleValue: string, currentColor: string)=>{
        const data = await fetchUpdateBoard(id,titleValue,currentColor)
        setCurrentColor(data.color)
        setTitleValue(data.title)
        setShowText(!showText)
    }

    return (
        <div>
            {showText &&  <div style={{backgroundColor: currentColor}}
                 className={`h-36 w-64  text-lg font-bold rounded-lg px-4 py-4`}>
                <BoardFrontComponent id={id} setShowText={setShowText} showText={showText}
                                                  valueTitle={titleValue}/>
            </div>}
            {!showText && <BoardCreatorComponent handlerCreateBoard={handlerButtonSave} title={"Title Board"} titleInitial={valueTitle} colorInitial={currentColor} titleButton={"Save"}/>}
        </div>

    );
}

