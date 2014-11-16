var Show = {
	showNumberWithAnimation:function(randx,randy,randValue){
		var numberCell = $('#number-cell-' + randx + '-' + randy);
		numberCell.css({
			'background-color':Tool.getNumberBackgroundColor(randValue,proto),
			'color':Tool.getNumberColor(randValue,proto)
		})
		numberCell.animate({
			'width':'100px',
			'height':'100px',
			'top':Tool.getPos(randx,randy,'T'),
			'left':Tool.getPos(randx,randy,'L')
		},50);
		numberCell.text(randValue)
	}
}