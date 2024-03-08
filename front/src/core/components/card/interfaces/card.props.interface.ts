export interface CardPropsInterface{
    body: string
    title: string
    id: string | number
    isCreateCard: boolean
    setIsCreateCard: (value: T | ((prevState: T) => T)) => void
}