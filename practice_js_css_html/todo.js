const toDoForm = document.getElementById("todo-form");

// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");

const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    // localStorage를 이용해 값을 저장
    // JSON.stringify(toDos) = toDos의 string을 array로 넣는 것.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) { // 버튼 삭제
    const li = event.target.parentElement; // 어떤 x가 클릭되었는지 알 수 있음.
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li,id)); // 화살표 함수. 속도차이 없음.
    saveToDos();
    // li.remove();
}

function paintToDo(newTodo) { // toDo를 그리는 역할.
    const li = document.createElement("li"); // html에 li 추가
    li.id = newTodo.id;
    const span = document.createElement("span"); // span 추가
    span.innerText = newTodo.text;
    const button = document.createElement("button"); // 삭제시키는 버튼을 추가
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo); // 이벥트 추가
    li.appendChild(span); // span을 li의 하위로 넣어준다. (안으로 넣는다.)
    li.appendChild(button); // li의 안에 button을 추가
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault(); // event를 막아준다.
    const newTodo = toDoInput.value; // 값 저장.
    toDoInput.value =""; // 저장 후 입력값을 비워준다.
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); // 값을 toDos 리스트에 넣는다. 
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) { // savedToDos가 존재하는 경우.
    const parsedToDos = JSON.parse(savedToDos); // array로 변환
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); // 각 array에 대해 ()안의 함수를 실행.
}

