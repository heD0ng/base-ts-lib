/**
 * @description json.parse
 * @param jsonStr :序列化后的字符串
 * @returns 解析后的数据
 */
export function jsonParse(jsonStr: string) {
    return eval('(' + jsonStr + ')');
}

export default jsonParse;
