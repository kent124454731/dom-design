/**
 * js通用方法
 * @Author Kent.Wang
 * @Date 2017-03-15 10:36:56
 */


/**
 * 文档加载事件
 * @param func 需要加载的方法
 */
function addLoadEvent(func) {
    var oldOnload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        oldOnload();           //执行当前需要加载的函数
        window.onload = func;  //一、重新赋值加载函数
        // func();             //二、这种方式会让第一个加载的函数执行很多次
    }
}

/**
 * 将newElement插入到targetElement之后
 * @param newElement
 * @param targetElement
 */
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }

}