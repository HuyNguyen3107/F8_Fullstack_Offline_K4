var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

console.log(errors);
console.log(Object.entries(errors));

function getError(field) {
    var result = Object.entries(errors).find(function (value) {
        return value.includes(field);
    });
    var err = Object.entries(result[1])[0][1];
    return err;
}

console.log(getError('password'));