// 字典 Dirctionary

class Dirctionary {
    constructor(){
        this.items = new Map();
    }
    set(key,value){
        this.items.set(key,value);
    }
    get(key){
        return this.items.get(key);
    }
    remove(key){
        this.items.delete(key);
    }
    has(key){
        return this.items.has(key);
    }
    size(){
        return this.items.size();
    }
    clear(){
        this.items = new Map();
    }
    values(){
        const arr = []
        for(let key of this.items.keys()){
          arr.push(this.items.get(key));
        }
        return arr;
    }

}
