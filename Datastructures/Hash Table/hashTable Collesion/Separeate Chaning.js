//separate chaning is a hash table collesion method that Each buket in the hash table is a linked list or a array and colletion are resolved by appending elements to the linked list or array at the correspponting index.


// Program

    // using array
class HashTableSeparateChaning {
         constructor(size) {
             this.size = size
             this.table = new Array(size).fill(null).map(()=>[]);
         }

         hash(key){
            let hashvalue = 0
            for( let val of key){
                hashvalue += key.charCodeAt(0);
            }
        return hashvalue % this.size 
        }
         
         insert(key, value){
             let index = this.hash(key)
             this.table[index].push({key , value})
         }


         search (key){
            const index= this.hash(key)
            for(const entry of this.table[index]){
                if(entry.key === key){
                    return entry
                }
            }
            return undefined
         }




        }

        let table = new HashTableSeparateChaning(50)
         
        table.insert("hi" , "hello")
        table.insert('hi' , 'irafn')

        console.log(table.search("hi"))
        console.log(table.search("hi"))



        /////////////////////////////

        // using linkedlist

class Node {
    constructor(key,value){
        this.key =key 
        this.value = value
        this.next = null
    }
}

class hash{
    constructor(size){
        this.table = new Array(size)
        this.size = size
        this.head = null
    }
    hashing(key){
        let total =0
        for(let i=0;i<key.length;i++){
            total+= key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key , value){
        let index = this.hashing(key)
        const node = new Node(key,value)
        if(!this.table[index]){
            this.table[index] = node
        }else{
            this.table[index].next = node
        }
    }

    get(key){
        let index = this.hashing(key)
        let curr = this.table[index]
        while(curr){
            if(curr.key === key){
                return console.log(curr.value);
            }
            curr = curr.next
        }
        return console.log("no search found");

    }

    remove(key){
        let index = this.hashing(key)
        let curr = this.table[index]
        let prev = null
        while(curr){
            if(curr.key === key){
                if(prev===null){
                    this.table[index] = curr.next
                }else{
                    prev.next = curr.next
                }
                return
            }
            prev = curr
            curr = curr.next

        }
        return console.log("no found");
    }

    print(){
        for(let i=0 ;i<this.table.length;i++){
            if(this.table[i]){
                let curr = this.table[i]
                let values=''
                while(curr){
                    values += ` ${curr.key}: ${curr.value}`
                    curr = curr.next
                }
                console.log(values);
            }
        }
    }


}


const list = new hash(5)

list.set('name' ,'irfan')
list.set('age',10)
list.print()
list.set('mane','fun')
list.print()
list.remove('mane')
list.print()





  // using array in another way


class hashtable{
    constructor(size){ 
        this.table = new Array(size)
        this.size = size
    }

    set(key , value){

        
        let item = this.hash(key)
       let bucket = this.table[item]

       if(!bucket){
        this.table[item] = [[key,value]]
       }else{
        let samekey = bucket.find(item => item[0] === key)
        if(samekey){
            samekey[1] = value
        }else{
            bucket.push([key,value])
        }
       
       }

    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    get(key){
        let item = this.hash(key)
        let bucket = this.table[item]
        if(bucket){
            let samekey = bucket.find(item => item[0] ===key)
            if(samekey) return console.log(samekey[1]);

        }
        return console.log("not found");
    }

    remove(key){
        let item = this.hash(key)

        let bucket = this.table[item]

        if(bucket){
            let samekey = bucket.find(item => item[0] ===key)
            this.table[item].splice(this.table[item].indexOf(samekey),1)
        }
    }

    print(){
        for(let i = 0 ;i<this.table.length;i++){
            if(this.table[i]){
                console.log(`${i} : ${this.table[i]}`);
            }
        }
    }
}


const list1 = new hashtable(5)

list1.set('name' ,'sharhan')
list1.set('age' , '18')
list1.print()
list1.set('mane' , 'check')
list1.print()
list1.remove('mane')
list1.print()