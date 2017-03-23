/**
 * Created by Administrator on 2017-03-22.
 */
function highlightPage() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    var header = document.getElementsByTagName("header");
    if (!header || header.length == 0) return false;
    var nav = header[0].getElementsByTagName("nav");
    if (!nav || nav.length == 0) return false;
    var links = nav[0].getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        var link_href = links[i].getAttribute("href");
        if (window.location.href.indexOf(link_href) != -1) {
            links[i].className = "here";
            var link_text = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id", link_text);
        }
    }
}

addLoadEvent(highlightPage());
