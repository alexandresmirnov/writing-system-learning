//not an alphabet, I know.  Get off my case.
var Alphabet = function (display,input,answer) {
	
	this.display = display;
	this.input = input;
	this.answer = answer;
	
	this.pairs = [
		['क','k'],
		['ख','kh'],
		['ग','g'],
		['घ','gh'],
		['ट','rt'],
		['ठ','rth'],
		['ड','rd'],
		['ढ','rdh'],
		['त','t'],
		['थ','th'],
		['द','d'],
		['ध','dh'],
		['प','p'],
		['फ','ph'],
		['ब','b'],
		['भ','bh'],
		['च','c'],
		['छ','ch'],
		['ज','j'],
		['झ','jh'],
		['ड़','rr'],
		['ढ़','rrh'],
		['र','r'],
		['न','n'],
		['म','m'],
		['ण','rn'],
		['स','s'],
		['श','sh'],
		['ष','rs'],
		['ह','h'],
		['य','y'],
		['व','v'],
		['ल','l'],
		['अ','a'],
		['आ','aa'],
		['इ','i'],
		['ई','ii'],
		['उ','u'],
		['ऊ','uu'],
		['ओ','o'],
		['औ','au'],
		['ए','e'],
		['ऐ','ai'],
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
