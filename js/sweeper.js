var sweeper = (function() { // Module pattern
	
	// Private variables and methods
	
	
	
	
	return {
		// Public methods
		
		toGrid: function(field){
			var rows = field.split(/\n/);
			var twoDimArray = [];
			_(rows).each(function(row){
				var cells = [];
				_(row).each(function(character){
					cells.push(character);
				});
				twoDimArray.push(cells);
			});
			return new Grid(twoDimArray);
		},
		
		countNeighbours: function(grid, x, y){
			var isMined = function(deltaX, deltaY) {
				var xPos = x+deltaX;
				var yPos = y+deltaY;
				if (grid.get(xPos,yPos) === "*") {
					return true;
				} else {
					return false;
				}
			};
			
			var mineCount = 0;
			
			if (isMined(-1,-1)) {mineCount++;}
			if (isMined(0,-1)) {mineCount++;}
			if (isMined(1,-1)) {mineCount++;}
			if (isMined(-1,1)) {mineCount++;}
			if (isMined(0,1)) {mineCount++;}
			if (isMined(1,1)) {mineCount++;}
			if (isMined(-1,0)) {mineCount++;}
			if (isMined(1,0)) {mineCount++;}
			
			return mineCount; 
		},
		
		solve: function(grid){
			return grid.map(function(cell, x, y) {
				if (cell === "*") {
					return cell;
				} else {
					return ""+sweeper.countNeighbours(grid, x, y);
				}
			});
		},
		
		createButton: function(cell){
			var btn = $("<span class='button'>?</span>");
			btn.css("color","orange");
			btn.css("font-size","300%");
			btn.click(function() {
				btn.html(cell);
				if (cell === "*") {
					btn.css("color","red");
					alert("BOOOM GAME OVER!");
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
				$("body").append("<br>");
				_(row).each(function(cell){
					$("body").append(sweeper.createButton(cell));
				});
			});
		},
	};
})();



var field = ".....*\n"+
			"*.....\n"+
			"*...*.\n"+
			"*.....\n"+
			"......";
sweeper.initGame(field);
