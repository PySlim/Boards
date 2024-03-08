import FlyOut from "./FlyOut.tsx";
import {FlyOutMenuPropsInterface} from "./interfaces/FlyOut.props.interface.ts";


export function FlyOutMenu(props : FlyOutMenuPropsInterface) {
    const {id, setIsCreateCard, isCreateCard } = props

    return (
        <FlyOut id={id}>
            <FlyOut.FlyOutToggle></FlyOut.FlyOutToggle>
            <FlyOut.FlyOutList>
                <FlyOut.FlyOutItem id={id} setIsCreateCard={setIsCreateCard} isCreateCard={isCreateCard}>Edit</FlyOut.FlyOutItem>
                <FlyOut.FlyOutItem id={id} setIsCreateCard={setIsCreateCard} isCreateCard={isCreateCard}>Delete</FlyOut.FlyOutItem>
            </FlyOut.FlyOutList>
        </FlyOut>
    );
}

