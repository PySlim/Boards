import {CardPropsInterface} from "./interfaces/card.props.interface.ts";
import {FlyOutMenu} from "../flyOutMenu/FlyOutMenu.tsx";

function Card(props: CardPropsInterface) {
    const { body, title, id, setIsCreateCard, isCreateCard } = props
    return (
        <div className={"border mb-2 rounded-l-xl"}>
            <div className={"flex justify-between mb-2 pl-2"}>
                <p>
                    {title}
                </p>
                <FlyOutMenu id={id} setIsCreateCard={setIsCreateCard} isCreateCard={isCreateCard}/>
            </div>
            <div >

                <div className={" px-2 py-2 bg-[#FFFFFF] rounded-l-xl w-[100%]"}>
                    <p>
                        {body}
                    </p>
                </div>

            </div>
        </div>
    )


}

export default Card;