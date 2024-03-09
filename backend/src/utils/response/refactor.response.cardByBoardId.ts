import {GroupedObject, Item} from "./interfaces/cardByBoard.interface";

export function transform(items: Item[]): GroupedObject[] {
    const grouped: GroupedObject = {};

    items.forEach(item => {
        if (!grouped[item.idlist]) {
            grouped[item.idlist] = {
                idlist: item.idlist,
                titlelist: item.titlelist,
                cards: []
            };
        }

        grouped[item.idlist].cards.push({
            idcard: item.idcard,
            titlecard: item.titlecard,
            bodycard: item.bodycard
        });
    });

    return Object.values(grouped);
}
