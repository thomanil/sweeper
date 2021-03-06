TestCase("FirstTestcase", {
	
    testProjectNamespaceExists:function(){
	   assertTrue(sweeper !== undefined);
    },

	testFieldToGrid: function(){
		var field = "..*\n"+
					"*..\n"+
					"...";
		
		var expected = new Grid([[".",".","*"],
								["*",".","."],
								[".",".","."]]);
		var actual = sweeper.toGrid(field);
		assertTrue(expected.equals(actual));			
	},
	
	testCountNeighbourMines: function(){
		var grid = new Grid([[".",".","*"],
							["*",".","."],
							[".",".","."]]);
		var expectedMinesAround	= 2;
		var actualCount = sweeper.countMinedNeighbours(grid,1,1);
		assertEquals(expectedMinesAround,actualCount);				
	},
	
	testSolveGrid: function(){
		var grid = new Grid([[".",".","*"],
							["*",".","."],
							[".",".","."]]);
		var expected = new Grid([["1","2","*"],
							["*","2","1"],
							["1","1","0"]]);
		var actual = sweeper.solve(grid);
		assertTrue(expected.equals(actual));												
	},
	
	testCreateButton: function(){
		var btn = sweeper.createButton("*");
		assertEquals("?",btn.html());
		assertEquals("button",btn.attr("class"));
	},
	
	testGameInit: function(){
		var field = "..*\n"+
					"*..\n"+
					"...";
	    sweeper.initGame(field);
		var expectedNoCreatedButtons = 9;
		var actualButtons = $(".button").length;
		assertEquals(expectedNoCreatedButtons,actualButtons);
	},

});
