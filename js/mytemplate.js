/**
 * 
 * @param {*} id 
 * @param {*} data 封装模板函数
 */
function myTemplate(id,data) {
    var str = document.querySelector('#'+id);
    var reg = /{{(\w+)}}/;
    var result = reg.exec(str);
    while(result) {
        str.replace(result[0],data[result[1]]);
        result = reg.exec(str);
    }
    return str;
}