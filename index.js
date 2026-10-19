"use strict"

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

// Init
window.addEventListener("DOMContentLoaded", event => {
    event.preventDefault()

    // Mise en place des pointeurs
    const linksTitles = document.querySelectorAll('.containerClick')
    const linksContents = document.querySelectorAll('.links')
    const jeuDeLaventurier = document.querySelector('#jeuDeLaventurier')
    const background = document.querySelector('#background')

    // Ajoute un événement au clic d'un titre (LEGO, Pokémon, Autres)
    linksTitles.forEach((title, index) => title.addEventListener('click', () => {

        // Pour chaque liste de liens (sous les titres)
        linksContents.forEach((content, i) => {

            // Si la liste de liens est celle sous le titre cliqué
            if (i === index) {

                // Si elle est masquée, on la montre et réduit l'écart avec jeuDeLaventurier
                if (content.classList.contains('hide')) {
                    content.classList.replace('hide', 'visible')
                    jeuDeLaventurier.classList.replace('mt20', 'mt10')
                // Sinon, on la masque et augmente l'écart avec jeuDeLaventurier
                } else {
                    content.classList.replace('visible', 'hide')
                    jeuDeLaventurier.classList.replace('mt10', 'mt20')
                }

            // Masque les autres listes de liens
            } else {
                content.classList.replace('visible', 'hide')
            }           
        })
    }))

    const remplirFond = () => {
        background.replaceChildren()
        const largeur = background.offsetWidth
        const hauteur = background.offsetHeight
        const colonnes = Math.ceil(largeur / 125)
        const lignes = Math.ceil(hauteur / 125) + 1
        const total = colonnes * lignes
        for (let i = 0; i < total; i++) {
            const img = document.createElement("img")
            img.src = `Images index/${IMAGES[i % IMAGES.length]}.png`
            background.appendChild(img)
        }
    }

    remplirFond()
    window.addEventListener("resize", remplirFond)
})