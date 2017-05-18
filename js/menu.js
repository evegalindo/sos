$('.navbar-toggle').click(function () {
  if($('#imagenmenu').attr('src') == "img/botones/SOS_Edition_Button_Cross_S_27px.svg") {
      $('#imagenmenu').attr("src", "img/botones/SOS_Edition_Button_Menu_S_30px.svg");
  } else {
    $('#imagenmenu').attr("src", "img/botones/SOS_Edition_Button_Cross_S_27px.svg");
  }
});
