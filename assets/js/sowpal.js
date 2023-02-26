'use strict';

class Sowpal {
    constructor(investor, report){
        this.investor = investor;
        this._report = report;
    }
    get investor() {
        return this._investor;
    }
    get report() {
        return this._report;
    }
    set investor(investor) {
        this._investor = investor;
    }
    set report(report) {
        this._report = report;
    }
    TestSowpal(address){
        
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;
        console.log("TestSowpal successfully initialized " + ": " + address);
    }
}