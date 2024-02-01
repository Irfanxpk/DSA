// double hashing



class Node{
    constructor(key,value){
        this.key = key
        this.value = value
        this.next = null
    }
}


class hash{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    
    hashing2(key){
        let prime = 7

        return prime - (prime % key.length)
    }
    hashing(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total+= key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.hashing(key) 
        let index2 = this.hashing2(key)
        if(!this.table[index]){
            this.table[index]  = [key,value]
        }else{
            
            let attempt = 1
            while(this.table[index]!== undefined && this.table[index][0] !== key){
                index = (index+ attempt *index2) % this.size
                attempt++
                if(attempt=== this.size){
                    return console.log("the table is full");
                }
            }
            this.table[index] = [key,value]
        }

    }

    get(key){
        let index = this.hashing(key)
        let index2 = this.hashing2(key)
        if(this.table[index][0]===key){
            return console.log(`${this.table[index][0]} : ${this.table[index][1]}`);
        }else{
            let attempt = 0

            while(this.table[index]){
                if(this.table[index][0] === key){
                    return console.log(`${this.table[index][0]} : ${this.table[index][1]}`);
                }

                index = (index+ attempt* index2) % this.size
                attempt++
                if(attempt === this.size){
                    break;
                }
            }
            return console.log("no key found");
        }
       
            
        

        
    }

    remove(key){
        let index = this.hashing(key)
        let index2 = this.hashing2(key)
        const item = this.table[index]
        if(this.table[index][0]=== key){
            this.table[index] = undefined
            return console.log(`${item[0]} : ${this.table[1]} is removed`);
        }else{
           let attempt  = 0 
           while(this.table[index]){
            if(this.table[index][0]===key){
                let item = this.table[index]
                this.table[index] = undefined
                return console.log(`${item[0]} : ${this.table[1]} is removed`);

            }

            index = (index+attempt*index2) % this.size
            attempt++

            if(attempt === this.size){
                break
            }
           }
           
           return console.log("not found");

        }

    }

    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(`${i} => ${this.table[i][0]} : ${this.table[i][1]}`);            
            }
        }
    }
}


const list = new hash(5)
list.set('name','sharhan')
list.set('age','20')
list.set('mane','shahla')
list.print()
list.get('mane')
list.remove('name')
list.print()