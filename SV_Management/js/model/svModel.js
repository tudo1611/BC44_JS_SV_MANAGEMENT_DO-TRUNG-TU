function SinhVien(_ma,_ten,_email,_pass,_toan,_ly,_hoa) {
    this.ma = _ma;
    this.ten = _ten;
    this.email = _email;
    this.pass = _pass;
    this.toan = _toan;
    this.ly = _ly;
    this.hoa = _hoa;
    this.tinhDTB = function () {
        return (this.toan + this.ly + this.hoa) / 3;
    };
}

function Cat(_name,_age) {
    this.name = _name;
    this.age = _age;
}
var cat1 = new Cat('Miu', 2);
var cat2 = new Cat('Tom', 3);
console.log({cat1, cat2});