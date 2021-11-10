let btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9;

btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
btn3 = document.getElementById('btn3');
btn4 = document.getElementById('btn4');
btn5 = document.getElementById('btn5');
btn6 = document.getElementById('btn6');
btn7 = document.getElementById('btn7');
btn8 = document.getElementById('btn8');
btn9 = document.getElementById('btn9');

let str=[1,2,3,6,9,8,7,4],num=8;

btn5.addEventListener('click',clockWise);

function clockWise(){
   num--;
   if(num>=0){
      btn1.innerHTML = [1,2,3,6,9,8,7,4][num];
      btn2.innerHTML = [2,3,6,9,8,7,4,1][num];
      btn3.innerHTML = [3,6,9,8,7,4,1,2][num];
      btn6.innerHTML = [6,9,8,7,4,1,2,3][num];
      btn9.innerHTML = [9,8,7,4,1,2,3,6][num];
      btn8.innerHTML = [8,7,4,1,2,3,6,9][num];
      btn7.innerHTML = [7,4,1,2,3,6,9,8][num];
      btn4.innerHTML = [4,1,2,3,6,9,8,7][num];
      } 
   else {
      num=7;
      btn1.innerHTML = [1,2,3,6,9,8,7,4][num];
      btn2.innerHTML = [2,3,6,9,8,7,4,1][num];
      btn3.innerHTML = [3,6,9,8,7,4,1,2][num];
      btn6.innerHTML = [6,9,8,7,4,1,2,3][num];
      btn9.innerHTML = [9,8,7,4,1,2,3,6][num];
      btn8.innerHTML = [8,7,4,1,2,3,6,9][num];
      btn7.innerHTML = [7,4,1,2,3,6,9,8][num];
      btn4.innerHTML = [4,1,2,3,6,9,8,7][num];
   }  

            
   }

