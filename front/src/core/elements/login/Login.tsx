import GateComponent from "../../components/gate/gate.component.tsx";
import {useNavigate} from "react-router-dom";
import {login} from "./fetch/fetch.login.ts";
import {useState} from "react";
import AlertError from "../../components/alertError/Alert.error.tsx";

const Login = () => {
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate();
    const handlerLogin = async (username: string, password:string): Promise<void> =>{
        try{
            await login(username, password)
            navigate('/boards')
        }catch(error){
            const msg = error as string;
            setError(true)
            setErrorMessage(msg)
        }
    }
    const handlerLink = ()=>{
        navigate("/sign")
    }
    return (
        <div className={"mt-24"}>
            <GateComponent handlerButton={handlerLogin} handlerLink={handlerLink} nameButton={"Login"} nameLink={"Create an account"}/>
            {error && <AlertError message={errorMessage}/>}
        </div>
    );
};

export default Login;