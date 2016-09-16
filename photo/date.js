function nextDate(u) {
    $("#nextDate").html("<a href=\"/photo/date.html?" + u + "\"><img src=\"/files/icons/fat_arrow_right.gif\" alt=\"--&gt;\"></a>");
    $("#nextDate2").html("<a href=\"/photo/date.html?" + u + "\"><img src=\"/files/icons/fat_arrow_right.gif\" alt=\"--&gt;\"></a>");
}
function prevDate(u) {
    $("#prevDate").html("<a href=\"/photo/date.html?" + u + "\"><img src=\"/files/icons/fat_arrow_left.gif\" alt=\"&lt;--\"></a>");
    $("#prevDate2").html("<a href=\"/photo/date.html?" + u + "\"><img src=\"/files/icons/fat_arrow_left.gif\" alt=\"&lt;--\"></a>");
}
function setTitle(title) {
     if(title != null) {
           $("#title").html(title);
     } else {
           $("#title").html("Pictures");
     }
}
$(document).ready(function(){
	var search = g9decodeSearchParam();
	viewImagesOpt("#images",search,{titleCallback:setTitle});
	prevUrl(search,prevDate);
	nextUrl(search,nextDate);
});
