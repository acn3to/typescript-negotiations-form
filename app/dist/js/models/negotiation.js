import { Printable } from '../utils/printable.js';
export class Negotiation extends Printable {
    constructor(_date, amount, value) {
        super();
        this._date = _date;
        this.amount = amount;
        this.value = value;
    }
    static createFrom(dateString, amountString, valueString) {
        const re = /-/g;
        const date = new Date(dateString.replace(re, ','));
        const amount = parseInt(amountString);
        const value = parseFloat(valueString);
        return new Negotiation(date, amount, value);
    }
    get volume() {
        return this.amount * this.value;
    }
    get date() {
        return new Date(this._date.getTime());
    }
    toText() {
        return `
    Date: ${this.date},
    Amount: ${this.amount},
    Value: ${this.value}`;
    }
}
