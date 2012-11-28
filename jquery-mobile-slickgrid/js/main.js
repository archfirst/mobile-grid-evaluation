(function($) {

    // Compute position values
    
    $.each(positions, function(index, position) {
        position.marketValue = position.lastTrade * position.quantity;
        position.totalCost = position.pricePaid * position.quantity;
        position.gain = position.marketValue - position.totalCost;
        position.gainPercent = (position.gain/position.totalCost) * 100;
    });
    
    var data = positions; // Imported from ../data/positions.js

    // Preparing the Columns
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
    
    // Essential Options
    var options = {
        enableCellNavigation: true,
        enableColumnReorder: false,
        autosizeColumns: true,
        forceFitColumns: true,
        rowHeight: 32
    };
    
    function getRowHeight () {
        var windowWidth = $(window).width();
        var rowHeight = ( windowWidth < 900) ? 44 : 32 ;
        return rowHeight;
    }
    
    function getColumns () {
        var windowWidth = $(window).width();
        var newColumns = [];
        
        /* Column priorities */
        var columnPriorities = [2, 1, 1, 1, 1, 2, 3, 3, 2];
        // By default all columns will be shown
        var maxPriority = 3;
        if (windowWidth < 500 ) {
            maxPriority = 1;
        }
        else if (windowWidth < 900 ) {
            maxPriority = 2;
        }
        else {
            maxPriority = 3;
        }

        for(var i = 0; i < columns.length; i++) {
            if (columnPriorities[i] <= maxPriority) {
             newColumns.push(columns[i]);
            }
        }
        //console.log(newColumns.length);

        return newColumns;
      }  

    // Display window size on resize events
    function displayWindowSize() {
        var win = $(this);
        $('.window-size').html("(" + win.width() + ", " + win.height() + ")");
        console.log(win.height());
    }
	function resizeGrid() {
        $("#positions-table").css("height",($(window).height()-132)+"px");
	}
    $(window).on("resize",function() {
        displayWindowSize();
        getColumns();
        drawGrid();
    });
	

    // Render table
    function drawGrid() {
        var newColumns = getColumns();
        options.rowHeight = getRowHeight();
        displayWindowSize();
		resizeGrid();
        grid = new Slick.Grid("#positions-table", data, newColumns, options);
		
		grid.onClick.subscribe(function(e, args) {
			var rowName = data[args["row"]]["security"] ;
			//console.log(data[args["row"]]["security"]);
			$("#selected-position").text(rowName);
		});
        //grid.resizeCanvas();
    }
	
    $(function () {
        drawGrid();
    });
    
})(jQuery);