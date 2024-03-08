export interface GateComponentPropsInterface{
    nameButton: string,
    nameLink: string,
    handlerButton: (username: string, password: string)=>void,
    handlerLink: ()=>void,
}