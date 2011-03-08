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
						
		var actual = sweeper.fieldToGrid(field);
		assertTrue(expected.equals(actual));				
	},

	testCountNeighbourMines: function(){
		var grid = new Grid([[".",".","*"],	
							["*",".","."],	
							[".",".","."]]);
	
		assertEquals(2,sweeper.countMinedNeighbours(grid, 1,1));
		
	},

	testSolveAField: function(){
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
		var button = sweeper.createButton("*");
		assertEquals(button.html(),"?");
		assertEquals(button.attr("class"), "button");
	},
	
	testCreatePlayFieldInDOM: function(){
			var field = "..*\n"+
						"*..\n"+
						"...";
		
			sweeper.initGame(field);
			
			var btnsCreated = $(".button");
			assertEquals(9,btnsCreated.length);
	}


});
