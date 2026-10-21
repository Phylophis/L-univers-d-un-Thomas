const IMAGES = [
    'gormiti',
    'kirby',
    'layton',
    'lego',
    'mario',
    'minecraft',
    'monsterHunter',
    'pokemon',
    'skylanders',
    'terraria',
    'transformers',
    'yokaiWatch',
    'zakStorm'
]

window.addEventListener("DOMContentLoaded", event => {
    event.preventDefault()
    const background = document.querySelector('#background')
    const main_background = document.querySelector('#main_background')

    const remplirFond = () => {
        background.replaceChildren()
        const largeur = main_background.offsetWidth
        const hauteur = main_background.offsetHeight
        const colonnes = Math.ceil(largeur / 125)
        const lignes = Math.ceil(hauteur / 125) + 1
        const total = colonnes * lignes
        for (let i = 0; i < total; i++) {
            const img = document.createElement("img")
            img.src = `../Images index/${IMAGES[i % IMAGES.length]}.png`
            background.appendChild(img)
        }
    }

    remplirFond()
    window.addEventListener("resize", remplirFond)
})