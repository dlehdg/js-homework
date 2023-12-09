const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

const email = document.querySelector(".user-email-input");

const password = document.querySelector(".user-password");

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

email.addEventListener("input", (e) => {
  // if (e.target.value !== "") {
  if (emailReg(e.target.value)) {
    console.log(emailReg(e.target.value) === true ? "참" : "거짓");
    email.classList.remove("is--invalid");
  }
  // (!pwReg(e.target.value))
  else if (!emailReg(e.target.value)) {
    console.log(emailReg(e.target.value));
    email.classList.add("is--invalid");
  }
});

password.addEventListener("input", (e) => {
  if (pwReg(e.target.value)) {
    console.log(pwReg(e.target.value));
    password.classList.remove("is--invalid");
  }
  // (!pwReg(e.target.value))
  else {
    console.log(pwReg(e.target.value));
    password.classList.add("is--invalid");
  }
});
