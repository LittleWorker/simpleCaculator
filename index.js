window.onload=function(){
	let calculator = document.querySelector("#calculator"),
		sign = document.querySelector(".sign"),
		formerInput = document.querySelector('.formerInput'),
		laterInput = document.querySelector('.laterInput'),
		result = document.querySelector('.result');
	var value_former,value_later;
	
	_initButton();
	function getValue(){
		value_former = Number(formerInput.value);
		value_later = Number(laterInput.value);
	}
	function computeHandler(com_method){
		//获取当前input输入框中的值
		getValue();
		switch(com_method){
			case "+":
				sign.innerHTML="+";
				result.innerHTML=value_former + value_later;
				break;
			case "-":
				sign.innerHTML="-";
				result.innerHTML=value_former - value_later;
				break;
			case "x":
				sign.innerHTML="x";
				result.innerHTML=value_former * value_later;
				break;
			case "÷":
				sign.innerHTML="÷";
				result.innerHTML=value_former / value_later;
				break;
		}
	}
	function inputChanged(){
		getValue();
		//获取当前计算类型
		let com_method = sign.innerHTML;
		//执行一次计算
		computeHandler(com_method);
	}
	function _initButton(){
		//给四个运算Button绑定事件
		let addButton = document.querySelector('#addButton'),
			subButton = document.querySelector('#subButton'),
			multiButton = document.querySelector('#multiButton'),
			divButton = document.querySelector('#divButton');
		addButton.addEventListener("click",() => computeHandler("+"));
		subButton.addEventListener("click",() => computeHandler("-"));
		multiButton.addEventListener("click",() => computeHandler("x"));
		divButton.addEventListener("click",() => computeHandler("÷"));
		//给两个输入框绑定事件
		formerInput.addEventListener("keyup",inputChanged);
		laterInput.addEventListener("keyup",inputChanged);
	}
};