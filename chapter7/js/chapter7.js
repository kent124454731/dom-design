/**
 * Created by Administrator on 2017-03-14.
 */
function insertParagraph(text) {
    var str = "<p>";
    str += text;
    str += "</p>";
    document.write(str);
}

window.onload = function () {
    var testdiv = document.getElementById("testdiv");
    // testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";
    var para = document.createElement("p");
    // para.innerHTML = "This is a create element.";    //innerHTML只能执行替换
    var text1 = document.createTextNode("This is a ");  //文本节点则可以插入很多个
    var aem = document.createElement("em");
    var aem_text = document.createTextNode("created ");
    aem.appendChild(aem_text);
    var text2 = document.createTextNode("Text node.")
    para.appendChild(text1);
    para.appendChild(aem);
    para.appendChild(text2);
    testdiv.appendChild(para);
}