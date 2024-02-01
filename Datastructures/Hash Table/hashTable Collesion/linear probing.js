// linear and qudrratic 

class HashTableLinearProbing {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    // Hash function
    hashing(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    // Linear probing
    linear(index, attempt) {
        return (index + 1) % this.size;
    }

    // Insert a key-value pair into the hash table
    set(key, value) {
        let index = this.hashing(key);
        let attempt = 0;

        while (this.table[index] !== undefined && this.table[index][0] !== key) {
            // Linear probing to find the next available slot
            index = this.linear(index, attempt);
            attempt++;

            if (attempt === this.size) {
                console.log("Hash table is full. Unable to insert.");
                return;
            }
        }

        this.table[index] = [key, value];
    }

    // Retrieve the value associated with a key
    get(key) {
        let index = this.hashing(key);
        let attempt = 0;
    
        while (this.table[index] !== undefined) {
            if (this.table[index][0] === key && this.table[index][1] !== null) {
                return this.table[index][1]; // Return the value associated with the key
            }
    
            // Linear probing to find the key
            index = this.linear(index, attempt);
            attempt++;
    
            if (attempt === this.size) {
                console.log("Key not found.");
                return;
            }
        }
    
        console.log("Key not found.");
    }
    
    linear(index, attempt) {
        return (index + attempt) % this.size;
    }
    

    // Remove a key-value pair from the hash table
    remove(key) {
        let index = this.hashing(key);
        let attempt = 0;

        while (this.table[index] !== undefined) {
            if (this.table[index][0] === key) {
                this.table[index] = undefined;
                console.log("Key removed.");
                return;
            }

            // Linear probing to find the key
            index = this.linear(index, attempt);
            attempt++;

            if (attempt === this.size) {
                console.log("Key not found.");
                return;
            }
        }

        console.log("Key not found.");
    }

    // Print the contents of the hash table
    print() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i] !== undefined) {
                console.log(`${i}: ${this.table[i][0]} -> ${this.table[i][1]}`);
            } else {
                console.log(`000`);
            }
        }
    }
}

// Example usage:
const hashTable = new HashTableLinearProbing(5);

hashTable.set('name', 'sharhan');
hashTable.set('age', '18');
hashTable.set('mane', 'shahla');

hashTable.print();

hashTable.remove('name')
hashTable.print();
hashTable.get('mane')