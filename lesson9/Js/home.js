// 1,Biến
// Khai báo: số, chuỗi, ngày tháng,...
// int x = 5
// var tên_biến = giá trị
// giá_trị => quy định kiểu dữ liệu của biến
// value = số ==> datatype: số
// value = chuỗi ==> datatype: chuỗi
var a1 = 100; //a1 có kiểu dữ liệu dạng số
var a2 = "dev"; // a2 có kiểu dữ liệu dạng chuỗi

// 2, toán tử
// các phép số học: +,-,*,/,%

var x1 = 10;
var x2 = "50";
var x3 = x1 + x2;
// ==> quy tắc phép cộng:
// số + số ==> số
// chuỗi + chuỗi ==> chuỗi
// chuỗi + số ==> chuỗi: 10 + '50' = '10' + '50'= '1050'

console.log("giá trị của x3 = ", x3);
console.log("giá trị của x3 = "+ x3);

// các phép toán logic
// so sánh: ==, >, <, >=, <=, ===
// điều kiện: &&, ||, !

//khai báo hai số nguyên bất kì, tính hiệu số lớn trừ số bé

//3, cấu trúc điều kiện
// if-else; switch - case
//cú pháp:

//if(điều kiện) {
//     ... các câi lệnh js sẽ được thực thi nếu điều kiện = true...    
//} else{
//     ...các câu lệnh js sẽ được thực thi nếu điều kiện= false...
//}

var st1 = 50;
var st2 = 100;
var hieu;
if(st1 > st2){
    hieu = st1 - st2;
    console.log("hiệu 2 số là: st1 - st2=" +st1+ '-' +st2 +'=' + hieu);
} else {
    hieu=st2 - st1;

console.log("hiệu 2 số là: st2 - st1=" +st2+ '-' +st1 +'=' + hieu);
}


//biện luận phương trình bậc nhất ax+b=0 với mọi a

var a = 10;
var b=100;

if(a==0){
    if(b==0){ 
        console.log("phương trình vô số nghiệm");}
    else {console.log("phương trình vô nghiệm");}
}
else{
    console.log("nghiệm phương trình là", -b/a);
}

// khai báo ba cạnh của 1 tam giác c1,c2,c3
//biện luận các trường hợp của tam giác

var c1= 3;
var c2= 4;
var c3= 5;
if(c1==c2 && c1==c3){
    console.log("tam giác đều");
}
else {if(c1*c1 + c2*c2 ==c3*c3 || c1*c1 + c3*c3 ==c2*c2 || c3*c3 + c2*c2 ==c1*c1){
    
    if(c1==c2 || c2==c3 || c3==c1){
        console.log("tam giác vuông cân");}
    else {
        console.log("tam giac vuong khong can");}
}
else {
    if(c1==c2 || c2==c3 || c3==c1){
        console.log("tam giác cân");}
    else {console.log("tam giác thường");}
}
}

//btvn2: biện luận phương trình bậc 2 1 ẩn: a*x^2+b*x+c=0
//

// switch-case

//vòng lặp và mảng
// for; while, do-while
//cú pháp
//for(đếm; điều_kiện;hành động){
//         thân for: js
//}

//thứ tự for:
//b1:khởi tạo biến đém
//b2:check điều kiện:
//               điều kiện đúng: thực thi thân for => chạy hành động => quay trở lại b2
//               điều kiện sai: dừng for/ kết thúc

var von=10;
for(var i=von; i>0; i-- ){
    console.log("còn đánh được");
}
console.log("dừng chơi");



//mảng:
//khái niệm: tập các phần tử(bất kì)
//đặc điểm: mỗi phần tử được đánh index từ 0 cho tới cuối -1
//          tương tác với các phần tử qua index: tên_mảng[index]
// khai báo


var array2 = [1,2,3,'4',"5","7"];
console.log("phần tử có index = 4 có giá trị là:", array2[4]);
var xx1 = array2[2]; // xx1=3
var xx2 = array2[3]; //xx2='4'

for(var i = 0; i < array2.length; i++ ){
console.log(array2[i]);}

var arr = [1, 5, 84, 85, 9, 4, 6];
//log ra các số lẻ trong mảng arr
for(var i = 0; i < arr.length; i++ ){
    if(arr[i] % 2 != 0){
        console.log(arr[i]);
    }
}

//bt: cho một mảng số bất kì , yêu cầu tính tổng tất cả các giá trị trong mảng
var arrNumber = [1, 2, 3, '8', "6", "7"];
var sum = "0";
for(var i = 0; i < arrNumber.length; i++){
    sum = parseInt(sum) + parseInt(arrNumber[i]);
}
console.log("tổng của mảng là: ", sum);

//bt:tính tích tất cả các phần tử (convert về số)
// tính tổng và tích các phần tử ở vị trí chẵn
//btvn:triển khai ví dụ về switch-case/ if-else (số ngày trong năm/tháng)