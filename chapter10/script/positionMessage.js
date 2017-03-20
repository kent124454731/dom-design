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

function moveElement(elementId, final_x, final_y, interval) {
    if (!document.getElementById)return false;
    var element = document.getElementById(elementId);
    var xpos = parseInt(element.style.left);
    var ypos = parseInt(element.style.top);
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) {
        xpos++;
    }
    if (xpos > final_x) {
        xpos--;
    }
    if (ypos < final_y) {
        ypos++;
    }
    if (ypos > final_y) {
        ypos--;
    }
    element.style.left = xpos + "px";
    element.style.top = ypos + "px";
    var repeat = "moveElement('" + elementId + "', " + final_x + ", " + final_y + ", " + interval + ")";
    //强烈注意，setTimeout的一个参数是接受一个字符串形式的函数,setTimeout仅执行一次
    //若传入参数为函数的调用，则实际上setTimeout接收到的是函数的返回值，这个是不正确的，故传入带有引号的函数调用是合理的
    // var repeat2 = moveElement(elementId,final_x,final_y,interval);
    setTimeout(repeat, interval);
}
addLoadEvent(positionMessage());