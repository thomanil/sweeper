TestCase("FirstTestcase", {
	
    testProjectNamespaceExists:function(){
	   assertTrue(sweeper !== undefined);
    },

	testTurnFieldIntoGrid: function(){
		var field = "..*\n"+
					"*..\n"+
					"...";
		var expected = new Grid([[".",".","*"],
							["*",".","."],
							[".",".","."]]);
		var actual = sweeper.toGrid(field);
		assertTrue(expected.equals(actual));
	},
	
	testNeighbourCount: function(){
		var grid = new Grid([[".",".","*"],
							["*",".","."],
							[".",".","."]]);
		
		assertEquals(2,sweeper.countNeighbours(grid,1,1));					
							
	},
	
	testSolveGrid: function(){
		var grid = new Grid([[".",".","*"],
							["*",".","."],
							[".",".","."]]);
							
		var solution = new Grid([["1","2","*"],
								["*","2","1"],
								["1","1","0"]]);					
		var actual = sweeper.solve(grid);
		assertTrue(solution.equals(actual));					
	},
	
	testCreateButton: function(){
		var btn = sweeper.createButton("*");
		assertEquals("?",btn.html());
		assertEquals("button",btn.attr("class"));
	}, 
	
	testGameSetup: function(){
		var field = "..*\n"+
					"*..\n"+
					"...";
		sweeper.initGame(field);
		assertEquals(9, $(".button").length);
	},

});
