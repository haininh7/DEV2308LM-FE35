var listItems = [
    {
        id: 1,
        name : "sản phẩm 1",
        img : "https://image.donghohaitrieu.com/wp-content/uploads/2023/09/T006.407.16.033.00-1.jpg",
        content : "Đồng hồ chính hãng",
        price : 1000000,
        status : "true",
        cate: "nữ",
        color: "black",
    },
    {
        id: 2,
        name : "sản phẩm 2",
        img : "https://image.donghohaitrieu.com/wp-content/uploads/2023/09/37_D173TCM.jpg",
        content : "Đồng hồ chính hãng",
        price : 2000000,
        status : "false",
        cate: "nam",
        color: "white",
    },
    {
        id: 3,
        name : "sản phẩm 3",
        img : "https://image.donghohaitrieu.com/wp-content/uploads/2023/09/71836-SVWHBL-2-3.jpg",
        content : "Đồng hồ chính hãng",
         price : 3000000,
         status : "false",
         cate: "nữ",
         color: "red",
    },
    {
        id: 4,
        name : "sản phẩm 4",
        img : "https://image.donghohaitrieu.com/wp-content/uploads/2023/09/K001.103.642.05.01-1.jpg",
        content : "Đồng hồ chính hãng",
        price : 4000000,
        status : "true",
        cate: "nam",
        color: "brown",
    },
    {
        id: 5,
        name : "sản phẩm 5",
        img : "https://image.donghohaitrieu.com/wp-content/uploads/2024/01/2-11.jpg",
        content : "Đồng hồ chính hãng",
        price : 5000000,
        status : "false",
        cate: "nữ",
        color: "black",
    },
    {
        id: 6,
        name : "sản phẩm 6",
        img : "https://image.donghohaitrieu.com/wp-content/uploads/2023/09/T058.109.33.456.00.jpg",
        content : "Đồng hồ chính hãng",
        price : 6000000,
        status : "true",
        cate: "nam",
        color: "red",
    },
    {
        id: 7,
        name : "sản phẩm 7",
        img : "https://image.donghohaitrieu.com/wp-content/uploads/2023/09/NJ0153-82X.jpg",
        content : "Đồng hồ chính hãng",
        price : 7000000,
        status : "true",
        cate: "nam",
        color: "white",
    },
    {
        id: 8,
        name : "sản phẩm 8",
        img : "https://image.donghohaitrieu.com/wp-content/uploads/2024/05/Titoni-83743-S-682.jpg",
        content : "Đồng hồ chính hãng",
        price : 8000000,
        status :"true",
        cate: "nữ",
        color: "green",
    },
]

function showItem(size){
    $('#list-items').html('');
    for(let i=0; i< size && i < listItems.length; i++){
        
            var item = `<div class="col-3">
            <div class="card" ">
                <img src="${listItems[i].img}" class="card-img-top w-100" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${listItems[i].name}</h5>
                  <p class="card-text">${listItems[i].content}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>`;
                $('#list-items').append(item);
        
        
    }
}

function search(){
    $('#list-items').html('');
    // includes: "chuỗi giá trị".includes("giá trị so sánh")
    // convert string: uper / lower
    // "dev master" != "dev   master" => replaceAll(" ", "")
    var title = $(".search").val();
    for(let i=0; i < listItems.length;i++){
        if(listItems[i].name.toLocaleLowerCase().includes(title.toLowerCase())){
         //if(listItems[i].name ==title){
            var item = `<div class="col-3">
            <div class="card" ">
                <img src="${listItems[i].img}" class="card-img-top w-100" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${listItems[i].name}</h5>
                  <p class="card-text">${listItems[i].content}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>`;
                $('#list-items').append(item);
         }
    }
}

function filterprice(){
    $('#list-items').html('');
    
    var titlel = $(".search-price-max").val();
    var titlell = $(".search-price-min").val();
    for(let i=0; i < listItems.length;i++){
        if(listItems[i].price <= titlel && listItems[i].price >= titlell  ){
         //if(listItems[i].name ==title){
            var item = `<div class="col-3">
            <div class="card" ">
                <img src="${listItems[i].img}" class="card-img-top w-100" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${listItems[i].name}</h5>
                  <p class="card-text">${listItems[i].content}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>`;
                $('#list-items').append(item);
         }
    }
}

function filterkind(){
    $('#list-items').html('');
    
    var gioitinh = $(".search-cate").val();
    
    for(let i=0; i < listItems.length;i++){
        if(listItems[i].cate.toLocaleLowerCase().includes(gioitinh.toLowerCase())   ){
         //if(listItems[i].name ==title){
            var item = `<div class="col-3">
            <div class="card" ">
                <img src="${listItems[i].img}" class="card-img-top w-100" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${listItems[i].name}</h5>
                  <p class="card-text">${listItems[i].content}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>`;
                $('#list-items').append(item);
         }
    }
}

function filtercolor(){
    $('#list-items').html('');
    
    
    var mausac = $(".search-color").val();
    for(let i=0; i < listItems.length;i++){
        if(listItems[i].color.toLocaleLowerCase().includes(mausac.toLowerCase())){
         //if(listItems[i].name ==title){
            var item = `<div class="col-3">
            <div class="card" ">
                <img src="${listItems[i].img}" class="card-img-top w-100" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${listItems[i].name}</h5>
                  <p class="card-text">${listItems[i].content}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>`;
                $('#list-items').append(item);
         }
    }
}



