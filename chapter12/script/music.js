/**
 * Created by Administrator on 2017/3/23.
 */
function loadMusic(musiclist) {
    if (!document.getElementById) return false;
    var div_list = document.getElementById("div_list");
    var music_ul = document.getElementById("music_ul");
    for (var i = 0; i < musiclist.length; i++) {
        var music = musiclist[i];
        var li = document.createElement("li");
        music_ul.appendChild(li);
        var link = document.createElement("a");
        link.setAttribute("href", music.url);
        link.innerHTML = music.name;
        li.appendChild(link);
        link.onclick = function () {
            var now = {};
            now.name = this.innerHTML;
            now.url = this.getAttribute("href");
            var div_audio = document.getElementById("div_audio");
            if(div_audio){
                div_audio.parentNode.removeChild(div_audio);
            }
            div_audio = createAudio(now);
            insertAfter(div_audio, div_list);
            return false;
        }
    }
}

function createAudio(music) {
    var div = document.createElement("div");
    div.setAttribute("id", "div_audio");
    var p_now = document.createElement("p");
    p_now.innerHTML = "正在播放歌曲：" + music.name;
    var audio = document.createElement("audio");
    audio.setAttribute("controls", "controls");
    var source = document.createElement("source");
    source.setAttribute("src", music.url);
    audio.appendChild(source);
    var p_download = document.createElement("p");
    var p_title = document.createTextNode("Download config as");
    p_download.appendChild(p_title);
    var p_link = document.createElement("a");
    p_link.setAttribute("href", music.url);
    p_download.appendChild(p_link);
    audio.appendChild(p_download);
    audio.play();
    div.appendChild(p_now);
    div.appendChild(audio);
    return div;
}

// function getMusic() {
//     var music = [];
//     music.push({
//         name: "一次就好",
//         url: "http://on5rm56pj.bkt.clouddn.com/%E4%B8%80%E6%AC%A1%E5%B0%B1%E5%A5%BD.mp3"
//     });
//     music.push({
//         name: "十年",
//         url: "http://on5rm56pj.bkt.clouddn.com/%E5%8D%81%E5%B9%B4.mp3"
//     });
//     music.push({
//         name: "无赖",
//         url: "http://on5rm56pj.bkt.clouddn.com/%E6%97%A0%E8%B5%96.mp3"
//     });
//     music.push({
//         name: "心肝宝贝",
//         url: "http://on5rm56pj.bkt.clouddn.com/%E5%BF%83%E8%82%9D%E5%AE%9D%E8%B4%9D.mp3"
//     });
//     music.push({
//         name: "忘记时间",
//         url: "http://on5rm56pj.bkt.clouddn.com/%E5%BF%98%E8%AE%B0%E6%97%B6%E9%97%B4.mp3"
//     });
//     music.push({
//         name: "十七岁",
//         url: "http://on5rm56pj.bkt.clouddn.com/%E5%8D%81%E4%B8%83%E5%B2%81.mp3"
//     });
//     music.push({
//         name: "一往情深的恋人",
//         url: "http://on5rm56pj.bkt.clouddn.com/%E4%B8%80%E5%BE%80%E6%83%85%E6%B7%B1%E7%9A%84%E6%81%8B%E4%BA%BA.mp3"
//     });
//     return music;
// }

function getMusicFromFile() {
    var request = getHttpObject();
    if(request){
        request.open("GET", "./config/music.txt", true);
        request.onreadystatechange = function () {
            if(request.readyState == 4){
                var list = JSON.parse(request.responseText);
                loadMusic(list);
            }
        }
        request.send(null);
    }else{
        alert("Sorry,your browser doesn't support XMLHttpRequest");
    }
}

function strToJson(str){

    var json = eval('(' + str + ')');
    return json;
}

addLoadEvent(getMusicFromFile());