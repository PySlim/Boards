import boardApi from "../../apis/BoardApi/board.api.ts";
import boardConstants from "../../constants/board.constants.ts";
import BoardCreatorComponent from "../../components/boarCreator/boardCreator.component.tsx";
import ErrorModal from "../../components/errorModal/ErrorModal.tsx";
import Navbar from "../../components/navbar/Navbar.tsx";
import React, {useEffect, useState} from "react";
import SelectComponent from "../../components/select/Select.component.tsx";
import {BoardsStateObjectInterface} from "./interfaces/board.state.interface.ts";
import {fetchGetBoards} from "./fetch/fetch.bords.ts";
import {Board} from "../../components/board/board.tsx";

const Boards = () => {
    const [boardsRequest, setBoardsRequest] = useState<BoardsStateObjectInterface[]>([])
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    // Get id User to storage
    const user_id= Number(window.localStorage.getItem(boardConstants.idUser))



    useEffect(()=>{
        const fetchDataBoards = async ()=>{
            if(isLoading)return;

            setIsLoading(true)
            try{
                const data = await fetchGetBoards(user_id);
                setBoardsRequest(data ?? []);
            }catch (error){
                const message = error as string
                setIsError(true)
                setErrorMessage(message)
            }
        }
       fetchDataBoards()
    },[])

    const handlerOptionSelect = async (event: React.ChangeEvent<HTMLSelectElement>)=>{
        const order = event.target.value as "Created" | "Title"
        if(order === "Title"){
            setBoardsRequest([])
            const response = await boardApi.get(`/board/user/${user_id}?sort=title&user_id=${user_id}`)
            const newData = response.data.data
            setBoardsRequest([...newData]);
        }else if(order==="Created"){
            setBoardsRequest([])
            const response = await boardApi.get(`/board/user/${user_id}?sort=created&user_id=${user_id}`)
            const newData = response.data.data
            setBoardsRequest([...newData]);
        }
    }
    const handlerCreateBoard = async (title: string, color: string)=>{
        try{
            const body = {
                title: title,
                color: color,
                user_id: user_id
            }
            const response = await boardApi.post('/board',body)
            setBoardsRequest([...boardsRequest,response.data.data[0]])

        }catch (error) {
            const msg  = error as string
            setErrorMessage(msg)
            setIsError(true)
        }
    }
    const onClose = ()=>{
        setIsError(false)
    }
    return (
        <div>
            <Navbar/>
            <div className={" ml-4 mr-4"}>
            <div className={"mx-auto max-w-screen-lg"}>
                <SelectComponent handlerSelect={handlerOptionSelect} titleSelect={"My boardFront"} target={"Sort By"}/>
                <div className={"mt-8 grid grid-cols-1 gap-8 w-[82%] mx-auto px-4 sm:grid-cols-2 lg:grid-cols-3"}>
                    <BoardCreatorComponent handlerCreateBoard={handlerCreateBoard} title={"Board Title"} titleInitial={""} colorInitial={"#C5CAE9"} titleButton={"Create"}/>
                    {
                        boardsRequest.map((board, index)=>(
                            <Board key={index} valueTitle={board.title} id={board.id} color={board.color}/>
                        ))
                    }
                </div>
                <ErrorModal errorMessage={errorMessage} showModal={isError} onClose={onClose}/>
            </div>
            </div>
        </div>
    );
};

export default Boards;