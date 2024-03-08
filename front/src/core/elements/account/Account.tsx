import Navbar from "../../components/navbar/Navbar.tsx";
import {useEffect, useState} from "react";
import {GetUserData, UpdateUserData} from "./fetch/account.fetch.ts";
import {FormUpdate} from "../../components/formUpdate/FormUpdate.tsx";
import {UserInterface, UserUpdateInterface} from "../../apis/BoardApi/interfaces/user.interface.ts";
import ErrorModal from "../../components/errorModal/ErrorModal.tsx";


const Account = () => {
    const [userNameValue, setUserNameValue] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [isError, setIsError] = useState(false)
    const [accountTitle, setAccountTitle] = useState("")
    useEffect(()=>{
        const fetchDataUser = async ()=>{
            try{
               const user: UserInterface = await GetUserData()
                setUserNameValue(user.username)
                setAccountTitle(user.username)
                if(user.name) setName(user.name)
                if(user.email)setEmail(user.email)
                if(user.password) setPassword(user.password)

            }catch (error){
                const errorMessage = error as string
                setErrorMessage(errorMessage)
            }
        }
        fetchDataUser()
    },[isError])

    const handlerButton = async ()=>{
        try{
            const objectUpdate: UserUpdateInterface = {}
            if(userNameValue) objectUpdate.username=userNameValue
            if(name) objectUpdate.name=name
            if(email) objectUpdate.email=email
            if(password) objectUpdate.password=password

            if(Object.keys(objectUpdate).length !== 0){
               const userUpdated:UserInterface = await  UpdateUserData(objectUpdate)
                if(userUpdated){
                    setAccountTitle(userUpdated.username)
                }
            }
        }catch(error){
            const msg = error as string
            setIsError(true)
            setErrorMessage(msg)
        }
    }
    const onClose = ()=>{
        setIsError(false)
    }
    return (
        <div>
            <Navbar/>
            <div className={"mx-auto max-w-screen-lg"}>
                <div className={"mt-6 sm:mt-16 ml-10 lg:ml-0"}>
                    <p className={"text-2xl font-bold"}>
                        {accountTitle}
                    </p>
                </div>

            </div>
            <FormUpdate handlerButton={handlerButton}>
                <FormUpdate.FormInput titleInput={"Username"} type={"text"} value={userNameValue} setValue={setUserNameValue}/>
                <FormUpdate.FormInput titleInput={"Name"} type={"text"} value={name} setValue={setName}/>
                <FormUpdate.FormInput titleInput={"Email"} type={"text"} value={email} setValue={setEmail}/>
                <FormUpdate.FormInput titleInput={"Password"} type={"password"} value={password} setValue={setPassword}/>
                <FormUpdate.FormButton/>
            </FormUpdate>
            <ErrorModal errorMessage={errorMessage} showModal={isError} onClose={onClose}/>
        </div>
    );
};

export default Account;