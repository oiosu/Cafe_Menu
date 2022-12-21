function App() {
    // form 태그가 자동으로 전송되는걸 막아준다. 
    // form 에 있는 id 값을 가져온다. 
    document.querySelector("#espresso-menu-form")
    .addEventListener("submit", (e) => {
        e.preventDefault();
    })
    // 메뉴 이름을 입력받는 건 
    // id 값을 활용할 것 espresso-menu-name 
    document.querySelector("#espresso-menu-name")
    // e는 event의 약자 
    .addEventListener("keypress", (e) => {
        // 한글자씩 말고 단어 전체를 가져오고 싶다면? 
        // 엔터키를 입력 받았을 때 가져오도록 실행한다 
        // if 문을 활용한다. 
        // 기본적으로 form 태그는 웹 서버로 무언가를 전송하기 위해 사용하는 태그이다
        // enter 키를 눌렀을때 자동으로 전송하는 동작을 브라우저에서 제공을 해서 enter 키를 눌렀을 때 새로고침이 된다. 
        // 따라서 form 태그가 자동으로 전송되는 것을 막아줘야 한다. 
        if (e.key === "Enter") {
            console.log(document.querySelector("#espresso-menu-name").value)
        }
    })
}
   
