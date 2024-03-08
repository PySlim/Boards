import {Select} from "./Select.tsx";
import {SelectPropsInterface} from "./interface/select.props.interface.ts";

const SelectComponent = ({titleSelect, target, handlerSelect}:SelectPropsInterface ) => {
    return (
        <Select titleSelect={titleSelect} target={target} handlerSelect={handlerSelect}>
            <Select.SelectTitle/>
            <Select.SelectOption>
                <Select.Option>Title</Select.Option>
                <Select.Option>Created</Select.Option>
            </Select.SelectOption>
        </Select>
    );
};

export default SelectComponent;