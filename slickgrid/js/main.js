/* Main.JS */
(function ($) {
	 var grid;
	 var data = positions; /* retrieved from positions.js */
	  var columns = [
		{id: "security", name: "Security", field: "security", width: 200, resizable: false},
		{id: "symbol", name: "Symbol", field: "symbol"},
		{id: "quantity", name: "Quantity", field: "quantity"},
		{id: "last-trade", name: "Last Trade", field: "lastTrade" },
		{id: "market-value", name: "Market Value", field: "marketValue" },
		{id: "price-paid", name: "Price Paid", field: "pricePaid", cssClass: "positive"},
		{id: "total-cost", name: "Total Cost", field: "totalCost"},
		{id: "gain", name: "Gain", field: "gain", cssClass: "positive"},
		{id: "gain-percent", name: "Gain Percent", field: "gainPercent"}
	  ];

	  var options = {
		enableCellNavigation: true,
		enableColumnReorder: false,
		autosizeColumns: true,
		forceFitColumns: true,
		rowHeight: 32
	  };

	  function updateRowHeight () {
		var windowWidth = $(window).width();
		var rowHeight = ( windowWidth < 900) ? 44 : 32 ;
		
		return rowHeight;
	  }
	  
	  function updateColumnFields () {
		var windowWidth = $(window).width();
		var newColumns = [];
		
		/* column indexes */
		var security = 0,
			symbol = 1,
			quantity = 2,
			lastTrade = 3,
			marketValue = 4,
			pricePaid = 5,
			totalCost = 6,
			gain = 7,
			gainPercent = 8;
		
		 if (windowWidth < 500) {
			for(var i = 0; i < columns.length; i++) {
				switch (i) {
					case security:
					case pricePaid:
					case totalCost:
					case gain:
					case gainPercent: break;
					default: newColumns.push(columns[i]);
				}
			}
		} else if(windowWidth < 900 ) {
			for(var i = 0; i < columns.length; i++) {
				switch (i) {
					case totalCost:
					case gain: break;
					default: newColumns.push(columns[i]);
				}
			}							
			
		} else {
			newColumns = columns;
		}
		
		//console.log(newColumns.length);
		return newColumns;
	  }
	  
	  function drawGrid() {
		var newColumns = updateColumnFields();
		options.rowHeight = updateRowHeight();

		grid = new Slick.Grid("#positionsGrid", data, newColumns, options);
		//grid.resizeCanvas();
	  }

	  $(function () {
		drawGrid();
		$(window).resize(drawGrid);	
	  });
	
}(jQuery));	  
