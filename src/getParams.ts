export const getParams = (url: string, id: string) => {
    const reg = /([^?&]+)=([^&]+)/g;
    const obj: Record<string, string> = {};
    let res = null;
    while ((res = reg.exec(url))) {
        const key = res[1];
        const val = res[2];
        obj[key] = val;
    }
    return obj[id];
};

export default getParams;
