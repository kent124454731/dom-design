//获取后缀
function suffix(file){
  var filename = file.name;
  var index = filename.lastIndexOf('.');
  var strtype = filename.substr(index+1,filename.length).toLowerCase();
  return strtype;
}

//检验后缀
function checksuffix(file){
  var suffix = suffix(file);
  if(suffix == "jpg"|| suffix == "bmp" || suffix == "png" || suffix == "gif"){
    return true;
  }
  alert("请上传jpg，bmp，png，gif格式的图片！");
  return false;
}

function checksize(file){
  var image=new Image();
  image.src=file;
  alert(image.fileSize);
  return false;
}
