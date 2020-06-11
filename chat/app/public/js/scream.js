$(() => {
  $('#chat_link').addClass('active');

  $('#chat_link').on('click', () => {
    $('#conversa').show();
    $('#participantes').hide();
    $('#chat_link').addClass('active');
    $('#participantes_link').removeClass('active');
  });

  $('#participantes_link').on('click', () => {
    $('#participantes').show();
    $('#conversa').hide();
    $('#participantes_link').addClass('active');
    $('#chat_link').removeClass('active');
  });
});
