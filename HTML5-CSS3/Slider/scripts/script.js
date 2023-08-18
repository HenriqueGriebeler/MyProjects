const image = {
    imgSource,
    id
}


function bannerCompile(){
const banner = document.getElementsByClassName('bannerImage');
for(let i = 0; i < banner.length; i++){  //This code can generate and get the SRC and id of images, i will need to create a object orientation to get this into a Const and keep using it
const image = {
    imgSource: banner[i].src,
    id: i
}
alert(image.imgSource)
}

}

function a(){

alert(image.imgSource)

}