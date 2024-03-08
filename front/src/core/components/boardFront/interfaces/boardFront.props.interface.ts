export interface BoardFrontPropsInterface{
    id: string | number,
    valueTitle: string,
    setShowText: (value: T | ((prevState: T) => T)) => void,
    showText: boolean
}