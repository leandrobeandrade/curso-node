## Interpolação mustache
Faz o bind no Html, renderizando os dados dentro do Html, sendo a única maneira de se utilizar filtros:

    <h1>{{ dados }}</h1>
    ________________________
    ...
    data() {
      return {
        dados: 'Vue'
      }
    }

## v-text
Substitui a interpolação mustache **{{ }}**, ou seja, liga os dados dentro de uma tag Html diretamente:

    <h1 v-text="dados"></h1>
    ________________________
    ...
    data() {
      return {
        dados: 'Alô Mundo!!'
      }
    }
    
## v-html
Faz o bind no Html, renderizando o código Html dentro da String em Html puro:

    <div v-html="dados"></div>
    ________________________
    ...
    data() {
      return {
        dados: '<h1>Vue</h1>'
      }
    }
    
## v-once
Renderiza o valor dentro da variável apenas uma vez, deixa o dado imutável:

    <div v-once>{{ dados }}</div>
    _________________________
    ...
    data() {
      return {
        dados: 'Vue'
      }
    }    
    
## v-bind
Faz o bind em qualquer atributo Html válido:

    <a v-bind:href="link">Site Vue.js</a>
    <a :href="link">Site Vue.js</a>                                                    <- shorthand
    _____________________________________
    ...
    data() {
      return {
        link: 'https://vuejs.org/'
      }
    } 
    
## v-on
Faz a captura de eventos javascript:

    <button v-on:click="alo">Dispara a função</button>
    <button @click="alo">Dispara a função</button>                                     <- shorthand
    _____________________________________
    ...
    data() {
      ...
    },
    methods: {
        alo() {
            alert("Alô Mundo Vue.js!")
        }
    }

## v-show
Renderiza elementos no Html conforme a condição, porém renderiza os elementos no DOM e insere um display none:

    <h1 v-show="dados">Apresenta este texto se dados for true</h1>
    <h1 v-show="!dados">Apresenta este texto somente se dados for false</h1>
    ________________________
    ...
    data() {
      return {
        dados: true'
      }
    }
    
## v-if
Testa uma condição para renderizar elementos no Html, se a condição for falsa os elementos não são carregados no DOM:

    <h1 v-if="dados">Apresenta este texto se dados for true, senão não renderiza o h1 no DOM</h1>
    _____________________________________
    ...
    data() {
      return {
        dados: 'true'
      }
    }
    
## v-else
Testa uma condição para renderizar elementos no Html, se a condição if for falsa os elementos serão carregados os dados do else:

    <h1 v-if="dados">Apresenta este texto se dados for true, senão não renderiza o h1 no DOM</h1>
    <h1 v-else>Apresenta este texto somente se dados for false</h1>
    _____________________________________
    ...
    data() {
      return {
        dados: 'false'
      }
    } 
    
## v-model
Faz o bind de dados conforme a variável é preenchida, utilizada em elementos de formulários como inputs, textarea, etc...:

    <input type="text" v-model="dados">                                                <- Não pode ter atributo value
    <h1>{{ dados }}</h1>
    ________________________
    ...
    data() {
      return {
        dados: ''
      }
    }
    
## v-for
Faz a iteração em arrays e objetos:

    <ol><li v-for="dado in dados">{{ dados }}</li></ol>
    
    ________________________
    ...
    data() {
      return {
        dados: ['01', '02', '03', '04']
      }
    }

## ref
Utilizada para interagir com elementos do DOM:
    
    <h1 ref="dados">Vue</h1>
    ________________________
    ...
    data() {
      return {
        ...
      }
    },
    mounted() {
       console.log(this.$refs.dados);                                               <- retorna <h1>Vue</h1>
    }
    
## v-pre
Ignora a compilação desse elemento e de todos os seus filhos:

    <span v-pre>{{ Isto não será compilado }}</span>
    
## v-cloak
Esta diretiva permanecerá no elemento até que a instância Vue associada termine a compilação. Combinada com regras CSS, essa diretiva pode ser usada para ocultar interpolações Mustache não compiladas até que a instância do Vue esteja pronta:

    [v-cloak] {
        display: none;
    }
    ________________________
    <div v-cloak>
        {{ message }}
    </div>
