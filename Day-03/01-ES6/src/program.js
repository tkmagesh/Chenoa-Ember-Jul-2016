class Product{
   constructor(id, name, cost){
      this.id = id;
      this.name = name;
      this.cost = cost;
   }
}

let numbers = [10,20,30,40];
let total = numbers.reduce((n1,n2) => n1 + n2);