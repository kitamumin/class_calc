equal_state = false;
state='start'
const num_bth = document.querySelectorAll('num');
let output_sub = document.getElementById('expr');
const output_total = document.getElementById('result');
let total = 0;

convert = (text, flg) => {
  if (flg) {
    text = text.replace("/", "÷");
    text = text.replace("*", "×");
  } else {
    text = text.replace("×", "*");
    text = text.replace("÷", "/");
  }
  return text;
}

const one = document.querySelectorAll('.kazu');
    one.forEach(index => {     
      index.addEventListener('click', () => {

        if(equal_state) {
          total = 0
          output_sub.textContent = total;
          equal_state = false;
        }

        if(total === 0) {
          total = index.dataset.indexId;  
        }else{
          total += index.dataset.indexId;
        }     
        //console.log(total)
        output_sub.textContent = convert(total, true);
        state = 'kazu'//数字を入力している状態にする。
      })
    })

  // 0の数字ボタンを押した時
  const zero = document.getElementById('zero');
  zero.addEventListener('click', () => {
    if(state === 'start') {
      return;
    }
    if(state === 'kigou'){
      return;
    }
    //console.log(zero.dataset.indexId)
    if(total === 0) {
      total = zero.dataset.indexId;  
    }else{
      total += zero.dataset.indexId;
    }      
    output_sub.textContent = convert(total, true);
    state = 'kazu'//数字を入力している状態にする。
  })   

  //「＋　÷　－　×」ボタンを押した時
  const op = document.querySelectorAll('.kigou');
  op.forEach(index => {     
    index.addEventListener('click', () => {
      if(state === 'start') {
        return;
      }
      if(state === 'kigou'){
        return;
      }

      if(equal_state) {
        total = eval(convert(output_sub.textContent, false));
        equal_state = false;
      }
      //console.log(index.dataset.indexId)
      if(total === 0) {
        total = index.dataset.indexId;  
      }else{
        total += index.dataset.indexId;
      } 
      output_sub.textContent = convert(total, true);
      state = 'kigou'//演算記号を入力している状態する。
    })
  })

  //イコールを押した時
  const equal_btn = document.getElementById('equal_btn');
  equal_btn.addEventListener('click',() =>{
    //console.log(eval(total));
    output_total.textContent = eval(convert(total, false));

    equal_state = true;
  });

  const clear = document.getElementById('ac')
  clear.addEventListener('click', () => {
    reset();
  })

 //リセットを行う関数
  function reset() {
   total = 0; 
   expr.textContent = 0;
   result.textContent = 0;
   state = 'start';
   equal_state = false;
  }