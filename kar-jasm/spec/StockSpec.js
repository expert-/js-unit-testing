/**
 * Created by Ayush on 12/20/2015.
 */
describe("when fetched", function() {
    var stock;
    beforeEach(function() {
        stock = new Stock();
        stock.fetch();
    });
    it("should update its share price", function() {
        expect(stock.sharePrice).toEqual(23.67);
    });
});
