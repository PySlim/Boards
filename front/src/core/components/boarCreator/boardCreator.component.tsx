import {BoardCreatorPropsInterface} from "./interface/boardCreator.props.interface.ts";
import {BoardCreator} from "./boarCreator.tsx";

function BoardCreatorComponent(props: BoardCreatorPropsInterface) {
    const { title, handlerCreateBoard, titleInitial, colorInitial, titleButton } = props;
    return (
        <BoardCreator title={title} handlerCreateBoard={handlerCreateBoard} titleInitial={titleInitial} colorInitial={colorInitial} titleButton={titleButton}>
            <BoardCreator.BoardCreatorTitle />
            <BoardCreator.BoardCreatorInput />
            <BoardCreator.BoardCreatorColorButton />
        </BoardCreator>
    );
}

export default BoardCreatorComponent;