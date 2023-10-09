// 1,Biến
// Khai báo: số, chuỗi, ngày tháng,...
// int x = 5
// var tên_biến = giá trị
// giá_trị => quy định kiểu dữ liệu của biến
// value = số ==> datatype: số
// value = chuỗi ==> datatype: chuỗi
// var a1 = 100; //a1 có kiểu dữ liệu dạng số
// var a2 = "dev"; // a2 có kiểu dữ liệu dạng chuỗi

// // 2, toán tử
// // các phép số học: +,-,*,/,%

// var x1 = 10;
// var x2 = "50";
// var x3 = x1 + x2;
// // ==> quy tắc phép cộng:
// // số + số ==> số
// // chuỗi + chuỗi ==> chuỗi
// // chuỗi + số ==> chuỗi: 10 + '50' = '10' + '50'= '1050'

// console.log("giá trị của x3 = ", x3);
// console.log("giá trị của x3 = "+ x3);

// // các phép toán logic
// // so sánh: ==, >, <, >=, <=, ===
// // điều kiện: &&, ||, !

// //khai báo hai số nguyên bất kì, tính hiệu số lớn trừ số bé

// //3, cấu trúc điều kiện
// // if-else; switch - case
// //cú pháp:

// //if(điều kiện) {
// //     ... các câi lệnh js sẽ được thực thi nếu điều kiện = true...    
// //} else{
// //     ...các câu lệnh js sẽ được thực thi nếu điều kiện= false...
// //}

// var st1 = 50;
// var st2 = 100;
// var hieu;
// if(st1 > st2){
//     hieu = st1 - st2;
//     console.log("hiệu 2 số là: st1 - st2=" +st1+ '-' +st2 +'=' + hieu);
// } else {
//     hieu=st2 - st1;

// console.log("hiệu 2 số là: st2 - st1=" +st2+ '-' +st1 +'=' + hieu);
// }


// //biện luận phương trình bậc nhất ax+b=0 với mọi a

// var a = 10;
// var b=100;

// if(a==0){
//     if(b==0){ 
//         console.log("phương trình vô số nghiệm");}
//     else {console.log("phương trình vô nghiệm");}
// }
// else{
//     console.log("nghiệm phương trình là", -b/a);
// }

// // khai báo ba cạnh của 1 tam giác c1,c2,c3
// //biện luận các trường hợp của tam giác

// var c1= 3;
// var c2= 4;
// var c3= 5;
// if(c1==c2 && c1==c3){
//     console.log("tam giác đều");
// }
// else {if(c1*c1 + c2*c2 ==c3*c3 || c1*c1 + c3*c3 ==c2*c2 || c3*c3 + c2*c2 ==c1*c1){
    
//     if(c1==c2 || c2==c3 || c3==c1){
//         console.log("tam giác vuông cân");}
//     else {
//         console.log("tam giac vuong khong can");}
// }
// else {
//     if(c1==c2 || c2==c3 || c3==c1){
//         console.log("tam giác cân");}
//     else {console.log("tam giác thường");}
// }
// }

// //btvn2: biện luận phương trình bậc 2 1 ẩn: a*x^2+b*x+c=0
// //

// // switch-case

// //vòng lặp và mảng
// // for; while, do-while
// //cú pháp
// //for(đếm; điều_kiện;hành động){
// //         thân for: js
// //}

// //thứ tự for:
// //b1:khởi tạo biến đém
// //b2:check điều kiện:
// //               điều kiện đúng: thực thi thân for => chạy hành động => quay trở lại b2
// //               điều kiện sai: dừng for/ kết thúc

// var von=10;
// for(var i=von; i>0; i-- ){
//     console.log("còn đánh được");
// }
// console.log("dừng chơi");



// //mảng:
// //khái niệm: tập các phần tử(bất kì)
// //đặc điểm: mỗi phần tử được đánh index từ 0 cho tới cuối -1
// //          tương tác với các phần tử qua index: tên_mảng[index]
// // khai báo


// var array2 = [1,2,3,'4',"5","7"];
// console.log("phần tử có index = 4 có giá trị là:", array2[4]);
// var xx1 = array2[2]; // xx1=3
// var xx2 = array2[3]; //xx2='4'

// for(var i = 0; i < array2.length; i++ ){
// console.log(array2[i]);}

// var arr = [1, 5, 84, 85, 9, 4, 6];
// //log ra các số lẻ trong mảng arr
// for(var i = 0; i < arr.length; i++ ){
//     if(arr[i] % 2 != 0){
//         console.log(arr[i]);
//     }
// }

// //bt: cho một mảng số bất kì , yêu cầu tính tổng tất cả các giá trị trong mảng
// var arrNumber = [1, 2, 3, '8', "6", "7"];
// var sum = "0";
// for(var i = 0; i < arrNumber.length; i++){
//     sum = parseInt(sum) + parseInt(arrNumber[i]);
// }
// console.log("tổng của mảng là: ", sum);

//bt:tính tích tất cả các phần tử (convert về số)
// tính tổng và tích các phần tử ở vị trí chẵn
//btvn:triển khai ví dụ về switch-case/ if-else (số ngày trong năm/tháng)



// end less 09

//---------------------------------------------------------------------------------------------------------------------------------------------
// start less 10
// biến
// toán tử
// mảng: array
// định nghĩa: 'tập hợp các phần tử'
// đánh dấu từ 0 => length-1
// tương tác: qua index
// các hàm tương tác với array: push(), pop(),...

var array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// yêu cầu: khai báo 1 số bát kì và tìm vị trí số đó trong mảng array3

var x4 = 5;
var temp = false;
for(j = 1; j<= array3.length; j++){
if(parseInt(x4) === parseInt(array3[j-1])) {
    console.log("giá trị x4 tồn tại ở vị trí thứ", j);
    temp=true;
}
   
}
if (temp==false){
    console.log("giá trị x4 không tồn tại trong array3")
}

// hàm: function

// khai báo:
function ten_ham(tham_so_dau_vao){
    // thân hàm
}

// sử dụng hàm:
ten_ham(1)

function summary(a, b){
  var totalab=parseInt(a)+parseInt(b);
  console.log("tổng 2 tham số là", totalab);
}
summary(15, "55");

// các tham số đầu vào có kiểu dữ liệu là tự định nghĩa 
// tham số 1 <==> input 1
// tham số n <==> input n

function filter(x5){
    var temp2 = false;
for(j = 1; j<= array3.length; j++){
if(parseInt(x5) === parseInt(array3[j-1])) {
    console.log("giá trị x5 tồn tại ở vị trí thứ", j);
    temp2=true;
}
   
}
if (!temp2){
    console.log("giá trị x5 không tồn tại trong array3")
}
}

filter(100);

var arrDemo = ["anc", 'dev', 123, '78874', "js"];
// btvn: viết 1 hàm tìm kiếm trong tập dữ liệu có sẵn bất kì
// kiểm tra xem giá trị đầu vào xuất hiện bao nhiêu lần, ở đâu
// nếu k tồn tại in ra: no-data

// end function

// đối tượng: object

// tập hợp thuộc tính ==> đối tượng
// khai báo :
// var obj1 = {}
// var obj2 = new Object();
// obj2.chieu_cao = 171;
// obj2.can_nang = 55;
// obj2.que_quan = "Viet Nam";
// obj2.gioi_tinh = "Nam";

// var obj3 = {
//     chieu_cao : 172,
//     can_nang: 62,
//     que_quan: 'hải dương',
//     dan_toc: 'kinh',
// }

// // array object : JSON
// var n1 = {
    
var obj1 = {
    Chieu_cao : 175,
    Can_nang : 52,
    Que_quan : 'Thanh Hóa',
    Dan_toc : 'Kinh',
}
var obj2 = new Object();
obj2.Chieu_cao = 171;
obj2.Can_nang = 71;
obj2.Que_quan = 'Việt Nam';

// array object : JSON
var n1 = {
    Chieu_cao : 175,
    Can_nang : 52,
    Que_quan : 'Thanh Hóa',
    Dan_toc : 'Kinh',
};
var n2 = {
    Chieu_cao : 175,
    Can_nang : 52,
    Que_quan : 'Hải Phòng',
    Dan_toc : 'Kinh',
};
var n3 = {
    Chieu_cao : 175,
    Can_nang : 52,
    Que_quan : 'Nam Định',
    Dan_toc : 'Kinh',
};
var arrObj = [n1, n2, n3] 
function search(text){
    var tmp = false;
    for(let i = 0; i < arrObj.length; i++){
        if(text == arrObj[i].Que_quan){
            console.log('có tồn tại  người quê quán ở: ', text);
            tmp = true;
        }
    }
    if(!tmp) console.log('không tồn tại người quê ở:', text);
}
search('Thanh Hóa');
search('Nam định');

 // end object

 // start DOM
 // khái niệm và mục đích
 // phân loại DOM
 // syntax using DOM
 // DOM ELEMENT
 // DOM id
 // DOM CLASS
 // DOM ...

 function showValueInput(){
    var y=document.getElementById('username').value;
 console.log("demo username: ", y);
 }

 var listProduct = [
    {   
        id :1,
        name : "đồng hồ" ,
        price : 10000000,
        cate : 1
    },
    {   
        id :2,
        name : "nhẫn" ,
        price : 20000000,
        cate : 3
    },
    {   
        id :3,
        name : "điện thoại" ,
        price : 50000000,
        cate : 4
    },
    {   
        id :4,
        name : "quần áo" ,
        price : 60000000,
        cate : 2
    },
 ];

 function searchProduct(){
    debugger;
    var name = document.getElementById('productname').value ;
    if(name ==''){
        alert("giá trị tìm kiếm không được trống");
        return ;
    }
    var tempProduct=false;
    for (let i=0; i< listProduct.length;i++){
        if(listProduct[i].name == name){
            console.log("tồn tại phần tử trùng tên, ", listProduct[i]);
            tempProduct=true;
        }
    }
if(!tempProduct) console.log("no data");
 }

// btvn: tạo listuser (array object)
// dùng lại form đăng nhập
// bắt sự kiện khi click button đăng nhập => lấy ra giá trị 2 ô input username, pass
//so sánh giá trị người dùng nhập với tập dữ liệu listuser
//nếu tồn tại =>....
// nếu k tồn tại =>..
//nếu người dùng không nhập vào 1 trong 2(hoặc là để trống cả 2) ô input => thông báo


//lưu ý về biến:
//phạm vi của biến: local-global: cục bộ -toàn cục


