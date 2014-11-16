var Tool = {
	getPos: function(i, j, type) {
		switch (type) {
			case "L":
				return 20 + j * 120;
				break;
			case "T":
				return 20 + i * 120;
				break;
		}
	},
	getRand: function(min, max) {
		return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
	},
	hasPlace: function(board, proto) {
		var i, j;
		for (i = 0; i < board.length; i++) {
			var temp = board[i]
			for (j = 0; j < temp.length; j++) {
				if (temp[j] == proto[0]) {
					return true;
				} else {
					return false;
				}
			}
		}
	},
	getRandValue: function(array) {
		var len = array.length;
		return array[this.getRand(0, len - 1)];
	},
	getNumberBackgroundColor: function(value, proto) {
		switch (value) {
			case proto[0]:
				return "#eee4da";
				break;
			case proto[1]:
				return "#ede0c8";
				break;
			case proto[2]:
				return "#f2b179";
				break;
			case proto[3]:
				return "#f59563";
				break;
			case proto[4]:
				return "#f67c5f";
				break;
			case proto[5]:
				return "#f65e3b";
				break;
			case proto[6]:
				return "#edcf72";
				break;
			case proto[7]:
				return "#edcc61";
				break;
			case proto[8]:
				return "#9c0";
				break;
			case proto[9]:
				return "#33b5e5";
				break;
			case proto[10]:
				return "#09c";
				break;
			case proto[11]:
				return "#a6c";
				break;
			case proto[12]:
				return "#93c";
				break;
		}
	},
	getNumberColor: function(value, proto) {
		if (value == proto[0])
			return "#776e65";
		return "white";
	}

}