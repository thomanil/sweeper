var sweeper = (function() { // Module pattern
	
	// Private variables and methods
	
	
	
	
	return {
		// Public methods
		
		fieldStringToGrid: function(field){
			var rows = field.split(/\n/);
			var twoDimArray = [];
			_(rows).each(function(row){
				var cells = [];
				_(row).each(function(ch){
					cells.push(ch);
				});
				twoDimArray.push(cells);
			});
			
			return new Grid(twoDimArray);
		},
		
		countMinedNeighbours: function(grid, x, y){
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
				if(cell === "*"){
					return cell;
				} else {
					return ""+sweeper.countMinedNeighbours(grid, x, y);
				}
			});
		},
		
		createButton: function(cell){
			var btn = $("<span>?</span>");
			btn.css("font-size","300%").css("color","orange");
			btn.click(function() {
				btn.html(cell);
				if (cell === "*") {
					btn.css("color","red");
					alert("booom!");
				} else {
					btn.css("color","green");
				}
			});
			return btn;
		},
		
		play: function(field){
			var grid = this.fieldStringToGrid(field);
			var solvedGrid = this.solve(grid);
			solvedGrid.eachRow(function(row) {
				_(row).each(function(cell){
					$("body").append(sweeper.createButton(cell));
				});
				$("body").append("<br/>");
			});
		},
		
	};
})();

var field =".....*\n"+
			"......\n"+
			"...*..\n"+
			"*.....";
			
sweeper.play(field);


