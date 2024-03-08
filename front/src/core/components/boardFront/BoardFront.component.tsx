import {BoardFront} from "./boardFront.tsx";
import {BoardFrontPropsInterface} from "./interfaces/boardFront.props.interface.ts";

const BoardFrontComponent = ({ id, valueTitle, setShowText, showText}: BoardFrontPropsInterface) => {
    return (
        <BoardFront id={id} valueTitle={valueTitle} setShowText={setShowText} showText={showText}>
            <BoardFront.BoardTitle/>
            <BoardFront.BoardTools/>
        </BoardFront>
    );
};

export default BoardFrontComponent;