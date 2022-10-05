let userInput = document.getElementById("user-input");
let result = document.getElementById("result");
let playBtn = document.getElementById("play-btn");
let resetBtn = document.getElementById("reset");
let chance = document.getElementById("chance");
let chanceNum = 7;
let userValueList=[]

playBtn.addEventListener("click", gamePlayEvent);
resetBtn.addEventListener('click',resetEvent)
userInput.addEventListener('focus',userValueResetEvent)


let RandomNum = Math.floor(Math.random() * 100 + 1);
console.log("정답: " + RandomNum);

function gamePlayEvent() {
  let userValue = userInput.value;
  if(userValue<1 || userValue>100){
    result.textContent="1~100사이의 숫자를 적어주쇼..😑"
    return
  }
  if(userValueList.includes(userValue)){
    result.textContent="이미 입력했음😓"
    return
  }

  chance.textContent = `총 ${--chanceNum}번 남음. 신중하게 ㄱ`;
  if(chanceNum ==3){
    chance.textContent ="3번 남음😖"
  } else if(chanceNum ==1){
    chance.textContent = "마지막 1번..😨"
  } else if(chanceNum ==0){
    chance.textContent = "탈락😭"
  }
  if (userValue > RandomNum) {
    result.textContent = "Down↓";
  } else if (userValue < RandomNum) {
    result.textContent = "Up↑";
  } else {
    result.textContent = "Victory!";
    chance.textContent = "오.. 님 천재인 듯"
  }

    userValueList.push(userValue)
    console.log(userValueList)

  if (chanceNum < 1) {
    userInput.disabled = true;
    playBtn.disabled = true;
  }
}

function resetEvent(){
    chance.textContent = "부활!😁"
    RandomNum = Math.floor(Math.random() * 100 + 1);
    console.log("정답: " + RandomNum);
    userInput.disabled = false;
    playBtn.disabled = false;
    userValueList = []
    chanceNum ="7"
}

function userValueResetEvent(){
    userInput.value=""
}