//hợp lệ => true
var showMessage = function (id, message) {
  document.getElementById(id).innerHTML = message;
};

var kiemTraTrung = function (maSV, dssv) {
  var index = dssv.findIndex(function (item) {
    return maSV == item.ma;
  });
  if (index == -1) {
    showMessage("spanMaSV", "");
    return true;
  } else {
    showMessage("spanMaSV", "Mã sinh viên đã tồn tại");
    return false;
  }
};

var kiemTraRong = function (idErr, value) {
  if (value.length == 0) {
    showMessage(idErr, "Trường này không được trống");
    return false;
  } else {
    showMessage(idErr, "");
    return true;
  }
};

var kiemTraEmail = function (email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(email)) {
    showMessage("spanEmailSV", "");
    return true;
  } else {
    showMessage("spanEmailSV", "email không hợp lệ");
    return false;
  }
};
