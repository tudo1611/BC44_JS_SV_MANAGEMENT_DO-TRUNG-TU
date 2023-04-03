var dssv = [];

function layThongTinTuForm() {
  var maSV = document.querySelector("#txtMaSV").value;
  var tenSV = document.querySelector("#txtTenSV").value;
  var email = document.querySelector("#txtEmail").value;
  var pass = document.querySelector("#txtPass").value;
  var toan = document.querySelector("#txtDiemToan").value * 1;
  var ly = document.querySelector("#txtDiemLy").value * 1;
  var hoa = document.querySelector("#txtDiemHoa").value * 1;

  //lưu
  var sv = {
    ma: maSV,
    ten: tenSV,
    email: email,
    pass: pass,
    toan: toan,
    ly: ly,
    hoa: hoa,
    tinhDTB: function () {
      return (this.toan + this.ly + this.hoa) / 3;
    },
  };
  return sv;
}

//lấy json lên khi user load trang
var dataJson = localStorage.getItem("DSSV_LOCAL");
//convert từ json thành array
if (dataJson != null) {
  dssv = JSON.parse(dataJson);
  renderDSSV(dssv);
}

function themSinhVien() {
  var sv = layThongTinTuForm();
  dssv.push(sv);
  //convert array dssv thành json
  var dataJson = JSON.stringify(dssv);
  //lưu JSON
  localStorage.setItem("DSSV_LOCAL", dataJson);

  renderDSSV(dssv);
}

function xoaSV(id) {
  var viTri = -1;
  for (var i = 0; i < dssv.length; i++) {
    var sv = dssv[i];
    if (sv.ma == id) {
      viTri = i;
    }
  }
  dssv.splice(viTri, 1);
  renderDSSV(dssv);
}

function renderDSSV(svArr) {
  var contentHTML = "";
  for (var i = 0; i < svArr.length; i++) {
    var sv = svArr[i];
    var contentTr = `<tr>
        <td>${sv.ma}</td>
        <td>${sv.ten}</td>
        <td>${sv.email}</td>
        <td>0</td>
        <td>
            <button onclick='xoaSV(${
              sv.ma
            })' class='btn btn-danger'>Xóa</button>
            <button class='btn btn-warning'>Sửa</button>
        </td>
        </tr>`;
    contentHTML += contentTr;
  }
  document.querySelector("#tbodySinhVien").innerHTML = contentHTML;
}
