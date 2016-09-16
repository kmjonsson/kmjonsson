$(document).ready(function(){
	var search = [
	   ['auth','=DIRECT:william'],
	   ['int(date.year)','=2013']
	];
	viewImagesOpt("#images",search,{ 
			imagesPerPage: 9, 
			orderBy : "bigint(date.itime)"
	  });
});
