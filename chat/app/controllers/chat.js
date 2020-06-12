module.exports.chat$ = (application, req, res) => {
  let dadosForm = req.body;

  req.assert('apelido', 'Preenchimento obigatório').notEmpty()
  req.assert('apelido', 'Campo deve conter entre 3 e 15 caracteres').len(3, 15)

  let erros = req.validationErrors()

  if(erros) {
    res.render('index', { validacao: erros })
    return
  }
  
  application.get('io').                   // application é a instância do express
  emit('msgParaCliente', {                 // emite algo para o cliente
    apelido: dadosForm.apelido,
    mensagem: ' entrou no chat!'
  })

  res.render('chat', { dadosForm: dadosForm })
}