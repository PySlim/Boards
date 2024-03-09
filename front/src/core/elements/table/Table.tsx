import Navbar from "../../components/navbar/Navbar.tsx";
import {ListCreator} from "../../components/listCreator/ListCreator.tsx";
import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

import {GetBoardById, GetListByBoard} from "./fetch/table.fetch.ts";
import {ListComponent} from "../../components/list/List.component.tsx";



const Table = () => {
    const [lists, setLists] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [isError, setIsError] = useState(false)
    const { id } = useParams()
    const [currentColor, setCurrentColor] = useState("")
    const [isUpdateList, setIsUpdateList] = useState(false)



    useEffect(()=>{
        try{
            const fetch = async ()=>{
               const listGets =  await GetListByBoard(Number(id))
                console.log("Esta es la list",listGets)
                setLists(listGets)
            }
            fetch()
            const getBoard = async ()=>{
                const board = await GetBoardById(Number(id))
                setCurrentColor(board.color)
            }
            getBoard()
            console.log('renderiazado principal')

        }catch(error){
            const msg = error as string
            setErrorMessage(msg)
            setIsError(true)
        }
    },[isUpdateList])

    return (
        <div>
            <Navbar/>
            <div className={" ml-4"}>
            <ListCreator lists={lists} setLists={setLists} errorMessage={errorMessage} setErrorMessage={setErrorMessage}
                         setIsError={setIsError} idBoard={Number(id)}/>
            </div>
            <div style={{backgroundColor: currentColor}} className={"border border-black  h-screen mt-4 px-4 py-4"}>
                <div className={"flex gap-4"}>
                    {
                        lists.map((list, index)=>(
                            <ListComponent key={index} titleList={list.titlelist} id={list.idlist}
                                           setIsUpdateLists={setIsUpdateList} isUpdateList={isUpdateList}
                                           setIsError={setIsError} setErrorMessage={setErrorMessage} cards={list.cards}/>
                        ))
                    }
                </div>

            </div>


        </div>
    );
};

export default Table;