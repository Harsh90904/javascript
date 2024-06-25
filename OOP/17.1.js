class car{
    name;
    engine;
    modal;

    setdata(name,engine,modal){
        this.name = name;
        this.engine = engine;
        this.modal = modal;
    }
    getdata(){
        console.log("CAR Name :" + this.name);
        console.log("CAR engine :" +this.engine);
        console.log("CAR MODAL :" +this.modal);
    }
}
let BMW = new car();


BMW.setdata("BMW" , "M42 DOHC" , "BMW X5");
BMW.getdata();