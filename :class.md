## :class="Classe"
Renderiza estilo da classe no elemento conforme especificado no atributo data(). 

    <button :class="btnClassEditar">Editar</button>
    <button :class="btnClassDeletar">Deletar</button>
    <button :class="btnClassEnviar">Enviar</button>
    ________________________________________________
    ...
    data() {
      return {
        btnClassEditar: 'btn-info btn-small',
        btnClassDeletar: 'btn-danger btn-medium',
        btnClassEnviar: 'btn-success btn-large'
      }
    }
    
    OU
    
    ...
    data() {
      return {
        btnClassEditar: {                                                 <- objeto de classe
          'btn-info': true,
          'btn-small': true
        },
        btnClassDeletar: ['btn-danger', 'btn-medium'],                    <- array de classe
        btnClassEnviar: ['btn-success', {'btn-large': false}]             <- array com objeto
      }
    }

## :class=""
