$(document).ready(function() {

    // Register Handlebar helpers
    Handlebars.registerHelper('formatMoney', function(amount) {
        return (amount >= 0) ?
            '$' + $.format.number(amount, '#,##0.00') :
            '($' + $.format.number(-amount, '#,##0.00') + ')';
    });

    Handlebars.registerHelper('formatPercent', function(percent) {
        return (percent >= 0) ?
            $.format.number(percent, '#,##0.00') + '%' :
            '(' + $.format.number(-percent, '#,##0.00') + '%)';
    });

    Handlebars.registerHelper('getSign', function(number) {
        return (number >= 0) ? 'positive' : 'negative';
    });

    // Compile handlebar template
    var src = $('#positionTemplate').html();
    var template = Handlebars.compile(src);

    // Compute position values
    $.each(positions, function(index, position) {
        position.marketValue = position.lastTrade * position.quantity;
        position.totalCost = position.pricePaid * position.quantity;
        position.gain = position.marketValue - position.totalCost;
        position.gainPercent = (position.gain/position.totalCost) * 100;
    });

    // Render table
    var table = $('#positions-table tbody');
    $.each(positions, function(index, position) {
        table.append(template(position));
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
    var postionsSectionPaddingTop = 15;
    var selectionInfoHeight = $('#selected-position').outerHeight(true);
    var layoutInfoHeight = $('.layout-info').outerHeight(true);
    var fixedSectionsHeight = headerHeight + postionsSectionPaddingTop + selectionInfoHeight + layoutInfoHeight;

    // Setup iScroll
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    var myScroll = new iScroll('positions-table-wrapper');

    // Fit table when window resizes
    function fitTable() {
        var winHeight = $(this).height();
        $('#positions-table-wrapper').height(winHeight - fixedSectionsHeight);
        setTimeout(function() {
            myScroll.refresh();
        }, 0);
    };
    $(window).resize(fitTable);

    // Perform initial setup
    displayWindowSize();
    fitTable();
});