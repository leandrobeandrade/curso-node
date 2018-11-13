## :style="Estilo"
Renderiza estilos conforme foram setados no atributo data():

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

## :style="[Estilo1, Estilo2]"
Renderiza vários estilos por meio de um array conforme retorno do atributo data():

    <button :style="[estiloBase, estiloSobreposto]">Editar</button>
    ________________________________________________
    ...
    data() {
      return {
        estiloBase: {
            color: 'blue',
            fontSize: 30
        },
        estiloSobreposto: {
            border: 'solid 2px blue',
            font-family: 'Verdana'
        }
      }
    }

## :style="{color: activeColor, fontSize: fontSize + 'px'}"
Renderiza os estilos conforme retorno do atributo data():

    <button :style="{color: corAtiva, fontSize: fontSize + 'px'}">Editar</button>
    ________________________________________________
    ...
    data() {
      return {
        corAtiva: 'blue',
        fontSize: 30
      }
    }
