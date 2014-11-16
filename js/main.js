var board = new Array();
var score = 0;
var proto = ['0', '二', '四', '八', '十六'];
$(document).ready(function() {

	Boss.newgame();

})
var Boss = {
	newgame: function() {
		Boss.init();
		Boss.generateOneNumber();
		Boss.generateOneNumber();
	},
	init: function() {
		var i, j;
		for (i = 0; i < 4; i++) {
			for (j = 0; j < 4; j++) {
				var gridCell = $('#grid-cell-' + i + '-' + j);
				gridCell.css('top', Tool.getPos(i, j, "T"));
				gridCell.css('left', Tool.getPos(i, j, "L"))
			}
		}
		for (i = 0; i < 4; i++) {
			board[i] = new Array();
			for (j = 0; j < 4; j++) {
				board[i][j] = proto[0];
			}
		}
		Boss.updateBoardView();
	},
	updateBoardView: function() {
		$('.number-cell').remove();
		var i, j;
		for (i = 0; i < 4; i++) {
			for (j = 0; j < 4; j++) {
				var numberCell = $('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
				$('#grid-container').append(numberCell);
				if (board[i][j] == proto[0]) {
					numberCell.css({
						'width': '0',
						'height': '0',
						'top': Tool.getPos(i, j, 'T') + 50,
						'left': Tool.getPos(i, j, 'L') + 50,
					});
				} else {
					numberCell.css({
						'width': '100px',
						'height': '100px',
						'top': Tool.getPos(i, j, 'T'),
						'left': Tool.getPos(i, j, 'L'),
						'background-color': '#ede0c8',
						'color': '#fff'
					});
				}

			}

		}
	},
	generateOneNumber: function() {
		if (!Tool.hasPlace(board,proto[0])) {
			return;
		}
		var randx = Tool.getRand(0, 3);
		var randy = Tool.getRand(0, 3);
		var boardTemp = board;
		var placeTemp = new Array();
		var i, j;
		if (boardTemp[randx][randy] != proto[0]) {
			for (i = 0; i < boardTemp.length; i++) {
				var temp = boardTemp[i];
				for (j = 0; j < temp.length; j++) {
					if (temp[j] == proto[0]) {
						placeTemp.push(i + '' + j)
					}
				}
			}
			var valueRandPlace = Tool.getRandValue(placeTemp);
			randx = valueRandPlace.substring(0, 1);
			randy = valueRandPlace.substring(1, 2);
		}
		var randValue = Math.random() > 0.5 ? proto[1] : proto[2];
		board[randx][randy] = randValue;
		Show.showNumberWithAnimation(randx, randy, randValue);
		return true;
	}
};