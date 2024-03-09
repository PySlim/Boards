import {FlyOutMenuPropsInterface} from "./interfaces/FlyOut.props.interface.ts";
import {FlyOut} from "./FlyOut.tsx";


export function FlyOutMenu(props : FlyOutMenuPropsInterface) {
    const {id, localCards, setLocalCard, setShowEditCard, showEditCard } = props

    return (
        <FlyOut id={id}>
            <FlyOut.FlyOutToggle></FlyOut.FlyOutToggle>
            <FlyOut.FlyOutList>
                <FlyOut.FlyOutItem id={id} localCards={localCards} setLocalCard={setLocalCard} showEditCard={showEditCard} setShowEditCard={setShowEditCard} >Edit</FlyOut.FlyOutItem>
                <FlyOut.FlyOutItem id={id} localCards={localCards} setLocalCard={setLocalCard} showEditCard={showEditCard} setShowEditCard={setShowEditCard}>Delete</FlyOut.FlyOutItem>
            </FlyOut.FlyOutList>
        </FlyOut>
    );
}

