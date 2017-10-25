function NewObje(name) {
    this.name = name;
}

/*
NewObje.prototype.doLater = function() {
    var self = this;
    setTimeout(function() {
        console.log(self.name);
    }, 1000);
}
*/

NewObje.prototype.doLater = function() {
    setTimeout(() => {
        console.log(this.name);
    }, 1000);
}

var obj = new NewObje('Aditya');
obj.doLater();