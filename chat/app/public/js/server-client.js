let socket = io("http://localhost:3000");
      
$('#send').click(function () {
  socket.emit('msgParaServidor', {              /* envia */
    apelido: $('#apelido').val(),
    mensagem: $('#mensagem').val(),
    apelido_atualizado_nos_clientes: $('#apelido_atualizado_nos_clientes').val(),
  });

  $('#mensagem').val('');
  $('#apelido_atualizado_nos_clientes').val(1); // autaliza para não mostrar na lista
});

socket.on('msgParaCliente', function (data) {   /* recebe */
  let html = '';

  html += '<div class="dialogo">';
  html += '<h4 class="text-primary"><img id="user" src="images/user.png">' + data.apelido + '</h4>';
  html += '<p>' + data.mensagem + '</p>';
  html += '</div>';

  $('#dialogos').append(html);

  window.scrollTo(0, document.body.scrollHeight);
});

socket.on('participantesParaCliente', function (data) {
  let html = '';

  html += '<span class="participante">';
  html += '<img class="pr-2" src="images/ico_usuario.png">';
  html += data.apelido;
  html += '</span>';

  $('#pessoas').append(html);
});