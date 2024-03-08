import {ListCreatorPropsInterface} from "./interfaces/ListCreator.props.interface.ts";
import {useState} from "react";
import {ListCreatorFetch} from "./fetch/ListCreator.fetch.ts";
import {ListInterface} from "../../apis/BoardApi/interfaces/list.interface.ts";

export const ListCreator = (props: ListCreatorPropsInterface) => {
    const [titleList, setTitleList] = useState("")
    const { idBoard, lists, setLists, setErrorMessage, setIsError } = props

    const handlerButtonCreateList = async ()=>{
        if(titleList !== ""){
            try{
                const list: ListInterface = {
                    title: titleList,
                    board_id: idBoard
                }
                const listCreated = await ListCreatorFetch(list)
                setLists([...lists, listCreated])
                setTitleList("")
            }catch(error){
                const msg = error as string
                setErrorMessage(msg)
                setIsError(true)
            }
        }
    }
    return (
        <div className={"border w-72  py-3 px-3 rounded-lg"}>
            <div>
                <p className={" font-bold"}>
                    List Title
                </p>
            </div>
            <div className={" mt-2 mb-2"}>
                <input type="text" className={"border py-2 px-2 rounded-lg"} value={titleList} onChange={(e) =>setTitleList(e.target.value)}/>
            </div>
            <div>
                <button className={"border py-3 px-3 rounded-xl bg-[#6D28D9] hover:bg-[#5a20b6] text-white font-bold"} onClick={handlerButtonCreateList}>
                    Create New List
                </button>
            </div>
        </div>
    );
};

