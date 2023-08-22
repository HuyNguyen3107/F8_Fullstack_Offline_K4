var User = function (name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
};
const data = [];
function handleRegister(name, password, email) {
  var user = new User(name, password, email);
  for (var key in user) {
    if (user[key] === undefined) {
        return console.log(`Not enough information`);
    }
  }
  user.role = 'user';
  data.push(user);
  return data;
}
handleRegister("Nguyen Van A", "1234569", "nguyenvana@email.com");
handleRegister("Nguyen Van B", "1234567", "nguyenvanb@email.com");
handleRegister("Nguyen Van C", "1234568", "nguyenvanc@email.com");

function handleLogin(password,email) {
    for (var value of data) {
        if (value.password === password && value.email === email) {
            return value;
        }
    }
    return 'Thông tin đăng nhập không hợp lệ';
}
console.log(handleLogin("1234569", "nguyenvana@email.com"));
console.log(data);