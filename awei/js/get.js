//根据id来获取
const getId = function(id){
    return document.getElementById(id);
};
//根据class类名来获取
const getClass = function(taxon){
    return document.getElementsByClassName(taxon);
};
//根据标签名来获取
const getTagName = function(tag){
    return document.getElementsByTagName(tag);
};
//根据name来获取
const getName = function(name){
    return document.getElementsByName(name);
};
//根据选择器来获取一个元素
const getSele = function(info){
    return document.getSelection(info);
};
//根据选择器来获取一组元素
const getAll = function(all){
    return document.getSelectionAll(all);
};
