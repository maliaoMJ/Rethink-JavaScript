// 散列表

var loseloseHashCode = function (key) {
    var hash = 0;                          
    for (var i = 0; i < key.length; i++) { 
        hash += key.charCodeAt(i);         
    }
    return hash % 37; 
};
function HashTable() {
    var table = [];

    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        console.log(position + ' - ' + key);
        table[position] = value; 
    };
    this.get = function (key) {
        return table[loseloseHashCode(key)];
    };
    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined;
    };
}
var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
// 19 - Gandalf
// 29 - John
// 16 - Tyrion