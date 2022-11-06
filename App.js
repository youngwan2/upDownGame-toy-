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
 
  //1~100 범위를 넘어서는 경우 경고
  if(userValue<1 || userValue>100){
    warning()
    result.style.color="white"
    chance.textContent ="거기..아니야ㅠ"
    
    return
  };

  //유저가 입력한 값이 중복이 되는 경우 경고
  if(userValueList.includes(userValue)){
    warning()
    chance.textContent ="이미눌렀음!!"
    return
  };

  //기회 관련 안내 메시지
  chance.textContent = `총 ${--chanceNum} 발`;
  if(chanceNum ==3){
    chance.textContent ="아직, 3발 남았다.."
  } else if(chanceNum ==1){
    chance.textContent = "마지막 1발."
  } else if(chanceNum ==0){
    chance.textContent = "졋잘싸.."
  };
  

  if (userValue > RandomNum) {
    result.textContent = "Down↓";
    result.style.backgroundImage="url(./come-on.gif)"
    result.style.color = "rgb(245, 16, 16)"
    backgroundSet();

  } else if (userValue < RandomNum) {
    result.textContent="Up!!"
    result.style.color="blue"
    result.style.backgroundImage="url(./up.gif)"
    backgroundSet();

  } else {
    result.textContent = '"아깝다.. 살았네"';
    result.style.fontSize="30px"
    result.style.backgroundImage="url(./음주섞음.gif)"
    result.style.color = "red"
    chance.textContent = "와.. 이걸 맞추네? 천재인가??.."
    backgroundSet();
    userInput.disabled = true;
    playBtn.disabled = true;
    return
  };

    userValueList.push(userValue)
    console.log(userValueList)

  if (chanceNum < 1 && RandomNum !=userValue )  {
    userInput.disabled = true;
    playBtn.disabled = true;
    fail();
    return
  };
};


function resetEvent(){
    chance.textContent = "나 혼자 못 죽지!.."
    RandomNum = Math.floor(Math.random() * 100 + 1);
    console.log("정답: " + RandomNum);
    userInput.disabled = false;
    playBtn.disabled = false;
    userValueList = []
    chanceNum ="7"
    result.style.backgroundImage="url(./드루와.gif)"
    result.innerHTML =`"드루와..드루와!"`
    result.style.color = "black"
    
};

function userValueResetEvent(){
    userInput.value=""
}


//경고 메시지
function warning(){
  result.innerText=""
  result.style.backgroundImage="url(./경고이미지.gif)"
  result.style.backgroundPosition="center"
  result.style.backgroundSize="cover"
};


//실패 메시지
function fail(){
  result.style.backgroundImage="url(./실패.gif)"
  result.style.backgroundPosition="center"
  result.style.backgroundSize="cover"
  result.innerText ="Boob ~"
  result.style.color="red"
};

function backgroundSet(){
  result.style.backgroundPosition="center"
  result.style.backgroundSize="cover"
}




// 게임시작전 안내 메시지

let txt = ['업 다운 게임에 오신걸 환영합니다.','목숨은 총 7개 입니다.','그럼 즐거운 시간되시길 바랍니다.']
let split = txt[0].split('');

const textUpdate=()=>{
    if(split.length!==0){
       chance.innerHTML +=split.shift();
       setTimeout(textUpdate,150)
    } else if(split.length ===0){
       split =txt[1].split('');
       chance.innerHTML = '';
       setTimeout(textUpdate2,1300);    
    }; 
};        
    textUpdate();

const textUpdate2=()=>{ 
     
     if(split.length!==0){
        chance.innerHTML +=split.shift();
        setTimeout(textUpdate2,200)
        
    } else if(split.length ===0){
       split =txt[2].split('');
       chance.innerHTML = ''
       setTimeout(textUpdate3,1300);    
   }; 
};   

const textUpdate3=()=>{
  
  if(split.length!==0){
    chance.innerHTML +=split.shift();
    chance.innerHTML ="총 "+chanceNum +" 발";
    setTimeout(textUpdate3,100);
    return
  };
}; 


