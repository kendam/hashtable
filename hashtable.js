const obj = new Object()
obj.name ="kenny";
obj.title = "prof";

Object.keys(obj).forEach((k,i,arr)=>{
    console.log(k,i,arr)
})

//obj.set("title","prof");
console.log(obj.hasOwnProperty("name"))



const myMap = new Map()
myMap.set("name", "Kenny")
myMap.set("a","value")
myMap.set("b","value2")




console.log(myMap.size)
console.log(myMap.hasOwnProperty("c"))

for (let [key,value] of myMap)
{
    

    console.log(`the value for ${key} is ${value}`)
}

class HashTable {
 constructor()
 {
     this.name = "kenny"
     this.prof = "Engineer"
     this.table = new Array(100)
     this.size = 0;
 }

 hash(key){
     let hashValue = 0
     key.split('').forEach((k,i)=>{
         hashValue += key.charCodeAt(i)
     })
     console.log(hashValue);
 return hashValue % this.table.length;
 }

 set(key,value)
 {
     const index = this.hash(key)
     this.table[index]= [key,value];
     this.size++;
 }

 get(key)
 {
    const index = this.hash(key)
    return this.table[index]
 }

 remove(key)
 {
    const index = this.hash(key)
    if(this.table[index])
    {
        this.table[index] = [];
        this.size--;
        return true
    }
    else 
    {
        return false;
    }
    
  
 }

}

const myHashTable = new HashTable() 
myHashTable.set("name","Lukman")
myHashTable.set("location", "Nigeria")
//myHashTable.set("name","Yahya")


console.log(myHashTable)

let stringTest = "sul";
console.log(myHashTable.hash(stringTest)  )
console.log(myHashTable.table.length)

/*
collision
set(key, value) {
  const index = this._hash(key);
  if (this.table[index]) {
    for (let i = 0; i < this.table[index].length; i++) {
      // Find the key/value pair in the chain
      if (this.table[index][i][0] === key) {
        this.table[index][i][1] = value;
        return;
      }
    }
    // not found, push a new key/value pair
    this.table[index].push([key, value]);
  } else {
    this.table[index] = [];
    this.table[index].push([key, value]);
  }
  this.size++;
}


get(key) {
  const target = this._hash(key);
  if (this.table[target]) {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[target][i][0] === key) {
        return this.table[target][i][1];
      }
    }
  }
  return undefined;
}
*/
