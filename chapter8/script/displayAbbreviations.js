/**
 * Created by Administrator on 2017/3/18.
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

function displayCitations() {
    //取得所有citations
    var citations = document.getElementsByTagName("blockquote");
    if (citations && citations.length > 0) {
        for (var i = 0; i < citations.length; i++) {
            var cite = citations[i];
            if (cite.getAttribute("cite")) {
                var url = cite.getAttribute("cite");
                var citeChildren = cite.getElementsByTagName("*");
                if (citeChildren.length < 1) continue;
                var elem = citeChildren[citeChildren.length - 1];
                var a = document.createElement("a");
                var a_text = document.createTextNode("source");
                a.appendChild(a_text);
                a.setAttribute("href", url);
                var sup = document.createElement("sup");
                sup.appendChild(a);
                elem.appendChild(sup);
            }
        }
    }
}

addLoadEvent(displayAbbreviations());
addLoadEvent(displayCitations());