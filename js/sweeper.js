var sweeper = (function() { // Module pattern
	
	// Private variables and methods
	
	
	
	
	return {
		// Public methods
		
		fieldToGrid: function(field){
			var rows = field.split(/\n/);
			twoDimArray = [];
			_(rows).each(function(row){
				var cells = []
				_(row).each(function(character){
					cells.push(character);
				});
				twoDimArray.push(cells);
			});
			return new Grid(twoDimArray);	
		},
		
		countMinedNeighbours: function(grid, x, y){
			var isMined = function(deltaX, deltaY) {
				var xPos = x + deltaX;
				var yPos = y + deltaY;
				if (grid.get(xPos, yPos) === "*") {
					return true;
				} else {
					return false;
				}
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
			var button = $("<span>?</span>");
			button.attr("class", "button");
			button.css("font-size", "300%").css("color", "orange");
			
			button.click(function() {
				button.html(cell);
				if (cell === "*") {
					button.css("color", "red");
					alert("BOOOM!");
				} else {
					button.css("color", "green");
				}
			});
			
			return button;
		},
		
		initGame: function(field){
			var grid = sweeper.fieldToGrid(field);
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
				".....*\n"+
				"*.....\n"+
				"......";
				
	sweeper.initGame(field);			


