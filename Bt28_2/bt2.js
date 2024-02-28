function timTuDaiNhatTrongCau(cau) {
    // Tách câu thành các từ
    var cacTu = cau.split(" ");
    var tuDaiNhat = "";

    // Duyệt qua từng từ trong mảng
    for (var i = 0; i < cacTu.length; i++) {
        // Nếu độ dài của từ hiện tại lớn hơn từ dài nhất đã tìm được
        if (cacTu[i].length > tuDaiNhat.length) {
            tuDaiNhat = cacTu[i];
        }
    }

    return tuDaiNhat;
}

// Hàm nhập câu từ người dùng
function nhapCauVaTimTuDaiNhat() {
    var cau = prompt("Nhập một câu:");
    var tuDaiNhat = timTuDaiNhatTrongCau(cau);
    console.log("Từ dài nhất trong câu là: " + tuDaiNhat);
}

// Gọi hàm nhập câu và tìm từ dài nhất
nhapCauVaTimTuDaiNhat();
