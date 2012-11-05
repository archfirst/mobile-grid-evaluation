$(document).ready(function() {

    // Compute position values
    $.each(positions, function(index, position) {
        position.marketValue = position.lastTrade * position.quantity;
        position.totalCost = position.pricePaid * position.quantity;
        position.gain = position.marketValue - position.totalCost;
        position.gainPercent = (position.gain/position.totalCost) * 100;
    });

    // Render table
    $('#positions-table').jqGrid({
   	    colNames:['Security','Symbol', 'Quantity', 'Last Trade','Market Value','Price Paid','Total Cost','Gain','Gain %'],
   	    colModel:[
   		    {name:'security',index:'security', width:200},
   		    {name:'symbol',index:'symbol', width:50},
   		    {name:'quantity',index:'quantity', width:80},
   		    {name:'lastTrade',index:'lastTrade', width:80, align:"right"},
   		    {name:'marketValue',index:'marketValue', width:80, align:"right"},		
   		    {name:'pricePaid',index:'pricePaid', width:80,align:"right"},		
   		    {name:'totalCost',index:'totalCost', width:80, sortable:false},
   		    {name:'gain',index:'gain', width:80, sortable:false},		
   		    {name:'gainPercent',index:'gainPercent', width:80, sortable:false}		
   	    ],
        datatype: 'local',
        data: positions,
        rowNum: 10000 /* this is a hack to workaround jqGrid bug */
    });


    // Display window size on resize events
    function displayWindowSize() {
        var win = $(this);
        $('.window-size').html("(" + win.width() + ", " + win.height() + ")");
    }
    $(window).resize(displayWindowSize);

    // Show selection on click events
    $('#positions-table tbody tr').click(function() {
        var security = $(this).find('.security').html();
        $('#selected-position').html(security);
    });

    // Fit table on resize events
    var headerHeight = $('#positions-header').outerHeight(true);
    var postionsSectionPadding = 30;
    var selectionInfoHeight = $('#selected-position').outerHeight(true);
    var layoutInfoHeight = $('.layout-info').outerHeight(true);
    var fudgeFactor = 25; // don't know why this is needed!
    var fixedSectionsHeight =
        headerHeight + postionsSectionPadding + selectionInfoHeight + layoutInfoHeight + fudgeFactor;


    function fitTable() {
        var winWidth = $(this).width();
        var winHeight = $(this).height();
        $('#positions-table').setGridWidth(winWidth - 35, true);
        $('#positions-table').setGridHeight(winHeight - fixedSectionsHeight);
    }
    $(window).resize(fitTable);

    // Perform initial setup
    displayWindowSize();
    fitTable();
});