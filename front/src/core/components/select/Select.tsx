import {SelectPropsInterface} from "./interface/select.props.interface.ts";
import React from 'react';

export function Select(props: SelectPropsInterface) {
    const { handlerSelect, titleSelect , target } = props;
    return (
        <div className={"mt-16"}>
            <div className={"w-[130px]"}>
                {
                    React.Children.map(props.children, child =>
                      React.cloneElement(child,{handlerSelect, titleSelect, target}))
                }
            </div>
        </div>
    );
}

function SelectTitle({titleSelect}){
    return (
        <div className={"w-[130px]"}>
            <p className={"text-2xl font-bold"}>{titleSelect}</p>
        </div>
    )
}
function SelectOption({target, handlerSelect, children}){
    return (
        <div className={"mt-4"}>
            <div className={"text-sm"}>{target}</div>
            <div className={"mt-2"}>
                <select name="" id="" className={"w-[130px] h-10 px-2 py-3 text-sm"}
                        onChange={handlerSelect}>
                    {children}
                </select>
            </div>
        </div>
    )
}
function Option({children}){
  return (
      <option value={children}>{children}</option>
  )
}

Select.SelectTitle = SelectTitle;
Select.SelectOption = SelectOption;
Select.Option = Option;
