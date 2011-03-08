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

	testCountNeighbours: function(){
			var grid = new Grid([[".",".","*"],
								["*",".","."],
								[".",".","."]]);

		var pos11Neighbours = 2;
		assertEquals(pos11Neighbours,sweeper.countMinedNeighbours(grid, 1, 1));
	
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
	
	testPlayfieldSetup: function(){
		var field = "..*\n"+
		"*..\n"+
		"...";
		
		sweeper.setupPlayfield(field);
		var buttonsCreated = $(".button").length;
		assertEquals(9,buttonsCreated);
	},

});
