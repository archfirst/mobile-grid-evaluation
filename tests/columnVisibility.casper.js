//USAGE: casperjs.bat dataTablesMobileGrid.casper.js http://www.example.com

var casper = require('casper').create();
var viewports = [
    { 'name': 'Wide', 'size': {width: 1400, height: 900}},
    { 'name': 'Medium', 'size': {width: 768, height: 980}},
    { 'name': 'Narrow', 'size': {width: 320, height: 568}}
];
var url = casper.cli.args[0];

casper.start().each(viewports, function(casper, viewport) {
    this.then(function() {
        this.viewport(viewport.size.width, viewport.size.height);
    });
    this.thenOpen(url, function() {
        if(viewport.size.width>=900) {
            this.test.assert(this.visible('th.security'), "Security heading is visible at >900px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assert(this.visible('th.symbol'), "Symbol heading is visible at >900px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assert(this.visible('th.quantity'), "Quantity heading is visible at >900px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assert(this.visible('th.last-trade'), "Last Trade heading is visible at >900px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assert(this.visible('th.market-value'), "Market Value heading is visible at >900px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assert(this.visible('th.price-paid'), "Price Paid heading is visible at >900px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assert(this.visible('th.total-cost'), "Total Cost heading is visible at >900px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assert(this.visible('th.gain'), "Gain heading is visible at >900px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assert(this.visible('th.gain-percent'), "Gain percent heading is visible at >900px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
        }
        else if(viewport.size.width<900 && viewport.size.width>=500) {
            this.test.assertNot(this.visible('th.security'), "Security heading is not visible at <900px & >500px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assert(this.visible('th.symbol'), "Symbol heading is visible at <900px & >500px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assert(this.visible('th.quantity'), "Quantity heading is visible at <900px & >500px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assert(this.visible('th.last-trade'), "Last Trade heading is visible at <900px & >500px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assert(this.visible('th.market-value'), "Market Value heading is visible at <900px & >500px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assert(this.visible('th.price-paid'), "Price Paid heading is visible at <900px & >500px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assertNot(this.visible('th.total-cost'), "Total Cost heading is not visible at <900px & >500px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assertNot(this.visible('th.gain'), "Gain heading is not visible at <900px & >500px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assert(this.visible('th.gain-percent'), "Gain percent heading is visible at <900px & >500px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
        }
        else if(viewport.size.width<500) {
            this.test.assertNot(this.visible('th.security'), "Security heading is not visible at <500px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assert(this.visible('th.symbol'), "Symbol heading is visible at <500px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assert(this.visible('th.quantity'), "Quantity heading is visible at <500px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assert(this.visible('th.last-trade'), "Last Trade heading is visible at <500px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assert(this.visible('th.market-value'), "Market Value heading is visible at <500px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assertNot(this.visible('th.price-paid'), "Price Paid heading is not visible at <500px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assertNot(this.visible('th.total-cost'), "Total Cost heading is not visible at <500px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assertNot(this.visible('th.gain'), "Gain heading is not visible at <500px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
            this.test.assertNot(this.visible('th.gain-percent'), "Gain percent heading is not visible at <500px wide" + " (" + viewport.name + ": " + viewport.size.width + "x" + viewport.size.height + ")");
        }
    }); 
});

casper.run(function() {
    this.test.done();
    this.test.renderResults(true);
});