// 코드를 더 짧게 그리고 보기 좋게 사용하기 위해 고민해보기 
// $ 표시는 HTML의 element를 가져올때 관용적으로 사용한다. 
const $ = (selector) => document.querySelector(selector);


function App() {
    // form 태그가 자동으로 전송되는 걸 막아준다. 
    $("#espresso-menu-form").addEventListener("submit", (e) => {
        e.preventDefault();
    });

    // 메뉴의 이름을 입력 받는 건 
    $("#espresso-menu-name").addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const espressoMenuName = $("#espresso-menu-name").value;
            const menuItemTemplate = (espressoMenuName) => {
                return `
                    <li class="menu-list-item d-flex items-center py-2">
                    <span class="w-100 pl-2 menu-name">${name}</span>
                    <button
                    type="button"
                    class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
                    >
                    수정
                    </button>
                    <button
                    type="button"
                    class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
                    >
                    삭제 
                    </button>
                </li>`;
            };
            // HTML 코드를 작성할 때는 innerHTML를 사용한다. 
            $("#espresso-menu-list").insertAdjacentHTML(
                "beforeend",
                menuItemTemplate(espressoMenuName)
            )
        }
    });
}
   
