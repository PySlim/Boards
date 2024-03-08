import {AlertErrorPropsInterface} from "./interfaces/alertError.props.interface.ts";

function AlertError({message}: AlertErrorPropsInterface) {
    return (
        <div className={"border border-red-700 max-w-[320px] mx-auto text-center px-7 py-7 rounded-lg bg-[#f8dede] text-red-700 font-bold"}>
            {message}
        </div>
    );
}

export default AlertError;