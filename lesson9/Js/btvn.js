//bài1
var a=1;
var b=2;
var c=1;
 var t=b*b-4*a*c;
 if(a==0){
    console.log("Nghiệm của phương trình là: ", -c/b);
 }
 else {
    if (t<0){
        console.log("Phương trình vô nghiệm");
     }
     else{
        if(t==0){
            console.log("phương trình có nghiệm kép là: ", -b/2/a);
        }
        else{
            console.log("phương trình có 2 nghiệm phân biệt là: ",  (-b+Math.sqrt(t))/2/a , 'và' , (-b-Math.sqrt(t))/2/a);
        }
     }
 }

 //bài2
 var arrNumber = [4, 5, 10, '8', "6", "7"];
var tich = 1;
var sum=0;
var tich2=1;
for(var i = 0; i < arrNumber.length; i++){
    
        tich = tich * parseInt(arrNumber[i]);

    
}
console.log("tích của mảng là: ", tich);
for(var i = 0; i < arrNumber.length; i++){
    if(i%2==0){
        sum = sum + parseInt(arrNumber[i]);
        tich2 = tich2 * parseInt(arrNumber[i]);
    }
}
console.log("tổng chẵn là", sum);
console.log("tích chẵn là", tich2);

//bài3
var thang=2;
var nam=2020;

if(nam%4==0){
    console.log("Năm", nam, 'có 366 ngày');
    if(thang>=8){
        if(thang%2==0){
            console.log("Tháng" ,thang, 'có 31 ngày');
        }
        else{ console.log("Tháng" ,thang, 'có 30 ngày');}
    }
    else{
    if(thang==2){
        console.log("Tháng" ,thang, 'có 29 ngày');
    }
    else{
        if(thang%2==0){
            console.log("Tháng" ,thang, 'có 30 ngày');
        }
        else {
            console.log("Tháng" ,thang, 'có 31 ngày');
        }
    }
    }
}
else{
    console.log("Năm", nam, 'có 365 ngày');
    if(thang>=8){
        if(thang%2==0){
            console.log("Tháng" ,thang, 'có 31 ngày');
        }
        else{ console.log("Tháng" ,thang, 'có 30 ngày');}
    }
    else{
    if(thang==2){
        console.log("Tháng" ,thang, 'có 28 ngày');
    }
    else{
        if(thang%2==0){
            console.log("Tháng" ,thang, 'có 30 ngày');
        }
        else{
            console.log("Tháng" ,thang, 'có 31 ngày');
        }
    }
    }
}

