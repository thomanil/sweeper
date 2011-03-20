var sweeper = (function() { // Module pattern
	
	// Private variables and methods
	
	
	
	
	return {
		// Public methods
		
		toGrid: function(field){
			var fieldRows = field.split(/\n/);
			var twoDimArray = [];
			
			_(fieldRows).each(function(row){
				var cells = [];
				_(row).each(function(character){
					cells.push(character);
				});
				twoDimArray.push(cells);
			});

			return new Grid(twoDimArray);
		},


		countMinedNeighbours: function(grid, x, y){
			var isMined = function(deltaX, deltaY) {
				var xPos = x+deltaX;
				var yPos = y+deltaY;
				return (grid.get(xPos, yPos) === "*");
			};
			
			var minedNeighbours = 0;
			if (isMined(-1,-1)) {minedNeighbours++;}
			if (isMined(0,-1)) {minedNeighbours++;}
			if (isMined(1,-1)) {minedNeighbours++;}
			if (isMined(-1,1)) {minedNeighbours++;}
			if (isMined(0,1)) {minedNeighbours++;}
			if (isMined(1,1)) {minedNeighbours++;}
			if (isMined(-1,0)) {minedNeighbours++;}
			if (isMined(1,0)) {minedNeighbours++;}						
									
			return minedNeighbours;
		},
		
		solve: function(grid){
			return grid.map(function(cell, x, y) {
				if (cell === "*") {
					return cell;
				} else {
					return ""+sweeper.countMinedNeighbours(grid, x, y);
				}
			});
		},
		
		createButton: function(cell){
			var btn = $("<span class='button'>?</span>");
			btn.css("font-size","500%").css("color","orange");
			btn.click(function() {
				btn.html(cell);
				if (cell === "*") {
					btn.css("color","red");
					alert("BOOOM GAME OVER MAN!");
				} else {
					btn.css("color","green");
				}
			});
			return btn;
		},
		
		initGame: function(field){
			var grid = sweeper.toGrid(field);
			var solvedGrid = sweeper.solve(grid);
			solvedGrid.eachRow(function(row) {
				_(row).each(function(cell){
					var btn = sweeper.createButton(cell);
					$("body").append(btn);
				});
				$("body").append("<br>");
			});
		},
		
		
	};
})();


var field = ".....*\n"+
			"*....*\n"+
			"*..*..\n"+
			"*.....\n"+
			".*....";
			
sweeper.initGame(field);			
