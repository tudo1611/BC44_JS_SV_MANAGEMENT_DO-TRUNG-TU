var dssv = [];

// lấy json lên khi user load trang
var dataJson = localStorage.getItem("DSSV_LOCAL");
// convert ngược từ json về array
if (dataJson != null) {
  var dataArr = JSON.parse(dataJson);
  for (var i = 0; i < dataArr.length; i++) {
    var item = dataArr[i];
    var sv = new SinhVien(
      item.ma,
      item.ten,
      item.email,
      item.pass,
      item.toan,
      item.ly,
      item.hoa
    );
    dssv.push(sv);
  }
  //JSON.parse(dataJson) sẽ return về null hoặc array
  renderDSSV(dssv);
}

function themSinhVien() {
  //lấy thông tin từ form
  var sv = layThongTinTuForm();
  var isValid = kiemTraTrung(sv.ma, dssv);

  isValid =
    isValid & kiemTraRong("spanEmailSV", sv.email) && kiemTraEmail(sv.email);

  isValid = isValid & kiemTraRong("spanTenSV", sv.ten);

  if (isValid) {
    dssv.push(sv);
    //convert array dssv thành json
    var dataJson = JSON.stringify(dssv);
    // console.log('dataJson: ', dataJson);
    // set get remove
    // lưu json xuống
    localStorage.setItem("DSSV_LOCAL", dataJson);
    //render lên layout
    renderDSSV(dssv);
  }
}

function xoaSV(id) {
  //tìm vị trí
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

function suaSV(id) {
  // console.log(id);
  var viTri = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  if (viTri != -1) {
    //chặn user sửa mã sinh viên
    document.getElementById("txtMaSV").disabled = true;
    // console.log(viTri);
    showThongTinLenForm(dssv[viTri]);
  }
}

function capNhatSinhVien() {
  //bỏ chặn user
  document.getElementById("txtMaSV").disabled = false;

  //lấy thông tin từ form
  var sv = layThongTinTuForm();
  var viTri = dssv.findIndex(function (item) {
    return item.ma == sv.ma;
  });
  if (viTri !== -1) {
    dssv[viTri] = sv;
    renderDSSV(dssv);
    resetForm();
  }
  // console.log(sv);
}

function resetForm() {
  document.getElementById("formQLSV").reset();
}
