import {useState} from 'react';
import {Gate} from "./gate.tsx";
import {GateComponentPropsInterface} from "./interfaces/gateComponent.props.interface.ts";


function GateComponent({ nameLink, nameButton, handlerLink, handlerButton}: GateComponentPropsInterface) {
    const [userName, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")


    return (
        <Gate nameLink={nameLink} nameButton={nameButton} handlerButton={handlerButton} handlerLink={handlerLink} username={userName} password={password}>
            <Gate.GateLogo/>
            <Gate.GateTitle/>
            <Gate.GateInput titleInput={'username'} setFunction={setUserName} type={"text"}/>
            <Gate.GateInput titleInput={'password'} setFunction={setPassword} type={"password"}/>
            <Gate.GateButton/>
            <Gate.GateLink/>
        </Gate>
    );
}

export default GateComponent;