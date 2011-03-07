TestCase("FirstTestcase", {
	
    testProjectNamespaceExists:function(){
	   assertTrue(sweeper !== undefined);
    },


	testTurnFieldStringIntoGrid: function(){
		var field ="..*\n"+
		"...\n"+
		"*..";

		var expected = new Grid([[".",".","*"],
								[".",".","."],
								["*",".","."]]);
		
		var actual = sweeper.fieldStringToGrid(field);
		assertTrue(expected.equals(actual));
	},					
	
	testMinecount: function(){
		var grid = new Grid([[".",".","*"],
							 [".",".","."],
							 ["*",".","."]]);

		assertEquals(2, sweeper.countMinedNeighbours(grid, 1, 1));				
	},
	
	testSolveField: function(){
		var grid = new Grid([[".",".","*"],
							 [".",".","."],
							 ["*",".","."]]);
							
		var soluton = new Grid([["0","1","*"],
							   ["1","2","1"],
							   ["*","1","0"]]);		
										
		assertEquals(soluton, sweeper.solve(grid));					
	},
	
	testButtonCreation: function(){
		var btn = sweeper.createButton("*");
		assertEquals("?", btn.html());
	},

});
