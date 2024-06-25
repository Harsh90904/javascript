class student1 {
    #name; 
    #roll_number;

    constructor(name , roll){
        this.#name = name;
        this.#roll_number = roll;
    }

    set setn(name){
        this.#name = name;
    }
    get getn(){
        return this.#name;
    }
    set setr(roll){
        this.#roll_number = roll;
    }
    get getr(){
        return this.#roll_number;
    }
}
class student2 extends student1 {
    #name; 
    #roll_number;

    constructor(name , roll ,n , r){
        super(name, roll);
        this.#name = n;
        this.#roll_number = r;
    }

    set setn(n){
        this.#name = n;
    }
    get getn(){
        return this.#name;
    }
    set setr(r){
        this.#roll_number = r;
    }
    get getr(){
        return this.#roll_number;
    }
    printstu(){
        console.log(`Student Name  : ${super.getn}`);
        console.log(`Student Roll  : ${super.getr}`);
        console.log(`Student Name : ${this.getn}`);
        console.log(`Student Roll : ${this.getr}`);
    }
}

let stu = new student2("harsh" , 1 , "manish" , 2);

stu.printstu();
