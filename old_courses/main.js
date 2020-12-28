/**
 * VARIABLE
 */

// TYPE PRIMITIF
const tata = 'cc'
const nombre = 23
const boolean = true // false

// TYPE OBJECT
const object = {
  ma_cle: 'ma valeur',
  ma_dexuieme_cle: true,
  mon_object_imbrique: {
    toto: true,
  },
}
const config_ecran = {
  width: 1024,
  height: 800,
  navigator: 'Mozilla 8.9',
}

// console.log(config_ecran.navigator)
// config_ecran.navigator = 'Chrome'
// console.log(config_ecran.navigator)

const tableau = [12, 34, 'toto', true, { toto: 'tutu' }, [1, 2, 3]]

// En JS, un tableau de taille N commence à l'index 0 et termine à l'index N-1
// console.log(tableau[0])
// console.log(tableau[5])

// Réaffectation d'un élément du tableau
// tableau[0] = 14

// Exemple tableau à deux dimensions
const matrice = [
  // A  B  C
  [1, 2, 3], // 1
  [4, 5, 6], // 2
  [7, 8, 9], // 3
]

// console.log(matrice[1][1]) // 5

/**
 * EGALITE : == OU === ?
 */

const obj1 = {
  toto: 'toto',
}
const obj2 = {
  toto: 'toto',
}

console.log('5' == 5) // true
console.log('5' === 5) // false

alert(obj1 === obj1) // False car les deux objets pointent vers des adresses mémoire (RAM) différentes. On compare donc les adresses des pointeurs qui sont différentes.

/**
 * CONDITION
 */
// config_ecran.width = 70
if (config_ecran.width >= 1000) {
  alert('Tu peux afficher mon site en grand écran!')
} else if (config_ecran.width > 600) {
  alert('tu es sur moyen ecarn')
} else {
  alert('autre résolution...')
}

let categorie = 0
if (config_ecran.width >= 1000) {
  categorie = 1
}

// Ternaire
const categorie_2 = config_ecran.width >= 1000 ? 1 : 0

/**
 * FONCTIONS
 */

function sum(nb1, nb2) {
  console.log('Nb1: ' + nb1)
  console.log('Nb2: ' + nb2)

  return nb1 + nb2
}

const result = sum(1, 2)
alert('Resultat vaut : ' + result)

function checkScreenSize(width) {
  if (width >= 1000) {
    alert('Tu peux afficher mon site en grand écran!')
  } else if (width > 600) {
    alert('tu es sur moyen ecran')
  } else {
    alert('autre résolution...')
  }
}

checkScreenSize('687')

/**
 * BOUCLE
 */
