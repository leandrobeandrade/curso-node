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
    $('.erros').hide()
    $('.sucesso').hide()
    $.ajax({
      url: '/pergaminhos',
      method: 'get',
      success: (data) => $('#acoes').html(data)
    })
  })
})