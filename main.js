function ex1() {
    let standard = +document.getElementById('ex1-standard').value;
    let area = +document.getElementById('ex1-area').value;
    let obj = +document.getElementById('ex1-obj').value;
    let point1 = +document.getElementById('ex1-point1').value;
    let point2 = +document.getElementById('ex1-point2').value;
    let point3 = +document.getElementById('ex1-point3').value;
    let totalPoint = area + obj + point1 + point2 + point3;
    let resultB1;
    if (standard < 0) resultB1 = 'Điểm chuẩn không được nhỏ hơn 0';
    else if (standard < 0 || point1 <= 0 || point2 <= 0 || point3 <= 0)
        resultB1 = 'Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0';
    else if (totalPoint < standard) resultB1 = 'Bạn đã rớt. Tổng điểm: ' + totalPoint;
    else resultB1 = 'Bạn đã đậu. Tổng điểm: ' + totalPoint;
    console.log(resultB1);
    document.getElementById('resultB1').innerHTML = resultB1;
}

function ex2() {
    let nameb2 = document.getElementById('ex2-name').value;
    let kw = +document.getElementById('ex2-kw').value;
    let resultB2;
    if (nameb2 == '') {
        resultB2 = 'Bạn chưa nhập tên';
        }
    else if (kw < 0 || isNaN(kw)) {
        resultB2 = 'Số điện không được nhỏ hơn 0 hoặc không là số';
        }
    else if (0<=kw && kw <=50)
        resultB2 = 'Họ tên: ' + nameb2+ '; Tiền điện: ' + new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(kw*500);
    else if (50<kw && kw <=100) 
        resultB2 = 'Họ tên: ' + nameb2+ '; Tiền điện: ' + new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format (50*500 + (kw - 50)*650);
    else if (100<kw && kw <=200) 
        resultB2 = 'Họ tên: ' + nameb2+ '; Tiền điện: ' + new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format (50*500 + 50*650 + (kw-100)*850);
    else if (200<kw && kw <=350) 
        resultB2 = 'Họ tên: ' + nameb2+ '; Tiền điện: ' + new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(50*500 + 50*650 + 100*850 + (kw-200)*1100);
    else resultB2 = 'Họ tên: ' + nameb2+ '; Tiền điện: ' + new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format (50*500 + 50*650 + 100*850 + 150*1100 + (kw-350)*1300);
    document.getElementById('resultB2').innerHTML = resultB2;
}

function ex3() {
    let nameb3 = document.getElementById('ex3-name').value;
    let income = +document.getElementById('ex3-income').value;
    let depenPer = +document.getElementById('ex3-depenPer').value;
    let imcomTax = income - 4000000 - depenPer*1600000;
    if (nameb3 =='') resultB3 = 'Bạn chưa nhập tên';
    else if (income == '') resultB3 = 'Bạn chưa nhập Tổng thu nhập của năm';
    else if (imcomTax < 0 ) resultB3 = 'Bạn không có thuế thu nhập cá nhân';
    else resultB3 = "thu nhập cá nhân là: " + tax(imcomTax);
    document.getElementById('resultB3').innerHTML = resultB3;
}

function tax(num) {
    let tax = 0;
    if (0<=num && num<=60000000) tax = num*0.05;
    else if (60000000<num && num<=120000000) tax = 60000000*0.05 + (num-60000000)*0.1;
    else if (12000000<num && num<=210000000) tax = 60000000*0.05 + 60000000*0.1 + (num-120000000)*0.15;
    else if (210000000<num && num<=384000000) tax = 60000000*0.05 + 60000000*0.1 + 90000000*0.15 + (num-210000000)*0.2;
    else if (384000000<num && num<=624000000) tax = 60000000*0.05 + 60000000*0.1 + 90000000*0.15 + 174000000*0.2 + (num-384000000)*0.25;
    else if (624000000<num && num<=960000000) tax = 60000000*0.05 + 60000000*0.1 + 90000000*0.15 + 174000000*0.2 + 240000000*0.25 + (num-624000000)*0.3;
    else tax = 60000000*0.05 + 60000000*0.1 + 90000000*0.15 + 174000000*0.2 + 240000000*0.25 + 336000000*0.3 + (num-624000000)*0.35;
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(tax);
}

// tính tiền cáp
function excus() {
    let cus = +document.getElementById('ex4-cus').value;
    if (cus == 2) document.getElementById('show-connect').style.display = 'block';
    else document.getElementById('show-connect').style.display = 'none';
}

function ex4() {
    let cus = +document.getElementById('ex4-cus').value;
    let cusID = +document.getElementById('ex4-cusID').value;
    let channel = +document.getElementById('ex4-channel').value;
    let connect = +document.getElementById('ex4-connect').value;
    let payEx4 = 0;
    if (cus == 0) {
        alert ('Chọn loại khách hàng!');
        return;
    } 
    else if (cusID == 0) {
        alert ('Chọn loại mã khách hàng!')
        return;
    }
    else if (cus == 1) {
        payEx4 = 4.5 + 20.5 + channel*7.5;
    }
    else if (cus == 2) {
        if (0<=channel && channel<=10) {
            payEx4 = 15 + 75 + 50*connect;
        }
        else payEx4 = 15+75+ 5*(channel-10) + 50*connect;
    }
    document.getElementById('resultB4').innerHTML = 'Mã khách hàng: ' + cusID + '; Số tiền cáp: ' + new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(payEx4);;;
}
