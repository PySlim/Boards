import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {sing} from "./fetch/fetch.sing.ts";
import GateComponent from "../../components/gate/gate.component.tsx";
import AlertError from "../../components/alertError/Alert.error.tsx";

const Sign = () => {
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate();

    const handlerSign = async (username:string, password: string):Promise<void>=>{
        try{
            await sing(username, password);
            navigate('/boards')
        }catch (error){
            const msg = error as string;
            setError(true)
            setErrorMessage(msg)
        }
    }

    const handlerLink = ()=>{
        navigate('/')
    }
    return (
        <div className={"mt-24"}>
            <GateComponent handlerButton={handlerSign} handlerLink={handlerLink} nameLink={"Login to your account"} nameButton={"Signup"}/>
            {error && <AlertError message={errorMessage}/>}
        </div>
    );
};

export default Sign;