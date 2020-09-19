var inputListElement = document.getElementById("inputs");
var outputListElement = document.getElementById("outputs");

var inputs = [
	"x",
	"y",
	"z"
]
var iR = {

}

var formulas = [
	{
		"name": "xy^2",
		"formula": "`${iR['x'].value} * Math.pow(${iR['y'].value},2)`"
	},
	{
		"name": "z + x - 1",
		"formula": "`${iR['z'].value} + ${iR['x'].value} - 1`"
	}
]

var formulasRaw = [

]

function checkForUpdates(){
	formulasRaw.forEach(formulaElement=>{
		formulas.forEach(f=>{
			if (formulaElement.placeholder === f.name){
				console.log(eval(f.formula))
				formulaElement.value = eval(eval(f.formula)).toString()
			}
		})
	})
}

inputs.forEach(name=>{
	var label = document.createElement("p")
	label.innerHTML = name;
	label.className = "small"
	var input = document.createElement("textarea");
	input.placeholder = name;
	input.rows = 1;
	iR[name] = (input);
	inputListElement.appendChild(label)
	inputListElement.appendChild(input)
	input.addEventListener('input',()=>{
		checkForUpdates();
	});
})


formulas.forEach(formula=>{
	var label = document.createElement("p")
	label.innerHTML = formula.name;
	label.className = "small"
	var input = document.createElement("textarea");
	input.placeholder = formula.name;
	input.rows = 1;
	input.readOnly = true;
	formulasRaw.push(input);
	outputListElement.appendChild(label)
	outputListElement.appendChild(input)
})
