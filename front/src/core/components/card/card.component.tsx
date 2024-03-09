
import {CardComponentPropsInterface} from "./interfaces/card.props.interface.ts";
import {Card} from "./card.tsx";

function CardComponent(props:CardComponentPropsInterface) {
    const { body, title, id, setLocalCards, localCards } = props
    return (
        <Card setLocalCards={setLocalCards} localCards={localCards} id={id} title={title} body={body}>
            <Card.CardPresentation></Card.CardPresentation>
            <Card.CardEditor></Card.CardEditor>
        </Card>
    );
}

export default CardComponent;