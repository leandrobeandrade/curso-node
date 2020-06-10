$(() => {
  $("#exibe_chat").click(function () {
    $("#conversa").show();
    $("#participantes").hide();
    ocultaNavbar();
  });

  $("#exibe_participantes").click(function () {
    $("#participantes").show();
    $("#conversa").hide();
    ocultaNavbar();
  });
});

function ocultaNavbar() {
  $(".navbar_toggler").prop("class", "navbar-toggle collapsed");
  $("#navBar").prop("class", "navbar-collapse collapse");
  $(".navbar_toggler").prop("aria-expanded", "false");
  $("#navBar").prop("aria-expanded", "false");
}
