/**
 * Created by Ayush on 12/16/2015.
 */


function Stock () {};
Stock.prototype. fetch = function() {
    var that = this;
    var url = 'http://localhost:8000/stocks/'+that.symbol;
    $.getJSON(url, function (data) {
        that.sharePrice = data.sharePrice;
    });
};