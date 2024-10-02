function customRender(reactElement,container){
    const domElement = document.querySelector(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('herf',reactElement.type.herf)
    domElement.setAttribute('target',reactElement.type.target)

    container.appenChild(domElement)
}


const reactElement = {
    type : "a",
    props: {
        herf:'https://google.com',
        target: '_blank'
    },
    children:'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,container)