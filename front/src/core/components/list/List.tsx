import React, {useEffect, useState} from 'react';
import point from '../../assets/points.svg'
import check from '../../assets/check.png'
import cancel from '../../assets/cancel.png'
import {CreateCard, GetCardByList, UpdateListFetch} from "./fetch/List.fetch.ts";
import {ListPropsInterface} from "./interface/list.props.interface.ts";
import CardComponent from "../card/card.component.tsx";

export function List(props:ListPropsInterface) {
    const { titleList, id, setIsUpdateList, isUpdateList, setIsError, setErrorMessage, cards} = props;
    const [position, setPosition] = useState({left:0, top:0})
    const [showModal, setShowModal] = useState(false)
    const [showEdit, setShowEdit] = useState<boolean>(false)
    const [showEditTitle, setShowEditTitle] = useState(false)
    const [title, setTitle] = useState(titleList)
    const [localCards, setLocalCards] = useState([])



    useEffect(()=>{
        setLocalCards(cards)
    },[])

    return (
        <div className={"w-72 bg-[#F5F5F5] px-2 py-2 rounded-lg"}>
            {
                React.Children.map(props.children, child =>
                React.cloneElement(child, {title, setTitle ,setPosition, setShowModal, position, showModal,
                    showEdit, setShowEdit, showEditTitle, setShowEditTitle, setIsUpdateList, isUpdateList, id,
                setIsError, setErrorMessage, localCards, setLocalCards}))
            }
        </div>
    );
}

function ListTitle ({title, setPosition, setShowModal, showEditTitle, showModal}){
    if(showEditTitle) return null
    const openModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        const rect = event.target.getBoundingClientRect();
        setPosition({left:rect.left, top: rect.bottom + window.scrollY})
        setShowModal(!showModal)
    }

    return (
        <div className={"flex justify-between mb-2"}>
            <div>
                <p className={"text-lg font-bold"}>{title}</p>
            </div>
            <div onClick={openModal}>
                <img src={point} alt="menu"/>
            </div>
        </div>
    )
}
function ListMenuEditTitle({position, setShowModal, showModal, setShowEditTitle, showEditTitle}){
    if(!showModal) return null
    const closeModal = ()=>{
        setShowModal(!showModal)
        setShowEditTitle(!showEditTitle)
    }
    return (
        <div className="absolute bg-white p-4 rounded-lg shadow-lg flex flex-col items-start"
                           style={{left: position.left, top: position.top}}>

            <button onClick={closeModal}>Edit</button>
            <button>Delete</button>
        </div>
    )
}
function ListEditCard({setShowEdit, showEdit, id, localCards, setLocalCards, setIsError, setErrorMessage}){
    const [textCard, setTextCard] = useState("")
    const [titleCard, setTitleCard] = useState("")

    if(!showEdit) return null
    const toggleShowEdit = ()=>{
        setShowEdit(!showEdit)
    }
    const handlerAddCar = async ()=>{
        if(titleCard === "" || textCard === "" )return
        try{
            const cardCreated = await CreateCard(titleCard,textCard,id)
            const cardEdit = {
                "idcard":cardCreated.id,
                "bodycard":cardCreated.body,
                "titlecard":cardCreated.title
            }
            setLocalCards([...localCards, cardEdit])
            setTextCard("")
            setTitleCard("")
        }catch (error) {
            const msg = error as string
            setIsError(true)
            setErrorMessage(msg)
        }
    }
    return (
        <div className={"bg-[#FFFFFF] px-2 py-2 rounded-lg"}>
            <div>
                <p>Card Title</p>
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
                <input type={"text"} className={"border px-2 py-2 rounded-lg"} value={textCard} onChange={(e)=>setTextCard(e.target.value)}/>
            </div>
            <div className={"flex gap-8 mt-2"}>
                <button
                    className={" bg-[#6D28D9] text-white font-bold py-3 px-3 rounded-lg text-sm hover:bg-[#5c21bd]"}
                    onClick={()=>{toggleShowEdit();handlerAddCar()} }>Add
                    card
                </button>
                <button className={" bg-[#E5E5E5] font-bold py-3 px-3 rounded-lg text-sm"}
                        onClick={toggleShowEdit}> Cancel
                </button>
            </div>
        </div>
    )
}
function ListButtonEditCard ({setShowEdit, showEdit}){
    if(showEdit) return null
    const toggleShowEdit = ()=>{
        setShowEdit(!showEdit)
    }
    return (
        <div className={" mt-2"}>
            <button className={"px-2 py-1 bg-[#FBC200] rounded-lg"} onClick={toggleShowEdit}>
                <p>
                    + Add a card
                </p>
            </button>
        </div>
    )
}
function ListEditTitle({showEditTitle, setShowEditTitle, title, setTitle ,setIsUpdateList, isUpdateList, id, setIsError, setErrorMessage}){
    if(!showEditTitle) return null
    const handlerButton = ()=>{
        setShowEditTitle(!showEditTitle)
    }
    const handlerUpdateTitleList = ()=>{
        try{
            const fetch = async ()=>{
                await UpdateListFetch(id, title)
                setIsUpdateList(!isUpdateList)
            }
            fetch()
        }catch (error) {
            const msg = error as string
            setErrorMessage(msg)
            setIsError(true)
        }
    }

    return(
        <div className={"flex gap-2"}>
            <div>
                <input type={"text"} className={'border rounded-md pl-2'} value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className={'flex'}>
                <div>
                    <img src={check} alt="check" height={30} width={30} onClick={()=>{handlerUpdateTitleList();handlerButton()} }/>
                </div>
                <div>
                    <img src={cancel} alt="cancel"  height={35} width={35} onClick={handlerButton}/>
                </div>
            </div>
        </div>
    )
}
function ListCards({localCards, setLocalCards}){

    return(
            <div>
                {
                    localCards.map((card, index)=>(
                        <CardComponent key={index} body={card.bodycard} title={card.titlecard} id={card.idcard} localCards={localCards} setLocalCards={setLocalCards}/>
                    ))
                }
            </div>
    )
}


List.ListTitle = ListTitle
List.ListMenuEditTitle = ListMenuEditTitle
List.ListEditCard = ListEditCard
List.ListButtonEditCard = ListButtonEditCard
List.ListEditTitle = ListEditTitle
List.ListCards = ListCards