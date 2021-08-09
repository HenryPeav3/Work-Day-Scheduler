$("#currentDay").text(moment().format("dddd,MMMM Do"))
$(".saveBtn").on("click",function(){
    var time = $(this).parent().attr("id")
    var input = $(this).siblings(".description").val()
    localStorage.setItem(time,input)
})
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-1 .description").val(localStorage.getItem("hour-1"))
$("#hour-2 .description").val(localStorage.getItem("hour-2"))
$("#hour-3 .description").val(localStorage.getItem("hour-3"))
$("#hour-4 .description").val(localStorage.getItem("hour-4"))
$("#hour-5 .description").val(localStorage.getItem("hour-5"))
function HourCheck (){
    var currentTime = moment().hours()
    $(".time-block").each(function(){
        var compairTime = parseInt($(this).attr("id").split("-")[1])
        if(compairTime === currentTime){
            $(this).addClass("present")
        }else if(compairTime<currentTime){
            $(this).removeClass("present")
            $(this).addClass("past")
        }else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })
}
HourCheck()