# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---

<h2> 요구사항 </h2>

- [x] email 정규표현식을 사용한 조건처리

- [x] pw 정규표현식을 사용한 validation

- [x] 로그인 버튼 클릭시 user.id 값과 input 값을 비교

- [x] 로그인 버튼 클릭시 user.pw의 값과 input 값을 비교

- [x] 두 값이 일치 한다면 다음 페이지로 이동



---


<h2> 1. email, pw 정규표현식을 사용한 validation </h2>


<br>

    const email = document.querySelector(".user-email-input");
    
    email.addEventListener("input", (e) => {
    
    if (emailReg(e.target.value)) {
    email.classList.remove("is--invalid");
    }
    
    else if (!emailReg(e.target.value)) {
    email.classList.add("is--invalid");
    }
    });


dom api를 사용해 가져온 email 요소에 들어온 값이 해당하는 정규표현식 조건에 따라 클래스 이름이 추가 or 제거 되는 코드를 작성


<br>

---

<br>


<h2> 2. 로그인 버튼 클릭시 이벤트</h2>

<br>

    const inputForm = document.querySelector(".login-form");
    inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
    id: email.value,
    pw: password.value,
    };


    if (user.id === data.id && user.pw === data.pw) {
      window.location.href = "welcome.html";
    }

    console.log(data.id, data.pw);
    });


버튼 클릭시 submit 이벤트를 사용하기 위해 버튼이 아닌 form 요소를 가져와서 사용
기존에 있는 기능을 사용하지 않기 위해 preventDefault를 사용
이메일에 작성된 값과 password에 작성된 값을 객체로 만들어 해당하는 객체와 조건 객체를 비교해서 참인 경우 window.location.href를 통해 이동

    





