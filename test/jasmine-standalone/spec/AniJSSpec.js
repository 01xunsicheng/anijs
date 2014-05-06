YUI().use('node', 'node-event-simulate', function (Y) {
	console.log('Hello World');
	describe("AniJS", function() {

		//Aqui se pueden poner variables para tener acceso globalmente
		

		//Funcion que se ejecuta antes de empezar
		beforeEach(function() {

		});

		afterEach(function() {

		});

	    //---------------------------------------------------------------------
	    // Define a trigger event for the animation
	    //---------------------------------------------------------------------
		describe("Define a trigger event for the animation", function() {
			beforeEach(function() {
	            //Aqui creo el nodo
	            var htmlNode = '<div class="test">Test</div>';
	            Y.one('#testzone').appendChild(htmlNode);
			});

			afterEach(function() {
				Y.one('#testzone .test').remove();
			});

			it("sin la sentencia", function() {
	            var dataAnijJS = 'do: bounce, to: body',
	            	targetNode;

	            targetNode = Y.one('#testzone .test');

	            targetNode.setAttribute('data-anijs', dataAnijJS);

	            AniJS.run();

	            targetNode.on('click', function(e){
	                expect(Y.one('body').hasClass('bounce')).toBeFalsy();
	            },this, true);

	            targetNode.simulate("click");
			});

			it("con el evento vacio", function() {
	            var dataAnijJS = 'if: , do: bounce, to: body',
	            	targetNode;

	            targetNode = Y.one('#testzone .test');

	            targetNode.setAttribute('data-anijs', dataAnijJS);

	            AniJS.run();

	            targetNode.on('click', function(e){
	                expect(Y.one('body').hasClass('bounce')).toBeFalsy();
	            },this, true);

	            targetNode.simulate("click");
			});

			it("con eventos que no existan", function() {
	            var dataAnijJS = 'if: pepe, do: bounce, to: body',
	            	targetNode;

	            targetNode = Y.one('#testzone .test');

	            targetNode.setAttribute('data-anijs', dataAnijJS);

	            AniJS.run();

	            targetNode.on('click', function(e){
	                expect(Y.one('body').hasClass('bounce')).toBeFalsy();
	            },this, true);

	            targetNode.simulate("click");
			});

			it("con eventos reales", function() {
	            var dataAnijJS = 'if: click, do: bounce, to: body',
	            	targetNode;

	            targetNode = Y.one('#testzone .test');

	            targetNode.setAttribute('data-anijs', dataAnijJS);

	            AniJS.run();

	            targetNode.on('click', function(e){
	                expect(Y.one('body').hasClass('bounce')).toBeTruthy();
	            },this, true);

	            targetNode.simulate("click");
			});
		});

	    //---------------------------------------------------------------------
	    // Define the event emiter element
	    //---------------------------------------------------------------------
		describe("Define the event emiter element", function() {
			beforeEach(function() {
	            //Aqui creo el nodo
	            var htmlNode = '<div class="test">Test</div>';
	            Y.one('#testzone').appendChild(htmlNode);
			});

			afterEach(function() {
				Y.one('#testzone .test').remove();
				Y.one('body').removeClass('bounce');
			});
			it("sin la sentencia", function() {
	            var dataAnijJS = 'if: click, do: bounce, to: body',
	            	targetNode;

	            targetNode = Y.one('#testzone .test');

	            targetNode.setAttribute('data-anijs', dataAnijJS);

	            AniJS.run();

	            targetNode.on('click', function(e){
	                expect(Y.one('body').hasClass('bounce')).toBeTruthy();
	            },this, true);

	            targetNode.simulate("click");
			});

			it("with empty selector", function() {
	            var dataAnijJS = 'if: click, on: , do: bounce, to: body',
	            	targetNode;

	            targetNode = Y.one('#testzone .test');

	            targetNode.setAttribute('data-anijs', dataAnijJS);

	            AniJS.run();

	            targetNode.on('click', function(e){
	                expect(Y.one('body').hasClass('bounce')).toBeTruthy();
	            },this, true);

	            targetNode.simulate("click");
			});

			it("con selectores que no existan", function() {
	            var dataAnijJS = 'if: click, on: .ghostnode, do: bounce, to: body',
	            	targetNode;

	            targetNode = Y.one('#testzone .test');

	            targetNode.setAttribute('data-anijs', dataAnijJS);

	            AniJS.run();

	            targetNode.on('click', function(e){
	                expect(Y.one('body').hasClass('bounce')).toBeFalsy();
	            },this, true);

	            targetNode.simulate("click");
			});

			it("con ugly selectores", function() {
	            var dataAnijJS = 'if: click, on: $/03wew, do: bounce, to: body',
	            	targetNode;

	            targetNode = Y.one('#testzone .test');

	            targetNode.setAttribute('data-anijs', dataAnijJS);

	            AniJS.run();

	            targetNode.on('click', function(e){
	            	console.log(Y.one('body').hasClass('bounce'));
	                expect(Y.one('body').hasClass('bounce')).toBeFalsy();
	            },this, true);

	            targetNode.simulate("click");
			});

			it("con selectores reales", function() {
	            var dataAnijJS = 'if: click, on: .test, do: bounce, to: body',
	            	targetNode;

	            targetNode = Y.one('#testzone .test');

	            targetNode.setAttribute('data-anijs', dataAnijJS);

	            AniJS.run();

	            targetNode.on('click', function(e){
	            	console.log(Y.one('body').hasClass('bounce'));
	                expect(Y.one('body').hasClass('bounce')).toBeTruthy();
	            },this, true);

	            targetNode.simulate("click");
			});
		});

	    //---------------------------------------------------------------------
	    // Animation behavior definition
	    //---------------------------------------------------------------------
		describe("Animation behavior definition", function() {
			beforeEach(function() {
	            //Aqui creo el nodo
	            var htmlNode = '<div class="test">Test</div>';
	            Y.one('#testzone').appendChild(htmlNode);
			});

			afterEach(function() {
				Y.one('#testzone .test').remove();
				Y.one('body').removeClass('bounce');
			});

			it("with empty behavior", function() {
	            var dataAnijJS = 'if: click, on: , do: , to: body',
	            	targetNode;

	            targetNode = Y.one('#testzone .test');

	            targetNode.setAttribute('data-anijs', dataAnijJS);

	            AniJS.run();

	            targetNode.on('click', function(e){
	                expect(Y.one('body').hasClass('bounce')).toBeFalsy();
	            },this, true);

	            targetNode.simulate("click");
			});

			it("with existed behavior", function() {
	            var dataAnijJS = 'if: click, on: , do: flipIn, to: body',
	            	targetNode;

	            targetNode = Y.one('#testzone .test');

	            targetNode.setAttribute('data-anijs', dataAnijJS);

	            AniJS.run();

	            targetNode.on('click', function(e){
	                expect(Y.one('body').hasClass('flipIn')).toBeTruthy();
	            },this, true);

	            targetNode.simulate("click");
			});

		});

	    //---------------------------------------------------------------------
	    // Animation elements target definition
	    //---------------------------------------------------------------------
		describe("Animation elements target definition", function() {
			beforeEach(function() {
	            //Aqui creo el nodo
	            var htmlNode = '<div class="test">Test</div>';
	            Y.one('#testzone').appendChild(htmlNode);
			});

			afterEach(function() {
				Y.one('#testzone .test').remove();
				Y.one('body').removeClass('bounce');
			});

			it("sin la sentencia", function() {
	            var dataAnijJS = 'if: click, do: bounce',
	            	targetNode;

	            targetNode = Y.one('#testzone .test');

	            targetNode.setAttribute('data-anijs', dataAnijJS);

	            AniJS.run();

	            targetNode.on('click', function(e){
	                expect(targetNode.hasClass('bounce')).toBeTruthy();
	            },this, true);

	            targetNode.simulate("click");
			});

			it("with empty selector", function() {
	            var dataAnijJS = 'if: click, do: bounce, to: ',
	            	targetNode;

	            targetNode = Y.one('#testzone .test');

	            targetNode.setAttribute('data-anijs', dataAnijJS);

	            AniJS.run();

	            targetNode.on('click', function(e){
	                expect(targetNode.hasClass('bounce')).toBeTruthy();
	            },this, true);

	            targetNode.simulate("click");
			});

			it("con selectores que no existan", function() {
	            var dataAnijJS = 'if: click, do: bounce, to: unkonowk',
	            	targetNode;

	            targetNode = Y.one('#testzone .test');

	            targetNode.setAttribute('data-anijs', dataAnijJS);

	            AniJS.run();

	            targetNode.on('click', function(e){
	                expect(targetNode.hasClass('bounce')).toBeFalsy();
	            },this, true);

	            targetNode.simulate("click");
			});

			it("con ugly selectores", function() {
	            var dataAnijJS = 'if: click, do: bounce, to: $/03wew',
	            	targetNode;

	            targetNode = Y.one('#testzone .test');

	            targetNode.setAttribute('data-anijs', dataAnijJS);

	            AniJS.run();

	            targetNode.on('click', function(e){
	                expect(targetNode.hasClass('bounce')).toBeFalsy();
	            },this, true);

	            targetNode.simulate("click");
			});

			it("con selectores reales", function() {
	            var dataAnijJS = 'if: click, on: .test, do: bounce, to: body',
	            	targetNode;

	            targetNode = Y.one('#testzone .test');

	            targetNode.setAttribute('data-anijs', dataAnijJS);

	            AniJS.run();

	            targetNode.on('click', function(e){
	                expect(Y.one('body').hasClass('bounce')).toBeTruthy();
	            },this, true);

	            targetNode.simulate("click");
			});
		});

	    //---------------------------------------------------------------------
	    // Execute a function before animation run
	    //---------------------------------------------------------------------
		describe("Execute a function before animation run", function() {
			beforeEach(function() {
	            //Aqui creo el nodo
	            var htmlNode = '<div class="test">Test</div>';
	            Y.one('#testzone').appendChild(htmlNode);
			});

			afterEach(function() {
				Y.one('#testzone .test').remove();
				Y.one('body').removeClass('bounce');
			});

			it("empty function", function() {
	            var dataAnijJS = 'if: click, do: bounce, to: body, before: beforeFunction',
	            	targetNode;

	            AniJS.getHelper().beforeFunction = function(){
	            	expect(true).toBeTruthy();
	            };

	            targetNode = Y.one('#testzone .test');

	            targetNode.setAttribute('data-anijs', dataAnijJS);

	            AniJS.run();

	            targetNode.on('click', function(e){
	                expect(Y.one('body').hasClass('bounce')).toBeFalsy();
	            },this, true);

	            targetNode.simulate("click");
			});

			//Se espera que no cree la funcion
			it("non registered function", function() {
	            var dataAnijJS = 'if: click, do: bounce, to: body, before: beforeNonRegistered',
	            	targetNode;

	            targetNode = Y.one('#testzone .test');

	            targetNode.setAttribute('data-anijs', dataAnijJS);

	            AniJS.run();

	            expect(AniJS.getHelper['beforeNonRegistered']).toBeFalsy();

	            targetNode.on('click', function(e){
					expect(Y.one('body').hasClass('bounce')).toBeTruthy();               
	            },this, true);

	            targetNode.simulate("click");
			});

			//Registered var with same function name
			it("registered var with same function name", function() {
	            var dataAnijJS = 'if: click, do: bounce, to: body, before: beforeVarSameName',
	            	targetNode;

	            targetNode = Y.one('#testzone .test');

	            targetNode.setAttribute('data-anijs', dataAnijJS);

	            AniJS.getHelper().beforeVarSameName = '23';

	            AniJS.run();

	            targetNode.on('click', function(e){
					expect(Y.one('body').hasClass('bounce')).toBeTruthy();               
	            },this, true);

	            targetNode.simulate("click");
			});
		});


	});








		// describe("when song has been paused", function() {
		// 	beforeEach(function() {
		// 		player.play(song);
		// 		player.pause();
		// 	});

		// 	it("should indicate that the song is currently paused", function() {
		// 		expect(player.isPlaying).toBeFalsy();

		// 		// demonstrates use of 'not' with a custom matcher
		// 		expect(player).not.toBePlaying(song);
		// 	});

		// 	it("should be possible to resume", function() {
		// 		player.resume();
		// 		expect(player.isPlaying).toBeTruthy();
		// 		expect(player.currentlyPlayingSong).toEqual(song);
		// 	});
		// });

		// // demonstrates use of spies to intercept and test method calls
		// it("tells the current song if the user has made it a favorite", function() {
		// 	spyOn(song, 'persistFavoriteStatus');

		// 	player.play(song);
		// 	player.makeFavorite();

		// 	expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
		// });

		// //demonstrates use of expected exceptions
		// describe("#resume", function() {
		// 	it("should throw an exception if song is already playing", function() {
		// 		player.play(song);
		// 		expect(function() {
		// 			player.resume();
		// 			}).toThrowError("song is already playing");
		// 		});
		// 	});
		// });
});




