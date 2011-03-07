var sweeper = (function() { // Module pattern
	
	// Private variables and methods
	
	
	
	
	return {
		// Public methods
		
		
		fieldToGrid: function(field){
			var rows = field.split(/\n/);
			
			var twoDimArray = [];
			
			_(rows).each(function(row){
				var cells = [];
				_(row).each(function(ch){
					cells.push(ch)
				});
				twoDimArray.push(cells);
			});	

			return new Grid(twoDimArray);
			
		},
		
		countNeighbours: function(grid, x, y){
			var isMined = function(deltaX, deltaY) {
				var xPos = x+deltaX;
				var yPos = y+deltaY;
				if (grid.get(xPos, yPos) === "*") {
					return true;
				} else {
					return false;
				}
			};
			
			var minedNeighbours = 0;
			
			if (isMined(-1,-1)) {minedNeighbours++}
			if (isMined(0,-1)) {minedNeighbours++}
			if (isMined(1,-1)) {minedNeighbours++}
			
			if (isMined(-1,1)) {minedNeighbours++}
			if (isMined(0,1)) {minedNeighbours++}
			if (isMined(1,1)) {minedNeighbours++}
			
			if (isMined(-1,0)) {minedNeighbours++}
			if (isMined(1,0)) {minedNeighbours++}

			return minedNeighbours;
		},
		
		solve: function(grid){
			return grid.map(function(cell, x, y){
				if (cell === "*") {
					return cell;
				} else {
					return ""+sweeper.countNeighbours(grid, x, y);
				}
			});
		},
		
		createBtn: function(cell){
			var btn = $("<span>?</span>");
			btn.css("font-size", "300%").css("margin","10px").css("color", "orange");
			btn.click(function() {
				btn.html(cell);
				if (cell === "*") {
					btn.css("color", "red");
					alert("BOOOM!");
				} else {
					btn.css("color", "green");
				}
			});
			return btn;
		},
		
		play: function(field){
			var grid = this.fieldToGrid(field);
			var solvedGrid = this.solve(grid);
			solvedGrid.eachRow(function(row) {
				_(row).each(function(cell){
						var btn = sweeper.createBtn(cell);
						$("body").append(btn);
				});
				$("body").append("<br/>");
			});
		}
		
		
	};
})();


var field = "*.....\n"+
			"*....*\n"+
			".....*\n"+
			"*.....";
			
sweeper.play(field);



