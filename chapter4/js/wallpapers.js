/**
 * Created by Administrator on 2017/3/13.
 */

// window.onload = prepareGallery;


function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if(!placeholder) return false;
    placeholder.setAttribute("src",source);
    var text = whichpic.getAttribute("title");
    var discription = document.getElementById("discription");
    if(discription){
        discription.firstChild.nodeValue = text;
    }
    return true;
}

function prepareGallery() {
    if(!document.getElementsByTagName || !document.getElementById )return false;
    var gallery = document.getElementById("ul_gallery");
    if(!gallery) return false;
    var links = gallery.getElementsByTagName("a");
    for (var i=0;i<links.length;i++){
        var item = links[i];
        item.onclick = function () {
            return showPic(this)? false:true;
        }
        //onclick事件会响应键盘上的Enter键
        // item.onkeydown = item.onclick;
    }
}

function addLoadEvent(func) {
    var oldOnload = window.onload;
    if(typeof window.onload !='function'){
        window.onload = func;
    }else{
        oldOnload();           //执行当前需要加载的函数
        window.onload = func;  //一、重新赋值加载函数
        // func();             //二、这种方式会让第一个加载的函数执行很多次
    }
}

addLoadEvent(prepareGallery);

//测试addLoadEvent
// function func2() {
//     alert("test addLoadEvent");
// }
// function func3() {
//     alert("test addLoadEvent2");
// }
// addLoadEvent(func2);
// addLoadEvent(func3);