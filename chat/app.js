let app = require('./config/server')
let socket = require('socket.io')

let server = app.listen(3000, () => {
  console.log("SERVIDOR RODANDO")
});

let io = socket.listen(server)    // faz o socket.io escutar na mesma porta, não é obrigatório
app.set('io', io)                 // cria uma variável global pelo express

io.on('connection', (sockets) => {
  console.log('USÁRIO CONECTADO!')

  sockets.on('disconnect', () => console.log('USÁRIO DESCONECTADO!'))  // disconnect

  sockets.on('msgParaServidor', (data) => {

		sockets.emit(                    // emite só para quem envia
			'msgParaCliente', 
			{ apelido: data.apelido, mensagem: data.mensagem }
		);

		sockets.broadcast.emit(          // emite para todos no chat
			'msgParaCliente', 
			{ apelido: data.apelido, mensagem: data.mensagem }
		);

		/* participantes */
		if(parseInt(data.apelido_atualizado_nos_clientes) == 0){  // para não mostrar na lista
			sockets.emit(
				'participantesParaCliente', 
				{ apelido: data.apelido }
			);

			sockets.broadcast.emit(
				'participantesParaCliente', 
				{ apelido: data.apelido }
			);
		}
	});

})
