
var Alphabet = function (display,input,answer) {
	
	this.display = display;
	this.input = input;
	this.answer = answer;
	this.weightedArray;
	this.weightedMax;
	
	this.pairs = [
		['پ','p',1],
		['ب','b',1],
		['ط','t',1],
		['ت','t',1],
		['د','d',1],
		['ک','k',1],
		['گ','g',1],
		['ء','\'',1],
		['ع','\'',1],
		['چ','ch',1],
		['ج','j',1],
		['ف','f',1],
		['و','v',1],
		['ث','s',1],
		['ص','s',1],
		['س','s',1],
		['ظ','z',1],
		['ض','z',1],
		['ذ','z',1],
		['ز','z',1],
		['ش','sh',1],
		['ژ','zh',1],
		['خ','x',1],
		['غ','q',1],
		['ق','q',1],
		['ح','h',1],
		['ه','h',1],
		['م','m',1],
		['ن','n',1],
		['ل','l',1],
		['ر','r',1],
		['ی','y',1]
	];
	
	this.notSeen = [];

	this.init();
	
};

Alphabet.prototype.generateWeightedArray = function(){
	
	var weightedArray = [];
	
	var currentNum = 0;
	
	this.pairs.forEach(function(entry){
		currentNum += entry[2];
		weightedArray.push(currentNum);
	});
	
	this.weightedArray = weightedArray;
	
	this.weightedMax = currentNum;
	/*
	var weightedTotal = 0;
	this.weightedArray.forEach(function(entry){
		weightedTotal += entry;
	});
	
	this.weightedTotal = weightedTotal;
	
	console.log(weightedTotal);
	*/
};

Alphabet.prototype.newCharacter = function(){
	
	
	
	var weightedArray = this.weightedArray;
	
	var amountOfCharacters = this.pairs.length;
	
	var weightedMax = this.weightedMax;
	
	var randomNum = Math.random();
	randomNum *= this.weightedMax;
	
	if(typeof this.notSeen.length !== 'undefined'){
	//every single one has been seen, need to reset
	//if(this.notSeen.length==0){
		for(i=0; i<amountOfCharacters; i++){
			console.log(i)
			for(b=0;b<this.pairs[i][2];b++){
				console.log("loop");
				//this.notSeen[i]=i;
				this.notSeen.push(i);
			}
			
			//this.notSeen[i]=i;
			this.pairs[i][3]=this.pairs[i][2];
		}
		
	}
	
		
	for (i=0; i < this.weightedArray.length; i++){
		var currEntry = this.weightedArray[i];
		
		
		if(i==0){
			var prevEntry = 0;
		}	
		else {
			
			var prevEntry = weightedArray[i-1];
		}
		
		//console.log("index: "+i, "currEntry: "+currEntry);
		
		
		if(randomNum < currEntry && randomNum > prevEntry){
			console.log("passed");
			var resultPair = this.pairs[i];
			console.log(resultPair);
			
			this.pairs[i][2] -= 1;
			
			var index = this.notSeen.indexOf(i);
			this.notSeen.splice(index, 1);
		}
		
	}
	
	
	
	
	
	this.display.text(resultPair[0]);
	this.display.attr("correct-value",resultPair[1]);
	
	this.input.val('');
	this.answer.text('');
};
	
Alphabet.prototype.init = function(){
	
	var amountOfCharacters = this.pairs.length;
	
/*
	for(i=0; i<amountOfCharacters; i++){
		console.log(i)
		for(b=0;b<this.pairs[i][2];b++){
			console.log("loop");
			//this.notSeen[i]=i;
			this.notSeen.push(i);
		}
		
		//this.notSeen[i]=i;
		this.pairs[i][3]=this.pairs[i][2];
	}
*/
	
	this.generateWeightedArray();

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
