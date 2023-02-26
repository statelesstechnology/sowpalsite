const sowpal = new Sowpal('', 'address data');

let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

// document.getElementById('dx').innerHTML = 'Screen Width X Height = ' + screenWidth + ' X ' + screenHeight;

// c:\Projects\sowpal\website\sowpal\assets\js\index.js (javascript)';

let MenuBtn = document.getElementById('HeadMenu');
let MobileMenuNav = document.getElementById('MobileMenuNavText');
let MobileMenu = MobileMenuNav.innerHTML;

console.log(sowpal.report);
const test = Object.getOwnPropertyDescriptor(Sowpal.prototype, 'report');
console.log(test.enumerable);
console.log(test.configurable);
sowpal.TestSowpal('address is lovely');

if (MobileMenu == 'Menu') {
    console.log('all conditions is mobile');
} else {
    console.log('all conditions is desktop');
}