
var Alphabet = function (display,input,answer) {
	
	this.display = display;
	this.input = input;
	this.answer = answer;
	
	this.pairs = [
	/*
		['Α α','a'],
		['Β β','v'],
		['Γ γ','g'],
		['Δ δ','d'],
		['Ε ε','e'],
		['Ζ ζ','z'],
		['Η η','i'],
		['Θ θ','th'],
		['Ι ι','i'],
		['Κ κ','k'],
		['Λ λ','l'],
		['Μ μ','m'],
		['Ν ν','n'],
		['Ξ ξ','ks'],
		['Ο ο','o'],
		['Π π','p'],
		['Ρ ρ','r'],
		['Σ σ','s'],
		['Τ τ','s'],
		['Υ υ','i'],
		['Φ φ','f'],
		['X x','x'],
		['Ψ ψ','ps'],
		['Ω ω','o'],
	*/
		['α','a'],
		['β','v'],
		['γ','g'],
		['δ','d'],
		['ε','e'],
		['ζ','z'],
		['η','i'],
		['θ','th'],
		['ι','i'],
		['κ','k'],
		['λ','l'],
		['μ','m'],
		['ν','n'],
		['ξ','ks'],
		['ο','o'],
		['π','p'],
		['ρ','r'],
		['σ','s'],
		['τ','t'],
		['υ','i'],
		['φ','f'],
		['x','h'],
		['ψ','ps'],
		['ω','o'],
		['αι','e'],
		['ει','i'],
		['οι','i'],
		['υι','i'],
		['αν','av'],
		['εν','ev'],
		['ου','u']
	];

	this.init();
	
};



Alphabet.prototype.newCharacter = function(){
	var amountOfCharacters = this.pairs.length;
	
	var randomNum = Math.random()*this.pairs.length;
	randomNum = Math.round(randomNum);
	
	var resultPair = this.pairs[randomNum];

	this.display.text(resultPair[0]);
	this.display.attr("correct-value",resultPair[1]);
	
	this.input.val('');
	this.answer.text('');
};
	
Alphabet.prototype.init = function(){
	this.newCharacter();

};


var instance = new Alphabet($('#display span'),$('#input'),$('#answer'));

instance.input.keypress(function(e){
	if(e.which == 13) {
		
		var inputText = instance.input.val();
		var correctValue = instance.display.attr("correct-value");
		
		if(inputText == ''){
			instance.answer.text(correctValue);
		}
		else {
			
			if(inputText==correctValue){
				instance.newCharacter();
			}
			else{
				instance.answer.text("wrong");
			}
			
		}
		
	}
});
