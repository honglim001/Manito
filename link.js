const link1 = document.getElementById("menu_1");
const link2 = document.getElementById("menu_2");
const link3 = document.getElementById("menu_3");
const link4 = document.getElementById("menu_4");
const link5 = document.getElementById("menu_5");
const title = document.getElementById("title");
const mode = document.getElementById("floating_mode");
const class_1 = document.getElementById("class_1");
const class_2 = document.getElementById("class_2");
const class_3 = document.getElementById("class_3");
const sel = document.getElementById("class");
const week = document.getElementById("week");

class_1.style.display = "none";
class_2.style.display = "none";
class_3.style.display = "none";

function handleClick1() {
    //건강
    window.open("https://eduro.dge.go.kr/hcheck/index.jsp", "_blank");
}

function handleClick2() {
    //BAND
    window.open("https://band.us/home", "_blank");
}

function handleClick3() {
    //클래스룸
    window.open("https://classroom.google.com/", "_blank");
}

function handleClick4() {
    //도담도담
    window.open("http://dodam.b1nd.com/", "_blank");
}

function handleClick5() {
    //SODA
    window.open("https://takeup.co.kr/", "_blank");
}

function handleTitleClick() {
    //제목 클릭 시
    location.reload();
}

function handleSelChange() {
    //select 태그가 변경되었을 시
    let index = sel.options[sel.selectedIndex].value;
    if (index == 1) {
        //1-1이 선택된 경우
        class_1.style.display = "inline";
        class_2.style.display = "none";
        class_3.style.display = "none";
    } else if (index == 2) {
        class_1.style.display = "none";
        class_2.style.display = "inline";
        class_3.style.display = "none";
    } else if (index == 3) {
        class_1.style.display = "none";
        class_2.style.display = "none";
        class_3.style.display = "inline";
    } else {
        class_1.style.display = "none";
        class_2.style.display = "none";
        class_3.style.display = "none";
    }
}

function getTodayLabel() {
    var week = new Array(
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일"
    );

    var today = new Date().getDay();
    var todayLabel = week[today];
    return todayLabel + "시간표";
}

function init() {
    link1.addEventListener("click", handleClick1);
    link2.addEventListener("click", handleClick2);
    link3.addEventListener("click", handleClick3);
    link4.addEventListener("click", handleClick4);
    link5.addEventListener("click", handleClick5);
    title.addEventListener("click", handleTitleClick);
    sel.addEventListener("change", handleSelChange);
}

function getWeek() {
    week.innerText = getTodayLabel();
}
setInterval(getWeek,10);
init();