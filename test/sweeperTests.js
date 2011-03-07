TestCase("FirstTestcase", {
	
    testProjectNamespaceExists:function(){
	   assertTrue(sweeper !== undefined);
    },

	testFieldStringIntoGrid: function(){
		var field = "*..\n"+
					"..*\n"+
					"...";

		var expected = new Grid([["*", ".", "."],
						[".", ".", "*"],
						[".", ".", "."]]);
						
		var actual = sweeper.fieldToGrid(field);
						
	    assertTrue(expected.equals(actual));
	},
	
	testCountNeighbours: function(){
			var grid = new Grid([["*", ".", "."],
							[".", ".", "*"],
							[".", ".", "."]]);
							
			var expected11cellNeighbourcount = 2;
			
			assertEquals(expected11cellNeighbourcount, sweeper.countNeighbours(grid, 1, 1));					
	},
	
	testSolveField: function(){
		var grid = new Grid([["*", ".", "."],
							[".", ".", "*"],
							[".", ".", "."]]);
							
		var expected = new Grid([["*", "2", "1"],
								["1", "2", "*"],
								["0", "1", "1"]]);					
				
																
		var actual = sweeper.solve(grid);
		
		assertEquals(expected, actual);												
	},
	
	testButtonCreation: function(){
		    var btn = sweeper.createBtn("*");
			assertEquals("?", btn.html());
	}
	

	
	

});
