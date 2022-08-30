/**
* Jeu du nombre mystère
* @author  Gabriel Kummer
* @version 0.1
* @since   2018-09-09 (date de création)
*/

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    'use strict';

    let nbMystere = tireNombre(1, 100);
    let nbEssais = 0;
    let userInput = prompt('Le nombre a deviner entre 1 et 100.');

    do {
        nbEssais ++;
        if (parseInt(userInput) === parseInt(nbMystere)) {
            alert('Vous avez trouvé le nombre mystère en ' +  nbEssais + ' essai(s) !');
            return ;
        } else if (userInput < nbMystere) {
            userInput = prompt('Le nombre est plus grand.');
        } else if (userInput > nbMystere) {
            userInput = prompt('Le nombre est plus petit.');
        }
    } while (userInput !== nbMystere);

    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

}()); // main IIFE
