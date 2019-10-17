$(".modal-open").click(function(){
  console.log("クリック");
  $(".modal-overlay , .modal-block-hidden").fadeIn(200);
});

$(".modal-close").click(function(){
  console.log("closeクリック");
  $(".modal-overlay , .modal-block-hidden").fadeOut(200);
});
