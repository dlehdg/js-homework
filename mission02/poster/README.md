

## 🕛 2주차 과제 엘리멘탈 포스터 페이지 구현



### 썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 코드 로직을 작성해주세요.


---

## 기술 스택

<img alt="Html" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="Css" src ="https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<br>

---

## 디렉토리 구조

![image](https://github.com/dlehdg/js-homework/assets/80308340/ecf9fd77-b2a5-45a7-8527-9fc6917dc928)



## 요구사항

- [x] 이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요

- [x] 이미지와 색상의 데이터는 data.js 에서 불러와주세요

- [x] 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.

- [x] 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요.

- [x] 함수를 분리시켜주세요.

- [x] 가독성이 좋은 코드로 리팩토링 해주세요.


<br>


# 💻 구현

<br/>

## 0. 유틸 함수


<br>

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


- 클래스에 2번째 매개변수를 추가 or 삭제하는 유틸 함수 구현

  <br>

### dom 요소 가져오기

    function getNode(node) {
      if (typeof node !== "string") {
        throw new Error("함수의 인자 타입이 맞지 않습니다");
      }
    
      return document.querySelector(node);
    }
    
    function getNodes(node) {
      if (typeof node !== "string") {
        throw new Error("함수의 인자 타입이 맞지 않습니다");
      }
    
      return document.querySelectorAll(node);
    }



- html에서 dom으로 요소를 가져오는 유틸 함수 구현


<br>
  

## 1. 클릭 이벤트 활성화


      const navigation = getNode("ul");
      
      
- html에서 dom으로 필요한 부분을 가져온다

<br>

      navigation.addEventListener("click", handleClick);



- html에서 ul 요소를 클릭시 handleClick 함수가 실행되는 이벤트 구현

<br>

      function handleClick(e) {
      e.preventDefault();
      
      let li = e.target.closest("li");
      
      if (!li) return;
      
      let index = li.dataset.index;
      
      let arr = [...navigation.children];
      
        
      }
      
<br>

## 2. nav 클릭시 배경 색상 변경

      function setBgColor(color1, color2) {
        return (document.body.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`);
      }

- 두개의 매개변수 값을 통해 만든 그라데이션 배경색을 body에 적용하는 함수를 구현


<br>

## 3. 이미지 변경

        const visualImage = getNode(".visual img");
        
        function setImage(src) {
        visualImage.src = `./assets/${src.name}.jpeg`;
        // visualImage.alt = data[index - 1].alt;
        }

- 매개변수 src를 통해 visual 클래스 안에 있는 img의 src의 name 값으로 변경한다


<br>


## 4. 텍스트 변경

      const nicName = getNode(".nickName");

      function setNameText(index) {
      nicName.innerHTML = index.name;
      }

- setNameText 함수 실행시 nicName 클래스 이름을 가진 요소의 html 값에 index의 name 값으로 변경한다

<br>

## 5. 함수 분리 및 가독성 좋은 코드로 리팩토링


      function updateVisual(index) {
      const { alt, color, name } = data[index - 1];
      visualImage.alt = alt;
      setImage({ name });
      setNameText({ name });
      setBgColor(color[0], color[1]);
      }


- 클릭 이벤트를 통해 배경 색과 이미지 변경 텍스트 변경의 함수를 각각 실행하는게 아닌 하나로 묶어서 사용하게 구현
- 객체 분해 구조를 통해 좀 더 쉽게 이해 할 수 있게 코드를 작성

<br>

          function handleClick(e) {
        e.preventDefault();
      
        let li = e.target.closest("li");
      
        if (!li) return;
      
        let index = li.dataset.index;
      
        let arr = [...navigation.children];
      
        arr.forEach((item) => {
          removeClass(item, "is-active");
        });
      
        updateVisual(index);
      
        addClass(li, "is-active");
        }

- handleClick 함수 코드 완성본

<br>

## 6. main.js 코드

          /* 
          1. 클릭 이벤트 활성화
          2. nav 클릭시 배경 색상 변경
          3. 이미지 변경
          4. 텍스트 변경
          5. 함수 분리
          */
          
          const navigation = getNode("ul");
          const visualImage = getNode(".visual img");
          const nicName = getNode(".nickName");
          
          // 이벤트 위임 방식
          
          function handleClick(e) {
            e.preventDefault();
          
            let li = e.target.closest("li");
          
            if (!li) return;
          
            let index = li.dataset.index;
          
            let arr = [...navigation.children];
          
            arr.forEach((item) => {
              removeClass(item, "is-active");
            });
          
            updateVisual(index);
          
            addClass(li, "is-active");
          }
          
          // 함수 리스트
          
          function getNode(node) {
            if (typeof node !== "string") {
              throw new Error("함수의 인자 타입이 맞지 않습니다");
            }
          
            return document.querySelector(node);
          }
          
          function getNodes(node) {
            if (typeof node !== "string") {
              throw new Error("함수의 인자 타입이 맞지 않습니다");
            }
          
            return document.querySelectorAll(node);
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
          
          function setBgColor(color1, color2) {
            return (document.body.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`);
          }
          
          function setImage(src) {
            visualImage.src = `./assets/${src.name}.jpeg`;
            // visualImage.alt = data[index - 1].alt;
          }
          
          function setNameText(index) {
            nicName.innerHTML = index.name;
          }
          
          function updateVisual(index) {
            const { alt, color, name } = data[index - 1];
            visualImage.alt = alt;
            setImage({ name });
            setNameText({ name });
            setBgColor(color[0], color[1]);
          }
          
          navigation.addEventListener("click", handleClick);

<br>

# 결과

![녹화_2023_12_17_17_31_13_502](https://github.com/dlehdg/js-homework/assets/80308340/885b4b90-66af-4a63-8f49-cf723aa57326)



<br>

## 회고

- 이번 과제를 통해서 이벤트 위임 방식을 통해 이벤트를 구현하면서 여러 방식으로 구현 할 수 있다는 점을 알 수 있게 되었습니다
- 함수 분리와 리팩토링을 통해서 기존에 작성한 코드를 비교 하면서 다시 한번 이와 비슷한 코드를 만들 때나 참고 할 때 재사용성에 더 큰 도움을 얻을 수 있고 다른 사람이 코드를 볼 때 더 이해 할 수 있다는 점을 다시 한번 알 수 있었습니다
- 코드 리팩토링 과정에서 객체 구조 할당을 통해서 구현을 한다면 코드를 좀 더 이해하기 쉽고 어떤 사용 목적을 가지는지를 더 정확하게 알 수 있을 것 같다고 생각하게 되었습니다
