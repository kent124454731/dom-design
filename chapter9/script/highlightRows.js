/**
 * Created by Administrator on 2017/3/19.
 */
function highlightRows() {
    if (!document.getElementsByTagName)return false;
    // var tbody = document.getElementsByTagName("tbody");
    var trs = document.getElementsByTagName("tr");
    for (var i=0; i <= trs.length - 1; i++) {
        var tr = trs[i];
        trs[i].onmouseover = function () {
            //在事件中用this代替trs[i]，for循环结束后i会加1,会一直报错
            this.style.fontWeight = "bold";
        }
        trs[i].onmouseout = function () {
            this.style.fontWeight = "normal";
        }
    }
}
addLoadEvent(highlightRows);