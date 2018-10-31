## :style="Estilo"   
    <button :style="btnStyleEditar">Editar</button>
    <button :style="btnStyleDeletar">Deletar</button>
    <button :style="btnStyleEnviar">Enviar</button>
    ________________________________________________
    ...
    data() {
      return {
        btnStyleEditar: 'font-size: 30px',
        btnStyleDeletar: 'font-size: 40px',
        btnStyleEnviar: 'font-size: 50px'
      }
    }

    OU

    ...
    data() {
      return {
        btnStyleEditar: {                                                 <- objeto de estilo
          'font-size': '30px',
          'color': 'blue'
        },
        btnStyleDeletar: [                                                <- array de objetos de estilo
          {'font-size': '30px'},
          {'color': 'blue'}
        ],
        btnClassEnviar: ['btn-success', {'btn-large': false}]             <- array com objeto
      }
    }
