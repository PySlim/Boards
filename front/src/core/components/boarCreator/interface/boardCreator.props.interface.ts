export interface BoardCreatorPropsInterface {
    title: string,
    handlerCreateBoard: (title: string, color: string)=>void,
    titleInitial: string,
    colorInitial: string,
    titleButton: string
}