
function renderDSSV(svArr) {
    // render lên layout
var contentHTML = "";
for (var i = 0; i < svArr.length; i++) {
  var sv = svArr[i];
  //sv là item trong array dssv
  var contentTr = `<tr>
    <td>${sv.ma}</td>
    <td>${sv.ten}</td>
    <td>${sv.email}</td>
    <td>${sv.tinhDTB()}</td>
    <td>
        <button onclick='xoaSV(${sv.ma})' class='btn btn-success'>Xóa</button>
        <button onclick='suaSV(${sv.ma})' class='btn btn-danger'>Sửa</button>
    </td>
    </tr>`;
  contentHTML += contentTr;
}
document.querySelector("#tbodySinhVien").innerHTML = contentHTML;
}

function layThongTinTuForm() {
     var ma = document.querySelector("#txtMaSV").value;
     var ten = document.querySelector("#txtTenSV").value;
     var email = document.querySelector("#txtEmail").value;
     var pass = document.querySelector("#txtPass").value;
     var diemToan = document.querySelector("#txtDiemToan").value * 1;
     var diemLy = document.querySelector("#txtDiemLy").value * 1;
     var diemHoa = document.querySelector("#txtDiemHoa").value * 1;
     //    console.log(maSV, tenSV, email, pass, diemToan, diemLy, diemHoa);
     // lưu lại
     var sv = new SinhVien(ma, ten, email, pass, diemToan, diemLy, diemHoa) 
       return sv;
     }


function showThongTinLenForm(sv) {
   document.querySelector("#txtMaSV").value = sv.ma;
   document.querySelector("#txtTenSV").value = sv.ten;
   document.querySelector("#txtEmail").value = sv.email;
   document.querySelector("#txtPass").value = sv.pass;
   document.querySelector("#txtDiemToan").value = sv.toan;
   document.querySelector("#txtDiemLy").value = sv.ly;
   document.querySelector("#txtDiemHoa").value = sv.hoa;
}
// localStorage  : chỉ lưu xuống và lấy lên, ko update
//JSON stringify, JSON parse