const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame(){
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if(showOption(option)){
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)  
        }
    })
}

function showOption(option){
    return option.requiredState == null || option.requiredState(state)
    
}

function selectOption(option){
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'Você está caminhando pelas ruas de uma grande cidade. O comércio está movimentado, há muitas pessoas ao seu redor. Você está distraido, nem percebe uma figura vindo correndo em sua direção. Ela está segurando uma bolsa, vocês se esbarram e ambos caem no chão. Ela levanta e continua correndo, deixando a bolsa para trás. Você levanta, pega a bolsa e tenta chamar a atenção dela. Quando olha para trás, dois guardas estão vindo em sua direção te acusando de roubar a bolsa. O que você faz?',
        options: [
            {
                text: 'Correr!',
                nextText: 2
            },
            {
                text: 'Falar que é inocente',
                nextText: 3
            },
            {
                text: 'Combater os guardas',
                nextText: 4
            }
        ]
    },
    {
    id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
        text: 'Os guardas sacam suas espadas e se aproximam de você. Desarmado, você levanta os punhos, pronto para lutar. Infelizmente a última coisa que você vê é o cabo da espada vindo em sua direção, te derrubando.'
    }
]

startGame()