let input = document.getElementById('numBox')
let numArr = [document.getElementById('7'),document.getElementById('8'),document.getElementById('9'),
							document.getElementById('4'),document.getElementById('5'),document.getElementById('6'),
							document.getElementById('1'),document.getElementById('2'),document.getElementById('3'),
							document.getElementById('plus'),document.getElementById('minus'),document.getElementById('division'),
							document.getElementById('multiplication')
];
let del = document.getElementById('del');
let c = document.getElementById('c');

for (let i = 0; i < numArr.length; i++) {
	numArr[i].onclick = () => {
			input.value += numArr[i].innerText;
	};
}
del.onclick = () =>{
	input.value = input.value.slice(0,-1);
}
c.onclick = ()=>{
	input.value = '';
}