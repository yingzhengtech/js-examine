// 没有固定地址
// const baseUrl = []
       // xml.open(method,baseUrl+url,true);
//原生ajax封装
const ajax = function(option){
    //实例化对象
    option = option || {};
    // 默认接口为GET,处理请求方法
    option.method= (option.method || 'GET').toUpperCase();
    // 默认传入参数
    option.params = option.params ||'';
    // 接口
    option.url = option.url || '';
    // 发送数据
    option.data = option.data || {};
    // 默认异步
    option.async = option.async || true;
    // 请求回调
    option.success = option.success || function(){};
    // 实例化请求
    var xml = null;
    if(window.XMLHttpRequest){
        xml = new XMLHttpRequest();
    }else{
        xml = new ActiveXObject('Microsoft.XMLHTTP');
    };
    // 处理发起请求
    if(option.method === ('GET' || 'DELETE')){
        xml.open(option.method , option.url + '?' +option.params , option.async);
        xml.send(option.data);
    }else if(option.method === ('POST' || 'PATCH')){
        xml.open(option.method , option.url , option.async);
        xml.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xml.send(option.data);
    }
    xml.onreadystatechange = function(){
        if(!xml.status === 200){
            option.error(xml.responseText);
        }else if(xml.status === 200 && xml.readyState === 4){
            let data = JSON.parse(xml.responseText)
            option.success(data.data);
        }
    }
}


//promise 请求
//递归调用.catch中调用http(url,method,data).then(res=>{}).catch(err=>{})

// const http = function(url,method,data){
//     let httpRequst = {
//         // url:baseUrl + url
//         url:url,
//         method:method,
//         data:data,
//         dataType:'josn'
//     };
//     return new Promise((resolve, reject)=>{
//        (uni/wx).requst(httpRequst).then(res=>{
//             resolve('成功')
//         }).catch(err=>{
//             reject('失败')
//         })
//     })
// }



