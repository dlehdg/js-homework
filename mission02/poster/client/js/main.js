/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const navigation = document.querySelector("ul");
const visualImage = getNode(".visual img");

function handleClick(e) {
  e.preventDefault();

  let li = e.target.closest("li");

  if (!li) return;

  console.log(li);
  let index = li.dataset.index;

  let arr = [...navigation.children];

  arr.forEach((item) => {
    removeClass(item, "is-active");
  });

  addClass(li, "is-active");
}

function getNode(node) {
  if (typeof node !== "string") {
    throw new Error("함수의 인자 타입이 맞지 않습니다");
  }

  return document.querySelector(node);
}

function addClass(node, className) {
  if (typeof node === "string") node = getNode(node);
  if (typeof className !== "string") {
    throw new TypeError("두 번째 함수의 인자 타입이 맞지 않습니다");
  }
  return node.classList.add(className);
}

function removeClass(node, className) {
  if (typeof node === "string") node = getNode(node);
  if (!className) {
    node.className = "";
    return;
  }
  if (typeof className !== "string") {
    throw new TypeError("두 번째 함수의 인자 타입이 맞지 않습니다");
  }

  return node.classList.remove(className);
}

function bgColorChanged(index) {}

navigation.addEventListener("click", handleClick);
