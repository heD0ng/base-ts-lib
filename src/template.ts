export const templateRender = (str: string, data: any) => {
    const reg = /\{\{(.*?)\}\}/g;

    return str.replace(reg, (match, key) => data[key.trim()]);
};

export default templateRender;
