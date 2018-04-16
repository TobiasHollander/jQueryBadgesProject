$(function() {

$.ajax({
  url: "https://www.codeschool.com/users/tobiashollander.json",
  dataType: "jsonp",
  success: function(response){
    $.each(response.courses.completed, function(i){
      $("#badges").append("<div class='course'><h3>"+response.courses.completed[i].title+"</h3><img src='"+response.courses.completed[i].badge+"'/><a class='btn btn-primary' href="+response.courses.completed[i].url+" target='_blank'>See Courses</a></div>");
      console.log(response);
      console.log("current index " + i);
    });
  }
});

});
