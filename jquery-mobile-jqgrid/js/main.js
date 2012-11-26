$(document).ready(function() {

    // Compute position values
    $.each(positions, function(index, position) {
        position.marketValue = position.lastTrade * position.quantity;
        position.totalCost = position.pricePaid * position.quantity;
        position.gain = position.marketValue - position.totalCost;
        position.gainPercent = (position.gain/position.totalCost) * 100;
    });

    // Render table
    var grid = $('#positions-table').jqGrid({
    	"hoverrows":true,
		"viewrecords":true,		
		"gridview":false,
		"loadonce":true,		
		"scroll":1,				
		"rowNum":20,				
		"height":400,
   	    "colNames":['Security','Symbol', 'Quantity', 'Last Trade','Market Value','Price Paid','Total Cost','Gain','Gain %'],   	    
   	    "colModel":[
   		    {name:'security',index:'security', width:327},
   		    {name:'symbol',index:'symbol', width:82,classes:"notimp"},
   		    {name:'quantity',index:'quantity', width:131,formatter:'integer',classes:"notimp number"},
   		    {name:'lastTrade',index:'lastTrade', width:131, align:"right",formatter:'currency',formatoptions:{prefix: "$"},classes:"notimp currency"},
   		    {name:'marketValue',index:'marketValue', width:131, align:"right",formatter:'currency',formatoptions:{prefix: "$"},classes:"currency"},		
   		    {name:'pricePaid',index:'pricePaid', width:131,align:"right",formatter:'currency',formatoptions:{prefix: "$"},classes:"notimp currency"},		
   		    {name:'totalCost',index:'totalCost', width:131, sortable:false,formatter:'currency',formatoptions:{prefix: "$"},classes:"notimp currency"},
   		    {name:'gain',index:'gain', width:131, sortable:false,formatter:'currency',formatoptions:{prefix: "$"},classes:"positive currency"},		
   		    {name:'gainPercent',index:'gainPercent', width:131, sortable:false,formatter:'number',classes:"positive number"}		
   	    ],   	   
        "datatype": 'local',
        "data": positions,
        "rowNum": 10000, /* this is a hack to workaround jqGrid bug */
        onSelectRow: function(id){ 
        		    		 $('#selected-position').html($('tr#'+id+' td:first-child').html());
   						},
   		afterInsertRow:function(rowid,rowdata,rowelem) {
   			if(rowdata['gain'] < 0) {
   				$('#'+rowid+' td:nth-child(8)').addClass('negative');   				
   			}
   			if(rowdata['gainPercent'] < 0) {
   				$('#'+rowid+' td:nth-child(9)').addClass('negative');   				
   			}
   		}				      
    });

	
    // Display window size on resize events
    function displayWindowSize() {
        var win = $(this);
        $('.window-size').html("(" + win.width() + ", " + win.height() + ")");
       resizeGrid();
    }
    $(window).resize(displayWindowSize);

    // Show selection on click events
     // Fit table on resize events
    var headerHeight = $('#positions-header').outerHeight(true);
    var postionsSectionPadding = 30;
    var selectionInfoHeight = $('#selected-position').outerHeight(true);
    var layoutInfoHeight = $('.layout-info').outerHeight(true);
    var fudgeFactor = 25; // don't know why this is needed!
    var fixedSectionsHeight =
        headerHeight + postionsSectionPadding + selectionInfoHeight + layoutInfoHeight + fudgeFactor;
        
	function resizeGrid(){
		 var win = $(this);
		if(win.width() <= 500) 
        	grid.hideCol(['security','lastTrade','marketValue','pricePaid','gain']);
        else {
        	if(win.width() <= 900) {
        		grid.showCol(['security','lastTrade','marketValue','pricePaid','gain']);
        		grid.hideCol(['security','lastTrade','marketValue']);
        	} else {
        		grid.showCol(['security','lastTrade','marketValue','pricePaid','gain']);
        	}
        }
        grid.setGridWidth(win.width() - 10);
        grid.setGridHeight(win.height() - fixedSectionsHeight);
	}

    function fitTable() {
        var winWidth = $(this).width();
        var winHeight = $(this).height();
        // resize the grid.
        resizeGrid();
    }
    $(window).resize(fitTable);

    // Perform initial setup
    displayWindowSize();
    
});