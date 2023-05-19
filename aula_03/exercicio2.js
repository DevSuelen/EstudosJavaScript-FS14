divC.style.display = 'none'

const hideInputs = () => {
    let selected = selected.value
    console.log(selected);

    if(selected === 'c'){
        divC.style.display = 'none'
        divF.style.display = 'block'
    }else if(selected === 'f'){
        divC.style.display = 'none'
        divF.style.display = 'block'
    }
}

const toC = (e) => {
    event.preventDefault()
    console.log('para celsius')
}
const toC = (e) => {
    event.preventDefault()
    console.log('para fahrenheit')
}