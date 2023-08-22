var Customer = function (name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
};

const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
  { name: "Nguyễn Văn Minh Anh Anh Anh Anh D", age: 8, address: "Phu Tho" },
];

function createCustomers(customers) {
  var result = [];
  for (var value of customers) {
    var customer = new Customer(value.name, value.age, value.address);
    var temp = value.name.split(" ");
    temp.splice(1, temp.length - 2);
    customer.shortName = temp.join(" ");
    result.push(customer);
  }
  result.sort(function (next, prev) {
    return next.age - prev.age;
  });
  return result;
}

const result = createCustomers(customers);

console.log(result);
