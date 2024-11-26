export default class OrderModel {
    constructor(orderID,CustomerNIC,ItemName,Price,Qty,Total) {
        this._orderID = orderID;
        this._CustomerNIC = CustomerNIC;
        this._ItemName = ItemName;
        this._Price = Price;
        this._Qty = Qty;
        this._Total = Total;

    }

    get orderID() {
        return this._orderID;
    }

    set orderID(value) {
        this._orderID = value;
    }

    get CustomerNIC() {
        return this._CustomerNIC;
    }

    set CustomerNIC(value) {
        this._CustomerNIC = value;
    }

    get ItemName() {
        return this._ItemName;
    }

    set ItemName(value) {
        this._ItemName = value;
    }

    get Price() {
        return this._Price;
    }

    set Price(value) {
        this._Price = value;
    }

    get Qty() {
        return this._Qty;
    }

    set Qty(value) {
        this._Qty = value;
    }

    get Total() {
        return this._Total;
    }

    set Total(value) {
        this._Total = value;
    }
}