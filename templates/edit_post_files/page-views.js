$(function () {
  var urls = [];
  var data = {};

  $("[data-ga-identifier]").map(function(){
    urls.push($(this).attr("data-ga-identifier"));
  });

  if ($("#ga-page-views").attr("data-filter") !== "all") {
    data['urls'] = urls;
  }

  $.ajax({
    url: '/api/page-views/',
    data: data,
    type: 'get',
    dataType: 'json',
    success: function (data) {
      urls.forEach(function (url) {
        $("[data-ga-identifier='" + url + "']").text(data[url]);
      });
    }
  });
});
