class HashTable
    {
        constructor(){
            this.table  = new Array(100);
            this.size = 0

        }

        hash(key)
        {
            let hashValue = 0;
            key.split('').forEach((k,index)=>{
                hashValue += key.charCodeAt(index);
            })

            return hashValue % this.table.length

        }

        set(key,value)
        {
            const index = this.hash(key);
            if(this.table[index]){
            for (let i =0; i<this.table[index].length; i++ ){
                if(this.table[index][i][0]===key)
                {
                    this.table[index][i][1] = value;
                    return;
                }
                    
            }

            this.table[index].push([key,value])
            this.size++
            return
        
           }

           this.table[index] = [];
           this.table[index].push([key,value])

            
        }

        get(key)
        {
            const index = this.hash(key);
            if(this.table[index])
            {
                for(let i=0; i<this.table[index].length; i++)
                {
                    if(this.table[index][i][0]==key)
                    {
                        return this.table[index][i][1];
                    }
                }
            }
            return undefined;

        }

        remove(key)
        {
            const index = this.hash(key);
            let arr = this.table[index]
            if(arr)
            {
                for(let i=0; i<= arr.length; i++)
                {
                    if(arr[i][0]==key)
                    {
                        arr.splice(i,1)
                        this.size--;
                        this.table[index] = arr;
                        return true;

                    }
               
                }
               
            }
            return false;

        }

    }
