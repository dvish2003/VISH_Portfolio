export default class CustomerModel{
    constructor(id,name,nic,contact,address) {
        this._id = id;
        this._name = name;
        this._nic = nic;
        this._contact = contact;
        this._address = address;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get nic() {
        return this._nic;
    }

    set nic(value) {
        this._nic = value;
    }

    get contact() {
        return this._contact;
    }

    set contact(value) {
        this._contact = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }
}