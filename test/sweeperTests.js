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
	
	testMinedNeighbourcount: function(){
		var grid = new Grid([[".",".","*"],			
								["*",".","."],
								[".",".","."]]);
		var pos11MinedNeighbours = 2;
		var actualMinecount = sweeper.countMinedNeighbours(grid, 1, 1);
		assertEquals(pos11MinedNeighbours, actualMinecount);
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
	
	testbuttonCreation: function(){
		var btn = sweeper.createButton("*");
		assertEquals("?", btn.html());
		assertEquals("button", btn.attr("class"));
	},
	
	testGameInit: function(){
		var field = "..*\n"+
					"*..\n"+
					"...";
		sweeper.initGame(field);
		assertEquals(9, $(".button").length);			
	},

});
