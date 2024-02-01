class hashTable{
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total =0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
         return total % this.size
    }

    insert(key,value){
        let index = this.hash(key)
        this.table[index]= value
    }
    find(key){
        let index = this.hash(key)
        return this.table[index]
    }
}

let table = new hashTable(10)
table.insert(10,10)
table.insert("dfsd",'nnv')
table.find(10)
console.log(table.find("dfsd"));