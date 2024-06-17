class fizzbuzz {
    print(){
        for(let i=0;i<=100;i++){
            if( i % 3 == 0 && i % 5 == 0  ){
                console.log( i + " = FizzBuzz");
            }
            else if(i % 5 == 0){
                console.log( i +" = Buzz");
            }
            else if( i % 3 == 0) {
                console.log( i+ " = Fizz");
            }
            else{
                console.log(i);
            }
        }
    }
} 
let print = new fizzbuzz();

print.print();