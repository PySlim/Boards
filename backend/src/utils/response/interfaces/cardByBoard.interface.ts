export interface Item {
    bodycard: string;
    idcard: number;
    idlist: number;
    titlecard: string;
    titlelist: string;
}

interface Card {
    idcard: number;
    titlecard: string;
    bodycard: string;
}

export interface GroupedObject {
    [key: number]: {
        idlist: number;
        titlelist: string;
        cards: Card[];
    };
}
