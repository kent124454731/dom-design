/**
 * Created by Administrator on 2017-03-20.
 */
function prepareSlidshow() {
    if (!document.getElementById)return false;
    if (!document.getElementsByTagName) return false;
    if(!document.getElementById("linklist")) return false;
    var list = document.getElementById("linklist");

    var slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("src", "images/test.jpg");
    preview.setAttribute("alt", "building blocks of web design");
    preview.setAttribute("id", "preview");
    slideshow.appendChild(preview);
    insertAfter(slideshow, list);

    var links = list.getElementsByTagName("a");
    for(var i=0;i<links.length;i++) {
        links[i].onmouseover = function () {
            var index = arrayIndexOf(links,this)
            moveElement("preview", -150 * index, 1000);
        }
    }
}

addLoadEvent(prepareSlidshow());