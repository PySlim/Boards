import {List} from "./List.tsx";
import {ListPropsInterface} from "./interface/list.props.interface.ts";
import {useEffect} from "react";


export function ListComponent(props: ListPropsInterface) {
    const { titleList, id, setLists, isUpdateList, setIsError, setErrorMessage, cards,setIsUpdateLists} = props;
    useEffect(()=>{
        console.log('renderizado de componente')
    },[])
    return (
        <List titleList={titleList} id={id} setLists={setLists} isUpdateList={isUpdateList} setIsError={setIsError}
              setErrorMessage={setErrorMessage} cards={cards} setIsUpdateLists={setIsUpdateLists}>
            <List.ListTitle/>
            <List.ListMenuEditTitle/>
            <List.ListEditTitle/>
            <List.ListCards/>
            <List.ListButtonEditCard/>
            <List.ListEditCard/>
        </List>
    );
}
