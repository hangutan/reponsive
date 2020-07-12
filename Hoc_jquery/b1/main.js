$(function(){

    $(".block1 button").click(function(){
        $(".block1__khung").animate({
            marginLeft:500,
            height:"100px"
        })
        $(".block1__khung").css({
            "background-color":"red"
        })
    });

    $(".motkhoi h3").click(function(event){
        $(this).next().slideToggle(1000,function(){
            console.log("call back");
        });
    })

    $(".block3 #btn1").click(function(event){
        $("#nd1").after("<b>Nội dung mới thêm vào sau </b>");
        $("#nd1").before("<b>Nội dung mới thêm vào trước</b>");

        $("#nd2").append("<b>dùng appendTo </b>")
    });

    $(".block3 #btn3").click(function(event){
        //thay đổi thuộc tính trong phần tử html
        $("#nd3").attr("class","cl-blue");
    });

    $("#btn2").bind("mouseover",function(){
        alert("đã thực hiện hàm bind");
    });

    $(window).resize(reSizeWindow);
});

function reSizeWindow(){
    var height = $(window).height();
    var width = $(window).width();
    console.log("height hiện tại :"+height+"width hiện tại :"+width);
}