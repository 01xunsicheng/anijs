$(document).ready(function(){
	//Parse para la Ani sintaxt
	var aniParse = {},
		AniJS = {};


	//Declaration = (Sentence)*
	//Ejemp "when: click, how: bounceOutLeft; when: hover, how: bounceIn"
	aniParse.parseDeclaration = function(declaration){
		var parsedDeclaration = [],
			sentenceCollection,
			parsedSentence;

		sentenceCollection = declaration.split(';');

		$( sentenceCollection ).each(function( index ){
			parsedSentence = aniParse.parseSentence(sentenceCollection[index]);
			parsedDeclaration.push(parsedSentence);
		});

		return parsedDeclaration;

	}

	//Sentence = Event | Behavior | Target
	//Ejemp "when: click, how: bounceOutLeft"
	aniParse.parseSentence = function(sentence){
		var parsedSentence = {},
			definitionCollection,
			parsedDefinition;

		definitionCollection = sentence.split(',');

		$( definitionCollection ).each(function( index ){
			parsedDefinition = aniParse.parseDefinition(definitionCollection[index]);
			parsedSentence[parsedDefinition.key] = parsedDefinition.value;
		});

		return parsedSentence;

	}

	aniParse.parseDefinition = function(definition){
		var parsedDefinition = {},
			definitionBody,
			definitionKey,
			definitionValue;

		definitionBody = definition.split(':');

		if(definitionBody.length > 1){
			definitionKey = $.trim(definitionBody[0]);
			definitionValue = $.trim(definitionBody[1]);
			parsedDefinition.key = definitionKey;
			parsedDefinition.value = definitionValue;
		}

		return parsedDefinition;

	}


	AniJS.run = function(){
		var findIt = $( "*[data-ani]" ),
			aniQuery;

		console.log(findIt);
			
		//take query
		aniQuery = findIt.attr( "data-ani" );

		$( findIt ).each(function( index ) {
			var aniDeclaration = $( this ).attr( "data-ani" );
	  		//console.log( index + ": " + $( this ).attr( "data-ani" ) );
	  		
	  		//Convert human radeable query in system understand
	  		var parsedDeclaration = aniParse.parseDeclaration(aniDeclaration);

	  		AniJS.setupElementAnim($( this ), parsedDeclaration);

	  		//console.log(parsedQuery);
		});
	}

	AniJS.setupElementAnim = function(element, parsedDeclaration){
		AniJS.setupElementEvent(element, parsedDeclaration);

		//Recorro la declaration y por cada una
		$( parsedDeclaration ).each(function( index ){
			//console.log(parsedDeclaration[index]);
			AniJS.setupElementSentence(element, parsedDeclaration[index]);
		});
		
	}

	AniJS.setupElementSentence = function(element, parsedSentence){
		//AniJS.setupElementEvent(element, parsedSentence);
		console.log('setupElementSentence');
		console.log(parsedSentence);
		var definition,
			when = parsedSentence.when || 'click',
			how = parsedSentence.how || '',
			what = parsedSentence.what || element;


		how += ' animated';
		$(element).on(when, function(event){
			$(what).addClass( how ).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('animated');
		    });
		});
	}

	AniJS.setupElementEvent = function(element, parsedDeclaration){
	}


	AniJS.run();

	// $('.go').click(function(){
	// 	$('.animatecss').addClass('animated bounceOutLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	// 		$(this).removeClass('animated bounceOutLeft');
	//     });
	// });

});
