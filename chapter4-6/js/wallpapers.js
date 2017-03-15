/**
 * Created by Administrator on 2017/3/13.
 */

// window.onload = prepareGallery;

/**
 * 显示图片
 * @param whichpic
 * @returns {boolean}
 */
function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (!placeholder) return false;
    placeholder.setAttribute("src", source);
    var text = whichpic.getAttribute("title");
    var discription = document.getElementById("discription");
    if (discription) {
        discription.firstChild.nodeValue = text;
    }
    return true;
}

/**
 * 图片事件加载
 * @returns {boolean}
 */
function prepareGallery() {
    if (!document.getElementsByTagName || !document.getElementById)return false;
    var gallery = document.getElementById("ul_gallery");
    if (!gallery) return false;
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        var item = links[i];
        item.onclick = function () {
            return showPic(this) ? false : true;
        }
        //onclick事件会响应键盘上的Enter键
        // item.onkeydown = item.onclick;
    }
}


/**
 * 动态生成标记
 */
function preparePlaceHolder() {
    if (!document.createElement)return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "chapter4-6/images/leimu.jpg");
    placeholder.setAttribute("alt", "蕾姆");
    var body = document.getElementsByTagName("body")[0];
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("Choose a image");  // 此<br/>仅是文本，无法将他包含在文本节点
    var br = document.createElement("br");
    var new_line = document.createTextNode("Test new line");
    description.appendChild(desctext);
    description.appendChild(br);
    description.appendChild(new_line);
    //等同于上面通过子节点的方式添加
    // description.innerHTML = "Choose a image.<br/> Test new line";
    var ul_gallery = document.getElementById("ul_gallery");
    // ul_gallery.parentNode.insertBefore(placeholder, ul_gallery);
    // ul_gallery.parentNode.insertBefore(description, ul_gallery);
    // body.appendChild(placeholder);
    // body.appendChild(description);
    insertAfter(placeholder, ul_gallery);
    insertAfter(description, placeholder);
}

addLoadEvent(preparePlaceHolder);
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