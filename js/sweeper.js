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
				var xPos = deltaX+x;
				var yPos = deltaY+y;
				return (grid.get(xPos, yPos) === "*");
			}
			var mineCount = 0;
			
			if (isMined(-1,-1)) { mineCount++; }
			if (isMined(0,-1)) { mineCount++; }
			if (isMined(1,-1)) { mineCount++; }	
			if (isMined(-1,1)) { mineCount++; }
			if (isMined(0,1)) { mineCount++; }
			if (isMined(1,1)) { mineCount++; }	
			if (isMined(1,0)) { mineCount++; }	
			if (isMined(-1,0)) { mineCount++; }								
			
			return mineCount;
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
			btn.css("color","orange").css("font-size","500%");
			btn.click(function() {
				btn.html(cell);
				if (cell === "*") {
					btn.css("color","red");
					alert("GAME OVER MAN, GAMe OVER");
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
			"*.....\n"+
			"*..*..\n"+
			"*.....\n"+
			"....*.";
			
sweeper.initGame(field);
