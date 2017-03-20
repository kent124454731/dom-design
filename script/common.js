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

/**
 * 获取当前节点的下一个元素节点
 * nextSibling为获取下一个节点（节点有三种：元素节点、文本节点和属性节点）
 * @param node
 * @returns {*}
 */
function getNextElement(node) {
    if (node.nodeType == 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}

/**
 * 显示略缩词
 */
function displayAbbreviations() {
    //取得所有略缩词
    var abbrs = document.getElementsByTagName("abbr");
    if (abbrs && abbrs.length > 0) {
        var body = document.body;
        var headers = document.createElement("h2");
        var headers_text = document.createTextNode("Abbreviations")
        headers.appendChild(headers_text);
        body.appendChild(headers);
        var dl = document.createElement("dl");
        body.appendChild(dl);
        //遍历略缩词并将他们添加到创建标记列表
        for (var i = 0; i < abbrs.length; i++) {
            var abbr = abbrs[i];
            var dt = document.createElement("dt");
            dt.innerHTML = abbr.lastChild.nodeValue;
            var dd = document.createElement("dd");
            dd.innerHTML = abbr.getAttribute("title");
            dl.appendChild(dt);
            dl.appendChild(dd);
        }
    }
}

/**
 * 给指定的element追加样式
 * @param element
 * @param value
 */
function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    }
    else {
        var newClass = element.className;
        newClass += " ";
        newClass += value;
        element.className = newClass;
    }
}


/**
 * 根据参数tag查找他们所有的下一个元素，并追加样式className
 * @param tag
 * @param className
 * @returns {boolean}
 */
function styleElementSiblings(tag, className) {
    if (!document.getElementsByTagName)return false;
    var elements = document.getElementsByTagName(tag);
    var elem;
    for (var i = 0; i < elements.length; i++) {
        elem = getNextElement(elements[i].nextSibling);
        addClass(elem, className);
    }
}

/**
 * 标签移动
 * @param elementId
 * @param final_x
 * @param final_y
 * @param interval
 * @returns {boolean}
 */
function moveElement(elementId, final_x, final_y, interval) {
    if (!document.getElementById)return false;
    var element = document.getElementById(elementId);
    if(element.movement){
        clearTimeout(element.movement);
    }
    if (!element.style.left) {
        element.style.left = "0px";
    }
    if (!element.style.right) {
        element.style.right = "0px";
    }
    var xpos = parseInt(element.style.left);
    var ypos = parseInt(element.style.top);
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    var dist = 0;
    if (xpos < final_x) {
        dist = Math.ceil((final_x - xpos) / 10);
        xpos += dist;
    }
    if (xpos > final_x) {
        dist = Math.ceil((xpos - final_x) / 10);
        xpos -= dist;
    }
    if (ypos < final_y) {
        dist = Math.ceil((final_y - ypos) / 10);
        ypos += dist;
    }
    if (ypos > final_y) {
        dist = Math.ceil((ypos - final_y) / 10);
        ypos -= dist;
    }
    element.style.left = xpos + "px";
    element.style.top = ypos + "px";
    var repeat = "moveElement('" + elementId + "', " + final_x + ", " + final_y + ", " + interval + ")";
    //强烈注意，setTimeout的一个参数是接受一个字符串形式的函数,setTimeout仅执行一次
    //若传入参数为函数的调用，则实际上setTimeout接收到的是函数的返回值，这个是不正确的，故传入带有引号的函数调用是合理的
    // var repeat2 = moveElement(elementId,final_x,final_y,interval);
    element.movement = setTimeout(repeat, interval);
}

/**
 * 查询在当前数组中是否存在目标元素
 * @param arrs
 * @param item
 * @returns {*}
 */
function arrayIndexOf(arrs,item) {
    if(!arrs) return false;
    if(!arrs.length) return false;
    for(var i=0;i<arrs.length;i++){
        if(item==arrs[i])
        {
            return i;
        }
    }
    return -1;
}