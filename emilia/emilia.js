$(document).ready(function(){
	var search = [
	   ['auth','=DIRECT:emilia'],
	   ['int(date.year)','>=2015']
	];
	viewImagesOpt("#images",search,{ 
			imagesPerPage: 9, 
			orderBy : "-bigint(date.itime)"
	  });
});
