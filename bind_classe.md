## :class="Classe"
Renderiza uma classe no elemento conforme especificado no atributo data(): 

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

## :class="{Classe: Definicao}"
Renderiza uma classe baseada no retorno do atributo data().

    <button :class="{active: estaAtivo}">Editar</button>
    <button :class="{'text-danger: temErro'}">Deletar</button>
    ________________________________________________
    ...
    data() {
      return {
        estaAtivo: true,
        temErro: false
      }
    }

## :class="[ativo, erro]" 
Renderiza diversas classes passadas por meio de um array:

    <button :class="[estaAtivo, temErro]">Editar</button>
    ________________________________________________
    ...
    data() {
      return {
        estaAtivo: 'active',
        temErro: 'text-danger'
      }
    }
    
## : class="[{Classe: Definicao }, OutraClasse]"
Renderiza classes dentro de objetos conforme retorno do atributo data() junto com outras classes:

    <button :class="[{active: estaAtivo}, temErro]">Editar</button>
    ________________________________________________
    ...
    data() {
      return {
        estaAtivo: true,
        temErro: 'text-danger'
      }
    }
