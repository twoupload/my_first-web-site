// html에서 시계 불러오기

const clock = document.querySelector("h2#clock"); // h2의 id clcck
//const clock = document.getElementById("clock");
//const clock = document.querySelector("#clock");


// 시간을 나타내는 함수
function getClock() {
    const date = new Date();
    // padStart(글자길이, 추가할 문자열) : 문자열 길이보다 잛으면, 남은 글자 만큼 뒤의 문자열 추가
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSec이onds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// delay 없이 바로 실행될 수 있도록 INterval 전에 미리 한번 더 실행.
getClock();

// 시간 간격을 두고 함수를 실행. 시간은 ms(밀리 세컨드) 기준
setInterval(getClock, 1000);
//setTimeout(getClock, 1000);
