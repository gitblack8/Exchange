// 1. 박스 2개 만들기 
// 2. 드랍다운 리스트 만들기 
// 3. 환율정보 들고오기
// 4. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
// 5. 금액을 입력하면 환전이 된다.
// 6. 드랍다운 리스트에서 아이템을 선택하면 그 단위 기준으로 환전이 됨
// 6. 숫자를 한국어로 읽는 법
// 7. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용된다.


let currrencyRatio = {
  USD:{
    USD: 1,
    KRW: 1318.70,
    VND: 24325,
    unit: "달러"
  },
  KRW:{
    KRW: 1,
    USD: 0.00076,
    VND: 18.43,
    unit: "원"
  },
  VND: {
    VND: 1,
    KRW: 0.054,
    USD: 0.000041,
    unit: "동"
  }
}
let fromCurrency = "USD"

document
  .querySelectorAll("#from-currency a")
  .forEach((menu) => menu.addEventListener("click", 
    function(){
      //1. 버튼을 가져 온다.
      document.getElementById("from-button").textContent = this.textContent
      //2. 버튼의 값을 바꾼다.
      //3. 바뀐 값을 저장한다.
      fromCurrency = this.textContent
      
  }))

  let toCurrency = "USD"

  document
    .querySelectorAll("#to-currency a")
    .forEach((menu) => menu.addEventListener("click",
      function(){
        document.getElementById("to-button").textContent = this.textContent
        toCurrency = this.textContent
      }
  ))