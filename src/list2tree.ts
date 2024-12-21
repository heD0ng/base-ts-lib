interface DataObj {
    name: string;
    id: number;
    parentId: number | null;
    children?: DataObj[];
}
/**
 *
 * @param arr :DataObj[]
 * @returns
 */
export const list2tree = (arr: DataObj[]) => {
    const idMap = {};
    const res = [];
    arr.forEach((item, index) => {
        if (!item.children) {
            item.children = [];
        }
        idMap[item.id] = index;
    });

    arr.forEach((item) => {
        const parentId = item.parentId;
        if (!parentId) {
            res.push(item);
        } else {
            const parentIndex = idMap[parentId];
            const parent = arr[parentIndex];
            parent.children.push(item);
        }
    });

    return res;
};

export default list2tree;
