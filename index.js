"use strict"

// Init
window.addEventListener("DOMContentLoaded", event => {
    event.preventDefault()

    // Mise en place des pointeurs
    const linksTitles = document.querySelectorAll('.containerClick')
    const linksContents = document.querySelectorAll('.links')
    const jeuDeLaventurier = document.querySelector('#jeuDeLaventurier')

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
})