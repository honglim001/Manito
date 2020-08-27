const link1 = document.getElementById('menu_1');
const link2 = document.getElementById('menu_2');
const link3 = document.getElementById('menu_3');
const link4 = document.getElementById('menu_4');
const title = document.getElementById('title');
const mode = document.getElementById('floating_mode');

function handleClick1(){//건강
    window.open("https://eduro.dge.go.kr/hcheck/index.jsp","_blank");
}
function handleClick2(){//밴드
    window.open("https://band.us/home","_blank");
}
function handleClick3(){//클래스 룸 
    window.open("https://classroom.google.com/","_blank");
}
function handleClick4(){//도담도담
    window.open("http://dodam.b1nd.com/","_blank");
}
function handleTitleClick(){//제목 클릭 시
    location.reload();
}

function init(){
    link1.addEventListener('click',handleClick1);
    link2.addEventListener('click',handleClick2);
    link3.addEventListener('click',handleClick3);
    link4.addEventListener('click',handleClick4);
    title.addEventListener('click',handleTitleClick);
}
init();