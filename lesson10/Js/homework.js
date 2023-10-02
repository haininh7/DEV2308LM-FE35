//bài 1
var array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
function timkiem(a){
    var temp2 = false;
    var dem=0;
    for(j = 1; j<= array3.length; j++){
    if(parseInt(a) === parseInt(array3[j-1])) {
        console.log("giá trị a tồn tại ở vị trí thứ", j);
        dem +=1;
        temp2=true;
    }

       
    }
    console.log("giá trị a xuất hiện", dem , "lần");
    if (!temp2){
        console.log("no-data");
    }
    }
    
    timkiem(10);


//bài 2


 var a1={   
    name : "Ninh" ,
    pass : 'haininh71',
};
var a2={   
    name : "Hoang" ,
    pass : "huyhoang15",
};
var a3={   
    name : "Thanh" ,
    pass : "xuanthanh08",
};
 var listuser = [a1,a2,a3];

 function searchName(){
    
    var name = document.getElementById('username').value ;
    var pass = document.getElementById('pass').value ;
    if(name =='' || pass == ''){
        alert("bạn phải nhập đủ thông tin để đăng nhập");
        return ;
    }
    var tmp=false;
    for (let i=0; i< listuser.length;i++){
        if(listuser[i].name == name ){
            if (listuser[i].pass == pass){
                alert("chào mừng trở lại");
            }
            else {
                alert("sai thông tin đăng nhập");
            }
           
            
        }
    }

 }






