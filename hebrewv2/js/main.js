//not an alphabet, I know.  Get off my case.
var Alphabet = function (display,input,answer) {
	
	this.display = display;
	this.input = input;
	this.answer = answer;
	
	this.pairs = [
		['בּ','b'],
		['ד','d'],
		['ג','g'],
		['ף','f'],
		['פ','f'],
		['ה','h'],
		['ח','x'],
		['י','j'],
		['ק','k'],
		['כּ','k'],
		['ל','l'],
		['ם','m'],
		['מ','m'],
		['פּ','p'],
		['נ','n'],
		['ן','n'],
		['ר','r'],
		['ס','s'],
		['שׂ','s'],
		['שׁ','sh'],
		['ט','t'],
		['ת','t'],
		['ץ','ts'],
		['צ','ts'],
		['ב','v'],
		['ו','v'],
		['ח','x'],
		['ך','x'],
		['כ','x'],
		['ז','z'],
		['א','\''],
		['ע','\'']
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
