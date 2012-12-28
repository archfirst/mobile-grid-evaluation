/*global positions:true, Slick:true */
(function ($, undefined) {
    'use strict';

    var grid, data, columns, options;

    data = positions || []; // get from ../data/positions.js
    // Compute position values
    $.each(positions, function (index, position) {
        position.marketValue = position.lastTrade * position.quantity;
        position.totalCost = position.pricePaid * position.quantity;
        position.gain = position.marketValue - position.totalCost;
        position.gainPercent = (position.gain / position.totalCost) * 100;
    });


    // Number Formatting functions
    function formatNumber(amount) {
        return $.format.number(amount, '#,##0.00');
    }
	
	/* Full List of Arguments(row, cell, value, columnDef, dataContext)*/
    function formatCurrency(row, cell, value) {
        return '$' + formatNumber(value);
    }
	
	/* Full List of Arguments(row, cell, value, columnDef, dataContext) */
    function formatGainMoney(row, cell, value) {
        var formattedValue = (value < 0) ?
                            formatNumber(-1 * value) :
                            formatNumber(value);

        if (value < 0) {
            return '<span class="negative">$(' + formattedValue + ')</span>';
        }

        return '$' + formattedValue;
    }
	
	/* Full List of Arguments(row, cell, value, columnDef, dataContext) */
    function formatGainPercent(row, cell, value) {
        var formattedValue = (value < 0) ?
                            formatNumber(-1 * value) :
                            formatNumber(value);
        if (value < 0) {
            return '<span class="negative">(' + formattedValue + '%)</span>';
        }
        return formattedValue + '%';
    }

    // Preparing the Columns
    columns = [
        {id: 'security', name: 'Security', field: 'security', width: 200, resizable: false, headerCssClass: 'left-align', minWidth: 300},
        {id: 'symbol', name: 'Symbol', field: 'symbol', cssClass: 'center-align', maxWidth: 80},
        {id: 'quantity', name: 'Quantity', field: 'quantity', cssClass: 'right-align',
		headerCssClass: 'right-align'},
        {id: 'last-trade', name: 'Last Trade', field: 'lastTrade', cssClass: 'right-align',
		headerCssClass: 'right-align',  formatter: formatCurrency},
        {id: 'market-value', name: 'Market Value', field: 'marketValue', cssClass: 'right-align',
		headerCssClass: 'right-align', formatter: formatCurrency},
        {id: 'price-paid', name: 'Price Paid', field: 'pricePaid', cssClass: 'right-align',
		headerCssClass: 'right-align', formatter: formatCurrency},
        {id: 'total-cost', name: 'Total Cost', field: 'totalCost', cssClass: 'right-align',
		headerCssClass: 'right-align', formatter: formatCurrency},
        {id: 'gain', name: 'Gain', field: 'gain', cssClass: 'positive right-align',
		headerCssClass: 'right-align', formatter: formatGainMoney},
        {id: 'gain-percent', name: 'Gain %', field: 'gainPercent', cssClass: 'positive right-align',
		headerCssClass: 'right-align', formatter: formatGainPercent}
    ];

    // Essential Options
    options = {
        enableCellNavigation: true,
        enableColumnReorder: false,
        autosizeColumns: true,
        forceFitColumns: true,
        rowHeight: 32
    };

    /* Preparing the Rows and Columns based on Window size
    These are calculated each time the window resizes */
    function getRowHeight() {
        var windowWidth, rowHeight;

        windowWidth = $(window).width();
        rowHeight = (windowWidth < 900) ? 44 : 32;
        return rowHeight;
    }

    function getColumns() {
        var windowWidth, newColumns, columnPriorities, maxPriority, i;

        windowWidth = $(window).width();
        newColumns = [];

        // Column priorities
        columnPriorities = [3, 1, 1, 1, 1, 2, 3, 3, 2];
        // Note: By default all columns will be shown
        maxPriority = 3;
        if (windowWidth < 500) {
            maxPriority = 1;
        } else if (windowWidth < 900) {
            maxPriority = 2;
        } else {
            maxPriority = 3;
        }

        for (i = 0; i < columns.length; i++) {
            if (columnPriorities[i] <= maxPriority) {
                newColumns.push(columns[i]);

            }
        }
        return newColumns;
    }

    /* Display window size on window resize */
    function displayWindowSize() {
        var win = $(window);
        $('.window-size').html('(' + win.width() + ', ' + win.height() + ')');
        //console.log(win.height());
    }


    function resizeGridContainer() {
        $('#positions-table').css('height', ($(window).height() - 132) + 'px');
    }

    /* Render table */
    function drawGrid() {
        var newColumns = getColumns();
        options.rowHeight = getRowHeight();
        resizeGridContainer();
        grid = new Slick.Grid('#positions-table', data, newColumns, options);
        grid.onClick.subscribe(function (e, args) {
            var rowName = data[args.row].security;
            //Display
            $('#selected-position').text(rowName);
        });
        //grid.resizeCanvas();
    }

    $(window).on('resize', function () {
        drawGrid();
        displayWindowSize();
    });

    $(function () {
        drawGrid();
        displayWindowSize();
    });

}(jQuery));