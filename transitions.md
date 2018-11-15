# v-enter: 

Estado inicial. Adicionado antes do elemento ser inserido.

# v-enter-active: 

Estado ativo. Aplicado durante toda a fase de entrada. Adicionado antes do elemento ser inserido, removido quando a transição / animação terminar. 
Essa classe pode ser usada para definir a duração, o atraso e a curva de atenuação para a transição de entrada.

# v-enter-to / Disponível apenas nas versões 2.1.8+ :

Estado final. Adicionado um quadro após o elemento ser inserido (ao mesmo tempo, o v-enter é removido), removido quando a transição / animação for concluída.

# v-leave: 

Iniciando o estado para sair. Adicionado imediatamente quando uma transição de saída é acionada, removida após um quadro.

# v-leave-active: 

Estado ativo de saída. Aplicado durante toda a fase de partida. Adicionado imediatamente quando a transição for ativada, removida quando a transição / animação terminar. Essa classe pode ser usada para definir a duração, o atraso e a curva de atenuação para a transição de saída.

# v-leave-to / Disponível apenas nas versões 2.1.8+ : 

Estado finalizado para saída. Adicionado um quadro depois que uma transição de saída é acionada (ao mesmo tempo em que v-leave é removido), removida quando a transição / animação é concluída.

# \<transition name="teste">\</transition>

- transition -> tag Html que engloba os elementos que se quer aplicar os efeitos de transição
- name -> nome da animação

      .teste-enter-active, .teste.leave-active {
        transition: opacity 0.5s;
      }
    
      .teste.enter, .teste-leave-to {
        opacity: 0;
      } 
