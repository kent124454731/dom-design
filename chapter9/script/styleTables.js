/**
 * Created by Administrator on 2017/3/19.
 */
function styleTables() {
    if (!document.getElementsByTagName)return false;
    var tbody = document.getElementsByTagName("tbody");
    var trs = tbody[0].getElementsByTagName("tr");
    for (var i = 0; i < trs.length; i++) {
        var tr = trs[i];
        if (i % 2 == 1) {
            tr.style.backgroundColor = "#ffc";
        }
        else{
            tr.style.backgroundColor = "#fff";
        }
    }
}

addLoadEvent(styleTables());
addLoadEvent(displayAbbreviations());