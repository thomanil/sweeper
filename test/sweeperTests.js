TestCase("FirstTestcase", {
	
    testProjectNamespace:function(){
	   assertTrue("Checking that project namespace exists", sweeper !== undefined);
    },

	testTurnFielStringIntoGrid: function(attribute){
		var field =	".*.\n"+
					"..*\n"+
					"...";
		var expected = Grid.wrap([[".","*","."],			
					   			  [".",".","*"],
					   			  [".",".","."]]);
		var actual = sweeper.fieldStringIntoGrid(field);			
		assertTrue(expected.equals(actual));			
	},
	
	testNeighbourcount: function(){
			var grid = Grid.wrap([[".","*","."],			
						 		  [".",".","*"],
						 		  [".",".","."]]);
		    var expected = 2;
			var actual = sweeper.countMinedNeighbours(grid, 1, 1);
			assertEquals(expected,actual);
	},
	
   testSolveField: function(){
   	 	var grid = Grid.wrap([[".","*"],			
					 		  [".","."],
					 		  ["*","."]]);
		var expected = Grid.wrap([["1","*"],			
					 	      	  ["2","2"],
							  	  ["*","1"]]);
        var actual = sweeper.solve(grid);	
		assertTrue(expected.equals(actual));		
   }
	

});
