/**
 * ajax工具函数
 * @param {*} request 
 * // 传入对象,data格式为key1=value1&key2=value2
 */
function ajax(request) {
    let xhr = new XMLHttpRequest();
    if(request.type == 'get' && request.data) {
        request.url += '?'+ request.data;
        request.data = null;
    }
    xhr.open(request.type,request.url);
    if(request.type == 'post' && request.data) {
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    }
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status==200) {
            let type = xhr.getResponseHeader('Content-type');
            if(type.indexOf('json') != -1) {
                request.success(JSON.parse(xhr.responseText));
            }else if(type.indexOf('xml')) {
                request.success(xhr.responseXML);
            }else {
                request.success(xhr.responseText);
            }
        }
    }
    xhr.send(request.data);
}