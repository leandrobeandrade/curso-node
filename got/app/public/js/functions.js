$(() => {
  const comando = window.location.href.split("=").pop();
  console.log(comando)
  if(comando == 'http://localhost:3000/jogo') $('.sucesso').hide()
  
  $('#btn_sud').on('click', () => {
    $('.erros').hide()
    $('.sucesso').hide()
    $.ajax({
      url: '/suditos',
      method: 'get',
      success: (data) => $('#acoes').html(data)
    })
  })

  $('#btn-per').on('click', () => {
    let timerId = null
    $('.erros').hide()
    $('.sucesso').hide()
    $.ajax({
      url: '/pergaminhos',
      method: 'get',
      success: (data) =>  {
        $('#acoes').html(data)
        alert()
        clearTimeout(timerId)
        cronometro()
      }
    })

    function cronometro() {
      console.group(timerId)
      $('.tempo_restante').each(function() {
        let segundos = $(this).html()
        let segundos_atuais = parseInt(segundos) - 1
  
        $(this).html(segundos_atuais)
      })
      timerId = setTimeout('cronometro()', 1000)
    }
  })

})