
window.onload=function() {
    var mainImg = document.getElementsByClassName("mainImg")[0];
    var arrow = document.getElementsByClassName("arrow")[0]
    var arrowleft = document.querySelector(".arrowleft");
    var arrowright = document.querySelector(".arrowright");
    var ul = document.getElementById("lunbo");
    var ol = document.getElementById("ol");
    var imgWidth = ul.children[0].offsetWidth;

    var ulNewli = ul.children[1].cloneNode(true);
    ul.appendChild(ulNewli);
    for (var i = 0; i < ul.children.length - 1; i++) {
        olNewli = document.createElement("li");
        olNewli.innerHTML = i + 1;
        ol.appendChild(olNewli);
    }
    var olLiArr = ol.children;
    olLiArr[0].className = "current";
    for (var i = 0; i < olLiArr.length; i++) {
        olLiArr[i].index= i;
        olLiArr[i].onmouseover = function () {
            for (var j = 0; j < olLiArr.length; j++) {
                olLiArr[j].className = "";
            }
            this.className = "current";
            key = squear = this.index;
            animate(ul,-this.index*imgWidth);
        }
    }
    var timer = setInterval(autoPlay, 2000);
    var key = 0;
    var squear = 0;

    function autoPlay() {
        key++;
        if (key > olLiArr.length) {
            ul.style.left = 0;
            key = 1;
        }
        animate(ul, -key * imgWidth);
        squear++;
        if (squear > olLiArr.length - 1) {
            squear = 0;
        }
        for (var i = 0; i < olLiArr.length; i++) {
            olLiArr[i].className = "";
        }
        olLiArr[squear].className = "current";
    }

    mainImg.onmouseover = function () {
        arrowleft.style.display = "block";
        arrowright.style.display = "block";
        clearInterval(timer);
    }
    mainImg.onmouseout= function () {
        arrowleft.style.display = "none";
        arrowright.style.display = "none";
        timer = setInterval(autoPlay, 2000);
    }
    arrowleft.onclick= function(){
        console.log("我被点击");
        key--;
        if (key < 0) {
            ul.style.left = -imgWidth * (olLiArr.length) + "px";
            key = olLiArr.length - 1;
        }
        animate(ul,-key * imgWidth);
        squear--;
        if (squear < 0) {
            squear = olLiArr.length - 1;
        }
        for (var i = 0; i < olLiArr.length; i++) {
            olLiArr[i].className = "";
        }
        olLiArr[squear].className = "current";
    }
    arrowright.onclick = function () {
        console.log("我被点击");
        autoPlay();
    }



//        arrowright.onclick = function () {
//            index++;
//            if (index > ul.children.length - 1) {
//                index = ul.children.length - 1;
//            }
//            animate(ul, -index * imgWidth);
//        }
//        arrowleft.onclick = function () {
//            index--;
//            if (index < 0) {
//                index = 0;
//            }
//            animate(ul, -index * imgWidth);
//        }
////焦点轮播
//
//        for (i = 0; i < liArr.length; i++) {
//            liArr[i].index = i;
//            liArr[i].onmouseover = function () {
//                for (j = 0; j < liArr.length; j++) {
//                    liArr[j].className = "";
//                }
//                if (index > ul.children.length - 1) {
//                    index = ul.children.length - 1
//                }
//                animate(ul, -this.index * imgWidth);
//                this.className = "current";
//            }
//
//        }


}
