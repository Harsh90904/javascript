class emp {
    #id;
    #name;

    constructor(id , name){
        this.#id = id;
        this.#name = name;
        console.log(`id : ${this.getId}`);
        console.log(`name : ${this.getName}`);    

        console.log(`${this.getName} is hired`)
    }
    set setid(id){
        this.#id = id;
    }
    set setName(name){
        this.#name = name;
    }
    get getId(){
        return this.#id;
    }
    get getName(){
        return this.#name;
    }


}

let e = new emp(101 , "man")
e.setid = (102);
e.setName = "Aman";
console.log(`id :${e.getId}`);
console.log(`name : ${e.getName}`);