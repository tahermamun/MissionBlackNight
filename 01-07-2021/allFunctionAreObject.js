var Check = new Function(name, `
this.name = name
     this.getDetails = function () {
         console.log('my name is' + this.name);
    }
`)
var check2 = new Check('t')
console.log(check2)