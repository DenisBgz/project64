function sum(a,b){return a + b;}
function difference(a,b){return a - b;}
function division(a,b){return a / b;}
function multiplication(a,b){return a * b;}


let input = document.getElementById('numBox');
document.querySelector('input[type="text"]').addEventListener('keydown', event => event.preventDefault());
input.value = '0';
let numArr = [document.getElementById('7'),document.getElementById('8'),document.getElementById('9'),
							document.getElementById('4'),document.getElementById('5'),document.getElementById('6'),
							document.getElementById('1'),document.getElementById('2'),document.getElementById('3'),
							document.getElementById('0'),document.getElementById('plus'),
							document.getElementById('division'),document.getElementById('multiplication'),document.getElementById('minus')
];
let b = '';
let a = '';
let operationType = '';
let del = document.getElementById('del');
let c = document.getElementById('c');
let result = document.getElementById('result');
let onProcess = false;

for (let i = 0; i < numArr.length-4; i++) {
	numArr[i].onclick = () => {
		if(input.value[0] != '0')
			input.value += numArr[i].innerText;
		else{
			input.value = '';
			input.value += numArr[i].innerText;
		}
	};
}
for(let i = numArr.length-4;i < numArr.length-1;i++){
	numArr[i].onclick = ()=>{
		if(onProcess == false){
			a = input.value;
		}
		onProcess = true;
		operationType = numArr[i].innerText;
		input.value = '0'
	}
}
numArr[numArr.length-1].onclick = () =>{
	if(input.value == '0'){
		if(onProcess == false){
			input.value = '';
			input.value += numArr[numArr.length-1].innerText;
		}
	}else{
			a = input.value;
			onProcess = true;
			operationType = numArr[numArr.length-1].innerText;
			input.value = '0'
	}

}
del.onclick = () =>{
	if(input.value > 1){
		input.value = input.value.slice(0,-1);
		if(input.value <= 1)
			input.value = '0';
	}
	
}
c.onclick = ()=>{
	input.value = '0';
}
result.onclick = ()=>{

		b = input.value;
	
	switch(operationType){
		case '+':
			input.value = sum(parseInt(a),parseInt(b));
			break;
		case '-':
			input.value = difference(parseInt(a),parseInt(b));
			break;
		case '×':
			input.value = multiplication(parseInt(a),parseInt(b));
			break;
		case '÷':
				input.value = division(parseInt(a),parseInt(b));
				break;
	}
	console.log(a,operationType,b)
	a = b = 0;
	onProcess = false;

}