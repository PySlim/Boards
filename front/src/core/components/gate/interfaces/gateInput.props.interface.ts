export interface GateInputPropsInterface{
    titleInput: string,
    setFunction: (value: T | ((prevState: T) => T)) => void,
    type: string
}