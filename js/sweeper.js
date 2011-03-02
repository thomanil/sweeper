var sweeper = {
	
	fieldStringIntoGrid : function(field){	
		var rows = field.split(/\n/);
		var twoDimArray = [];
		
		_(rows).each(function(rowString) {
			var cells = [];
			for (var i=0; i < rowString.length; i++) {
					cells.push(rowString[i]);
			}
			twoDimArray.push(cells);
		});
		
		var grid = Grid.wrap(twoDimArray);
		return grid;
	},
	
	countMinedNeighbours: function(grid, x, y){	
		var isMined = function(deltaX, deltaY) {
			var xPos = x + deltaX;
			var yPos = y + deltaY;
			var neighbour = grid.get(xPos, yPos);
			if (neighbour === "*") {
				return true;
			} else {
				return false;
			}
		};
	
		var minedNeighbours = 0;
	
		if (isMined(-1,-1)) {minedNeighbours ++;}
		if (isMined(0,-1)) {minedNeighbours ++;}
		if (isMined(1,-1)) {minedNeighbours ++;}
		
		if (isMined(-1,1)) {minedNeighbours ++;}
		if (isMined(0,1)) {minedNeighbours ++;}
		if (isMined(1,1)) {minedNeighbours ++;}
		
		if (isMined(-1,0)) {minedNeighbours ++;}
		if (isMined(1,0)) {minedNeighbours ++;}
	    		
		return minedNeighbours;
	},
	
	solve: function(grid){
		return grid.map(function(cell,x,y) {
			if (cell === "*") {
				return "*";
			} else {
				var count = sweeper.countMinedNeighbours(grid, x, y);
				return ""+count;
			}
		});
	},
	
	play: function(field){
		var grid = sweeper.fieldStringIntoGrid(field);
		var solved = sweeper.solve(grid);
		var btnId = 0;
		solved.eachRow(function(row) {
			$("body").append("<br>");
			_(row).each(function(element) {
				btnId += 1;
				$("body").append("<span id="+btnId+">?</>");
				var btn = $("#"+btnId);
				btn.click(function() {
					btn.html(element);
					if(element === "*"){
						btn.css("background-color","red");
						alert("BOOOOM!");
					} else {
						btn.css("background-color","white");
					}
				});
			});
		});
		
		$("span").css("font-size","500%").
				css("margin","5px").
				css("background-color","yellow");
	}
	
};

var field =	"....*.\n"+
			".*...*\n"+
			".....*\n"+
			".*...*\n"+
			"......";

sweeper.play(field);


