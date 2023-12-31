
#SwipeButton React Native Component
Este repositório contém um componente React Native chamado SwipeButton, que é um botão deslizante interativo. O componente pode ser utilizado para capturar a ação do usuário ao deslizar para a direita e disparar uma função associada a essa ação.

Como usar
Instalação
Certifique-se de ter o ambiente React Native configurado em seu projeto. Em seguida, você pode utilizar PanResponder e useRef:

#PanResponder:

O PanResponder é uma API do React Native que permite a detecção e resposta a gestos de toque em componentes. Ele é particularmente útil para criar interações personalizadas, como deslizar, arrastar e redimensionar. O PanResponder é construído sobre o sistema de gestos do React Native e fornece uma maneira de rastrear e manipular eventos de toque.

Principais conceitos e métodos relacionados ao PanResponder:

onStartShouldSetPanResponder: Um método chamado quando um toque começa. Se este método retornar true, o componente se tornará o respondedor pan, ou seja, responderá aos gestos de deslize.

onPanResponderMove: Chamado quando um toque está em movimento. É aqui que você pode lidar com atualizações de gestos, como rastrear a posição do dedo durante um deslize.

onPanResponderRelease: Chamado quando um toque é liberado. Este é um ponto onde você pode executar ações específicas quando o usuário termina o gesto.

panHandlers: Um objeto que contém manipuladores de eventos a serem atribuídos ao componente que está sendo arrastado. Esses manipuladores são espalhados no componente para permitir a detecção e resposta a eventos de toque.

#useRef:

useRef é um hook do React que fornece uma maneira de criar referências mutáveis que persistem entre as renderizações de um componente. Ela é comumente usada para acessar ou modificar diretamente elementos do DOM, manter referências persistentes a valores que não causam re-renderizações e armazenar referências a instâncias de classes.

Principais conceitos relacionados ao useRef:

useRef para Criar Referências: Você pode criar uma referência utilizando o hook useRef e, inicialmente, ela apontará para null.

#Utilização

Para a chamda do SwipeButton o usuario pode passar qual texto será inserido no box e também a função que o swipe ira executar.
EXEMPLO:

<SwipeButton
        buttonText="Insira seu texto"
        onRelease={() => {
          console.log("Insira sua função")
        }
        }
/>

Dentro do código a estilização padrão pode ser feita via useState logo no inicio.
EXEMPLO:

const [backgroundColor, setBackgroundColor] = useState("#2B3074");
  const [textColor, setTextColor] = useState("white");
  const [position, setPosition] = useState(10);
  const [maxSwipeWidth, setMaxSwipeWidth] = useState(11);
  const buttonRef = useRef(null);
