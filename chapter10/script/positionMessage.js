/**
 * Created by Administrator on 2017/3/20.
 */
function positionMessage() {
    if (!document.getElementById) return false;
    var element1 = document.getElementById("message");
    element1.style.position = "absolute";
    element1.style.left = "50px";
    element1.style.top = "100px";
    moveElement("message", 300, 200, 20);

    var message2 = document.getElementById("message2");
    message2.style.position = "absolute";
    message2.style.left = "600px";
    message2.style.top = "100px";
    moveElement("message2", 100, 300, 10);
}


addLoadEvent(positionMessage());