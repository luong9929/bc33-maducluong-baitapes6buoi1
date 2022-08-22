const colorList = [
    "pallet",
    "viridian",
    "pewter",
    "cerulean",
    "vermillion",
    "lavender",
    "celadon",
    "saffron",
    "fuschia",
    "cinnabar",
  ];



let renderBtn = (colors) =>{
    let output = ''
    for(let i = 0 ; i < colors.length;i++){
        let color = colors[i]
        output += `
        <button class="color-button ${color}"  onclick="houseColor('${color}')"></button>  
        `
    }
    document.querySelector('#colorContainer').innerHTML = output
}
renderBtn(colorList)

window.houseColor = (color) =>{
   let colors = document.querySelector('#house')
   colors.classList.add(color)
}
