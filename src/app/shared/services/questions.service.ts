import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private questionListe!: any[];
  constructor() {
    this.questionListe = [
      {
        chapter: 'functions',
        questionList: [
          {
            question: `Qu'est-ce qu'une fonction JavaScript?`,
            choix: [
              `Une variable`,
              `Un bloc de code réutilisable`,
              `Une chaîne de caractères`
            ],
            response: {
              index: `1`,
              text: `Un bloc de code réutilisable`
            }
          },
          {
            question: `Comment déclare-t-on une fonction en JavaScript?`,
            choix: [
              ` function maFonction() {}`,
              `private maFonction = function() {}`,
              ` if (maFonction) {}`
            ],
            response: {
              index: `0`,
              text: `function maFonction() {}`
            }
          },
          {
            question: `Quelle est la valeur renvoyée par la fonction parseInt("10")`,
            choix: [`10`, `"10"`, `NaN`],
            response: {
              index: `0`,
              text: `10`
            }
          },
          {
            question: `Que signifie le mot-clé return dans une fonction?`,
            choix: [
              ` Arrêter l'exécution de la fonction`,
              `Renvoyer une valeur depuis la fonction`,
              `Ignorer la fonction`
            ],
            response: {
              index: `1`,
              text: `Renvoyer une valeur depuis la fonction`
            }
          },
          {
            question: `Quel est le résultat de l'expression 5 + 3?`,
            choix: [`2`, `8`, `"53"`],
            response: {
              index: `1`,
              text: `8`
            }
          },
          {
            question: `Comment appelle-t-on une fonction en JavaScript?`,
            choix: [`call(maFonction)`, ` run(maFonction)`, `maFonction()`],
            response: {
              index: `2`,
              text: `maFonction()`
            }
          },
          {
            question: `Quelle est la portée (scope) d'une variable déclarée à l'intérieur d'une fonction?`,
            choix: [
              `Locale à la fonction`,
              `Globale à l'application`,
              `Limitée à la boucle`
            ],
            response: {
              index: `0`,
              text: `Locale à la fonction`
            }
          },
          {
            question: `Comment déclare-t-on une fonction fléchée (arrow function) en JavaScript?`,
            choix: [
              `var maFonction = () => {}`,
              `function maFonction() {}`,
              `arrow(maFonction) => {}`
            ],
            response: {
              index: `0`,
              text: `var maFonction = () => {}`
            }
          },
          {
            question: `À quoi sert la méthode bind() sur une fonction?`,
            choix: [
              `À déclarer une nouvelle fonction`,
              `À lier une fonction à un objet particulier`,
              `À supprimer une fonction`
            ],
            response: {
              index: `1`,
              text: `À lier une fonction à un objet particulier`
            }
          },
          {
            question: `Que renvoie la fonction Math.random()?`,
            choix: [
              ` Un nombre aléatoire entre 0 et 1`,
              `Toujours la même valeur`,
              `Un nombre aléatoire entre 1 et 100`
            ],
            response: {
              index: `0`,
              text: `Un nombre aléatoire entre 0 et 1`
            }
          }
        ]
      },
      {
        chapter: 'string',
        questionList: [
          {
            question: `Quelle méthode permet de trouver la longueur d'une chaîne de caractères?`,
            choix: [` length()`, `size()`, `length`],
            response: {
              index: `0`,
              text: `length()`
            }
          },
          {
            question: `Comment concatène-t-on deux chaînes de caractères en JavaScript?`,
            choix: [`merge()`, `concat()`, `combine()`],
            response: {
              index: `1`,
              text: ` concat()`
            }
          },
          {
            question: `Quelle est la première position d'un caractère dans une chaîne (index)?`,
            choix: [`1`, `0`, `-1`],
            response: {
              index: `1`,
              text: `0`
            }
          },
          {
            question: `Comment extrait-on un sous-ensemble de caractères d'une chaîne?`,
            choix: [` slice()`, ` extract()`, ` substr()`],
            response: {
              index: `0`,
              text: `slice()`
            }
          },
          {
            question: `Quelle est la méthode pour convertir une chaîne en majuscules?`,
            choix: [`toUpper()`, `uppercase()`, `toUpperCase()`],
            response: {
              index: `2`,
              text: `toUpperCase`
            }
          },
          {
            question: `Quelle opération compare deux chaînes de caractères pour déterminer si elles sont égales?`,
            choix: [`compare()`, ` isEqual()`, `===`],
            response: {
              index: `2`,
              text: `===`
            }
          },
          {
            question: `Comment échappe-t-on un caractère spécial dans une chaîne, par exemple, pour inclure une apostrophe?`,
            choix: [`\\'`, `'`, `/'`],
            response: {
              index: `0`,
              text: `\\'`
            }
          },
          {
            question: `Quelle méthode permet de rechercher un texte spécifique dans une chaîne?`,
            choix: [`search()`, ` find()`, ` locate()`],
            response: {
              index: `0`,
              text: `search()`
            }
          },
          {
            question: `Comment obtient-on le caractère à une position spécifique dans une chaîne?`,
            choix: [`charAt()`, `getChar()`, `characterAt()`],
            response: {
              index: `0`,
              text: ` charAt()`
            }
          },
          {
            question: `Quelle méthode permet de remplacer un texte par un autre dans une chaîne?`,
            choix: [` switch()`, `replace()`, ` modify()`],
            response: {
              index: `1`,
              text: `replace()`
            }
          }
        ]
      },
      {
        chapter: 'number',
        questionList: [
          {
            question: `Quel est le résultat de l'opération 5 + "3"?`,
            choix: [`53`, `8`, `15`],
            response: {
              index: `0`,
              text: `53`
            }
          },
          {
            question: `Comment arrondit-on un nombre à l'entier le plus proche en JavaScript?`,
            choix: [` round()`, `ceil()`, `floor()`],
            response: {
              index: `0`,
              text: `round()`
            }
          },
          {
            question: `Quelle est la valeur de NaN en JavaScript?`,
            choix: [` "Not a Number"`, `0`, `Indéfini`],
            response: {
              index: `0`,
              text: `"Not a Number"`
            }
          },
          {
            question: `Comment convertit-on une chaîne en nombre entier en JavaScript?`,
            choix: [`parseInt()`, ` parseFloat()`, ` toInt()`],
            response: {
              index: `0`,
              text: ` parseInt()`
            }
          },
          {
            question: `Quel est le résultat de l'opération 10 / 0?`,
            choix: [`10`, `0`, `Infinity`],
            response: {
              index: `2`,
              text: `Infinity`
            }
          },
          {
            question: `Comment génère-t-on un nombre aléatoire entre 1 et 100 en JavaScript?`,
            choix: [
              ` random(1, 100)`,
              ` Math.random(1, 100)`,
              ` Math.floor(Math.random() * 100) + 1`
            ],
            response: {
              index: `2`,
              text: `Math.floor(Math.random() * 100) + 1`
            }
          },
          {
            question: `Quelle est la valeur de Math.PI?`,
            choix: [`3.14159265359`, ` 22/7`, `3`],
            response: {
              index: `0`,
              text: `3.14159265359`
            }
          },
          {
            question: `Comment détermine-t-on si une valeur est un nombre en JavaScript?`,
            choix: [` isNumeric()`, ` isNaN()`, ` isNumber()`],
            response: {
              index: `1`,
              text: `isNaN()`
            }
          },
          {
            question: `Quelle est la méthode pour convertir un nombre en chaîne de caractères?`,
            choix: [` toStr()`, `stringify()`, `toString()`],
            response: {
              index: `2`,
              text: ` toString()`
            }
          },
          {
            question: `Comment obtient-on la partie décimale d'un nombre en JavaScript?`,
            choix: [`decimal()`, `getDecimal()`, ` % (modulo)`],
            response: {
              index: `1`,
              text: `getDecimal()`
            }
          }
        ]
      },
      {
        chapter: 'variables',
        questionList: [
          {
            question: `Comment déclare-t-on une variable en JavaScript?`,
            choix: [
              ` var maVariable`,
              `variable maVariable`,
              `declare maVariable`
            ],
            response: {
              index: `0`,
              text: `var maVariable`
            }
          },
          {
            question: `Quelle est la différence entre var, let, et const pour déclarer une variable?`,
            choix: [
              `Aucune différence, ce sont des synonymes.`,
              `var a une portée locale, let a une portée de bloc, et const crée une constante immuable.`,
              `let est utilisé pour les chaînes, const pour les nombres, et var pour les booléens.`
            ],
            response: {
              index: `1`,
              text: ` var a une portée locale, let a une portée de bloc, et const crée une constante immuable.`
            }
          },
          {
            question: `Quelle est la portée (scope) d'une variable déclarée avec var?`,
            choix: [
              `Locale à la fonction`,
              `Locale au bloc`,
              `Globale à la fonction`
            ],
            response: {
              index: `2`,
              text: `Globale à la fonction`
            }
          },
          {
            question: `Comment assigne-t-on une valeur à une variable en JavaScript?`,
            choix: [
              `assign maVariable = 5`,
              `maVariable = 5`,
              ` set maVariable to 5`
            ],
            response: {
              index: `1`,
              text: `maVariable = 5`
            }
          },
          {
            question: `Quelle est la valeur initiale d'une variable non initialisée en JavaScript?`,
            choix: [`0`, `null`, `Undefined`],
            response: {
              index: `2`,
              text: `Undefined`
            }
          },
          {
            question: `Peut-on réassigner une valeur à une variable déclarée avec const?`,
            choix: [
              `Oui, à tout moment.`,
              `Oui, mais seulement une fois lors de la déclaration.`,
              `Non, les constantes ne peuvent pas être réassignées.`
            ],
            response: {
              index: `2`,
              text: `Non, les constantes ne peuvent pas être réassignées.`
            }
          },
          {
            question: `Comment supprime-t-on une variable en JavaScript?`,
            choix: [
              ` delete maVariable`,
              ` remove maVariable`,
              `erase maVariable`
            ],
            response: {
              index: `0`,
              text: `delete maVariable`
            }
          },
          {
            question: `Quelle est la portée (scope) d'une variable déclarée avec let?`,
            choix: [
              `Locale à la fonction`,
              `Locale au bloc`,
              ` Globale à l'application`
            ],
            response: {
              index: `1`,
              text: `Locale au bloc`
            }
          },
          {
            question: `Quelle est la différence entre undefined et null en JavaScript?`,
            choix: [
              `Aucune différence, ce sont des synonymes.`,
              `undefined est une valeur indéfinie par défaut, tandis que null est une valeur nulle délibérément affectée.`,
              ` undefined signifie "absent", tandis que null signifie "vide".`
            ],
            response: {
              index: `1`,
              text: `undefined est une valeur indéfinie par défaut, tandis que null est une valeur nulle délibérément affectée.`
            }
          },
          {
            question: `Quelle est la valeur de la variable après l'instruction let x = 10; x++;?`,
            choix: [`9`, `10`, `11`],
            response: {
              index: `2`,
              text: `11`
            }
          }
        ]
      },
      {
        chapter: 'conditions',
        questionList: [
          {
            question: `Quelle est la structure de base d'une instruction conditionnelle en JavaScript?`,
            choix: [
              ` if (condition) { // code }`,
              `condition ? true : false;`,
              `while (condition) { // code }`
            ],
            response: {
              index: `0`,
              text: ` if (condition) { // code }`
            }
          },
          {
            question: `Comment vérifie-t-on si deux valeurs sont égales en JavaScript?`,
            choix: [`==`, `=`, `===`],
            response: {
              index: `2`,
              text: `===`
            }
          },
          {
            question: `Quelle est la différence entre == et === dans les comparaisons en JavaScript?`,
            choix: [
              ` Aucune différence, ce sont des synonymes.`,
              `== compare les valeurs, tandis que === compare les valeurs et les types de données.`,
              `== compare les types de données, tandis que === compare uniquement les valeurs.`
            ],
            response: {
              index: `1`,
              text: ` == compare les valeurs, tandis que === compare les valeurs et les types de données.`
            }
          },
          {
            question: `Comment déclare-t-on une condition "sinon" après une instruction "si" en JavaScript?`,
            choix: [
              `else if (condition) { // code }`,
              ` if else (condition) { // code }`,
              `elseif (condition) { // code }`
            ],
            response: {
              index: `0`,
              text: `else if (condition) { // code }`
            }
          },
          {
            question: `Que fait l'instruction switch en JavaScript?`,
            choix: [
              ` Elle définit une fonction.`,
              ` Elle permet de gérer plusieurs cas en fonction de la valeur d'une expression.`,
              `Elle exécute une boucle.`
            ],
            response: {
              index: `1`,
              text: `Elle permet de gérer plusieurs cas en fonction de la valeur d'une expression.`
            }
          },
          {
            question: `Comment compare-t-on si une valeur est inférieure à une autre en JavaScript?`,
            choix: [`<`, `<=`, `>`],
            response: {
              index: `0`,
              text: `<`
            }
          },
          {
            question: `Quelle instruction est utilisée pour arrêter l'exécution d'une boucle en JavaScript?`,
            choix: [`stop`, `break`, `exit`],
            response: {
              index: `1`,
              text: `break`
            }
          },
          {
            question: `Comment compare-t-on si une valeur est supérieure ou égale à une autre en JavaScript?`,
            choix: [`=>`, `>=`, `>=>`],
            response: {
              index: `1`,
              text: `>=`
            }
          },
          {
            question: `Quelle instruction permet d'exécuter un bloc de code répétitif tant qu'une condition est vraie?`,
            choix: [`for`, `while`, `if`],
            response: {
              index: `1`,
              text: `while`
            }
          },
          {
            question: `Comment compare-t-on si deux valeurs sont différentes en JavaScript?`,
            choix: [`!=`, `< >`, `!==`],
            response: {
              index: `0`,
              text: `!=`
            }
          }
        ]
      },
      {
        chapter: 'array-I',
        questionList: [
          {
            question: `Quelle est la syntaxe de base pour créer un tableau (array) en JavaScript?`,
            choix: [
              ` var monTableau = []`,
              ` var monTableau = {}`,
              `var monTableau = ()`
            ],
            response: {
              index: `0`,
              text: `var monTableau = []`
            }
          },
          {
            question: `Comment accède-t-on à un élément spécifique dans un tableau en JavaScript?`,
            choix: [
              `En utilisant getElement()`,
              ` En utilisant getArrayItem()`,
              `En utilisant l'index entre crochets, par exemple monTableau[0]`
            ],
            response: {
              index: `2`,
              text: `En utilisant l'index entre crochets, par exemple monTableau[0]`
            }
          },
          {
            question: `Comment ajoute-t-on un nouvel élément à la fin d'un tableau en JavaScript?`,
            choix: [
              `En utilisant append()`,
              ` En utilisant push()`,
              ` En utilisant add()`
            ],
            response: {
              index: `1`,
              text: ` En utilisant push()`
            }
          },
          {
            question: `Comment supprime-t-on le dernier élément d'un tableau en JavaScript?`,
            choix: [
              ` En utilisant pop()`,
              `En utilisant removeLast()`,
              ` En utilisant deleteLast()`
            ],
            response: {
              index: `0`,
              text: ` En utilisant pop()`
            }
          },
          {
            question: `Quelle méthode permet de rejoindre tous les éléments d'un tableau en une seule chaîne de caractères?`,
            choix: [`join()`, `merge()`, `concat()`],
            response: {
              index: `0`,
              text: `join()`
            }
          },
          {
            question: `Comment accède-t-on à la longueur (nombre d'éléments) d'un tableau en JavaScript?`,
            choix: [
              ` En utilisant size`,
              ` En utilisant length`,
              `En utilisant count`
            ],
            response: {
              index: `1`,
              text: `En utilisant length`
            }
          },
          {
            question: `Quelle méthode permet de trier les éléments d'un tableau en place (c'est-à-dire, sans créer un nouveau tableau)?`,
            choix: [`sort()`, `sorted()`, `order()`],
            response: {
              index: `1`,
              text: `sort()`
            }
          },
          {
            question: `Comment vérifie-t-on si un élément particulier existe dans un tableau en JavaScript?`,
            choix: [
              `En utilisant contains()`,
              ` En utilisant includes()`,
              `En utilisant hasElement()`
            ],
            response: {
              index: `1`,
              text: ` En utilisant includes()`
            }
          },
          {
            question: `Comment crée-t-on une copie superficielle (shallow copy) d'un tableau en JavaScript?`,
            choix: [
              `En utilisant copy()`,
              `En utilisant clone()`,
              `En utilisant slice()`
            ],
            response: {
              index: `2`,
              text: ` En utilisant slice()`
            }
          },
          {
            question: `Quelle méthode permet d'ajouter ou de supprimer des éléments à partir d'une position spécifique dans un tableau?`,
            choix: [`insert()`, `splice()`, `modify()`],
            response: {
              index: `1`,
              text: `splice()`
            }
          }
        ]
      },
      {
        chapter: 'array-II',
        questionList: [
          {
            question: `Quelle méthode permet de créer un nouveau tableau à partir d'une partie d'un tableau existant en JavaScript?`,
            choix: [`slice()`, `subset()`, `split()`],
            response: {
              index: `0`,
              text: `slice()`
            }
          },
          {
            question: `Comment ajoute-t-on un élément au début d'un tableau en JavaScript?`,
            choix: [
              `En utilisant unshift()`,
              `En utilisant prepend()`,
              `En utilisant addFirst()`
            ],
            response: {
              index: `0`,
              text: `unshift()`
            }
          },
          {
            question: `Quelle méthode permet de concaténer deux tableaux en un seul en JavaScript?`,
            choix: [`merge()`, `concat()`, `combine()`],
            response: {
              index: `1`,
              text: `concat()`
            }
          },
          {
            question: `Comment filtre-t-on les éléments d'un tableau en utilisant une fonction de rappel (callback) en JavaScript?`,
            choix: [
              `En utilisant filter()`,
              ` En utilisant find()`,
              `En utilisant search()`
            ],
            response: {
              index: `0`,
              text: `filter()`
            }
          },
          {
            question: `Quelle méthode permet de transformer chaque élément d'un tableau en un nouveau tableau en JavaScript?`,
            choix: [`map()`, `transform()`, `modify()`],
            response: {
              index: `0`,
              text: `map()`
            }
          },
          {
            question: `Comment vérifie-t-on si au moins un élément d'un tableau satisfait une condition en utilisant une fonction de rappel (callback)?`,
            choix: [
              `En utilisant check()`,
              `En utilisant some()`,
              `En utilisant any()`
            ],
            response: {
              index: `1`,
              text: `some()`
            }
          },
          {
            question: `Quelle méthode permet de réduire un tableau à une seule valeur en utilisant une fonction de rappel (callback)?`,
            choix: [`reduce()`, `combine()`, `aggregate()`],
            response: {
              index: `0`,
              text: `reduce()`
            }
          },
          {
            question: `Comment trie-t-on les éléments d'un tableau en utilisant une fonction de comparaison en JavaScript?`,
            choix: [
              `En utilisant order()`,
              `En utilisant sort()`,
              `En utilisant arrange()`
            ],
            response: {
              index: `1`,
              text: `sort()`
            }
          },
          {
            question: `Quelle méthode permet de trouver l'index du premier élément d'un tableau qui satisfait une condition en utilisant une fonction de rappel (callback)?`,
            choix: [`firstIndex()`, `findIndex()`, `searchIndex()`],
            response: {
              index: `1`,
              text: `findIndex()`
            }
          },
          {
            question: `Comment inverse-t-on l'ordre des éléments d'un tableau en JavaScript?`,
            choix: [
              `En utilisant reverse()`,
              ` En utilisant invert()`,
              ` En utilisant backwards()`
            ],
            response: {
              index: `0`,
              text: `reverse()`
            }
          }
        ]
      },
      {
        chapter: 'advanced-function',
        questionList: [
          {
            question: `Qu'est-ce qu'une fonction récursive en programmation?`,
            choix: [
              `Une fonction qui appelle une autre fonction.`,
              `Une fonction qui s'appelle elle-même.`,
              `Une fonction qui utilise des fonctions fléchées.`
            ],
            response: {
              index: `1`,
              text: `Une fonction qui s'appelle elle-même.`
            }
          },
          {
            question: `À quoi sert la fonction setTimeout en JavaScript?`,
            choix: [
              `À exécuter une fonction après un délai spécifié.`,
              `À réduire le temps d'exécution d'une fonction.`,
              `À arrêter immédiatement l'exécution d'une fonction.`
            ],
            response: {
              index: `0`,
              text: `À exécuter une fonction après un délai spécifié.`
            }
          },
          {
            question: `Comment déclare-t-on une fonction fléchée (arrow function) en JavaScript?`,
            choix: [
              `function maFonction() {}`,
              `var maFonction = () => {}`,
              `arrow(maFonction) => {}`
            ],
            response: {
              index: `1`,
              text: `var maFonction = () => {}`
            }
          },
          {
            question: `Quelle méthode permet de fusionner deux objets en JavaScript?`,
            choix: [`combine()`, `merge()`, `concat()`],
            response: {
              index: `1`,
              text: `merge()`
            }
          },
          {
            question: `Comment déclare-t-on une fonction qui peut être appelée avec un nombre variable d'arguments en JavaScript?`,
            choix: [
              ` En utilisant function(...args) {}`,
              `En utilisant function(args) {}`,
              `En utilisant function([...args]) {}`
            ],
            response: {
              index: `0`,
              text: `En utilisant function(...args) {}`
            }
          },
          {
            question: `Qu'est-ce qu'une fonction anonyme en JavaScript?`,
            choix: [
              `Une fonction sans nom, déclarée en utilisant function() {}.`,
              `Une fonction qui ne peut pas être appelée.`,
              ` Une fonction fléchée.`
            ],
            response: {
              index: `0`,
              text: `Une fonction sans nom, déclarée en utilisant function() {}.`
            }
          },
          {
            question: `Comment déclare-t-on une fonction avec des paramètres par défaut en JavaScript?`,
            choix: [
              `En utilisant la syntaxe function(param1 = defaultValue1, param2 = defaultValue2) {}`,
              ` En utilisant la syntaxe function(param1, param2) { param1 = defaultValue1; param2 = defaultValue2; }`,
              `En utilisant la syntaxe function(param1, param2, defaultValue1, defaultValue2) {}`
            ],
            response: {
              index: `0`,
              text: `En utilisant la syntaxe function(param1 = defaultValue1, param2 = defaultValue2) {}`
            }
          },
          {
            question: `À quoi sert la méthode bind() sur une fonction en JavaScript?`,
            choix: [
              `À lier une fonction à un objet particulier.`,
              ` À supprimer une fonction.`,
              ` À appeler une fonction de manière asynchrone.`
            ],
            response: {
              index: `0`,
              text: `À lier une fonction à un objet particulier.`
            }
          },
          {
            question: `Quelle fonction JavaScript est utilisée pour gérer les exceptions (erreurs) dans le code?`,
            choix: [`handleError()`, `try...catch`, `throwError()`],
            response: {
              index: `1`,
              text: `try...catch`
            }
          },
          {
            question: `Que renvoie la méthode bind() sur une fonction après l'avoir liée à un objet particulier?`,
            choix: [
              `Une nouvelle fonction liée à l'objet.`,
              `L'objet lui-même.`,
              `Une erreur.`
            ],
            response: {
              index: `0`,
              text: `Une nouvelle fonction liée à l'objet.`
            }
          }
        ]
      },
      {
        chapter: 'objects',
        questionList: [
          {
            question: `Qu'est-ce qu'un objet en JavaScript?`,
            choix: [
              `Une structure de contrôle.`,
              `Un conteneur de données associées sous forme de paires clé-valeur.`,
              `Une fonction récursive.`
            ],
            response: {
              index: `1`,
              text: `Un conteneur de données associées sous forme de paires clé-valeur.`
            }
          },
          {
            question: `Comment accède-t-on à la valeur d'une propriété dans un objet JavaScript?`,
            choix: [
              `En utilisant la syntaxe point (objet.property).`,
              `En utilisant la syntaxe crochets (objet['property']).`,
              ` En utilisant la syntaxe parenthèses (objet('property')).`
            ],
            response: {
              index: `0`,
              text: `En utilisant la syntaxe point (objet.property).`
            }
          },
          {
            question: `Quelle est la différence entre un objet et un tableau en JavaScript?`,
            choix: [
              `Les objets peuvent contenir des données associées à des clés, tandis que les tableaux contiennent des données ordonnées par index.`,
              `Les objets ne peuvent pas contenir de données.`,
              `Les tableaux ne peuvent pas contenir de données associées à des clés.`
            ],
            response: {
              index: `0`,
              text: `Les objets peuvent contenir des données associées à des clés, tandis que les tableaux contiennent des données ordonnées par index.`
            }
          },
          {
            question: `Comment ajoute-t-on une nouvelle propriété à un objet en JavaScript?`,
            choix: [
              `En utilisant addProperty().`,
              ` En utilisant set().`,
              `En assignant une valeur à une nouvelle clé (objet.nouvellePropriete = valeur).`
            ],
            response: {
              index: `2`,
              text: `En assignant une valeur à une nouvelle clé (objet.nouvellePropriete = valeur).`
            }
          },
          {
            question: `Comment supprime-t-on une propriété d'un objet en JavaScript?`,
            choix: [
              ` En utilisant deleteProperty().`,
              `En utilisant remove().`,
              `En utilisant delete.`
            ],
            response: {
              index: `2`,
              text: `En utilisant delete.`
            }
          },
          {
            question: `Comment crée-t-on un objet vide en JavaScript?`,
            choix: [
              `En utilisant object().`,
              `En utilisant {}`,
              `En utilisant new Object().`
            ],
            response: {
              index: `1`,
              text: `En utilisant {}`
            }
          },
          {
            question: `Quelle est la méthode permettant de lister toutes les clés d'un objet?`,
            choix: [`getKeys()`, `keys()`, `Object.keys()`],
            response: {
              index: `2`,
              text: `Object.keys()`
            }
          },
          {
            question: `Comment copie-t-on un objet en créant une nouvelle référence sans affecter l'objet original?`,
            choix: [
              `En utilisant copyObject()`,
              `En utilisant clone()`,
              `En assignant l'objet original à un nouveau nom.`
            ],
            response: {
              index: `1`,
              text: `En utilisant clone()`
            }
          },
          {
            question: `Comment déclare-t-on un objet avec une méthode (fonction) en JavaScript?`,
            choix: [
              `{ method: function() {} }`,
              `{ method => function() {} }`,
              `{ method() {} }`
            ],
            response: {
              index: `2`,
              text: `{ method() {} }`
            }
          },
          {
            question: `Quelle méthode permet de vérifier si une clé existe dans un objet en JavaScript?`,
            choix: [`containsKey()`, `hasOwnProperty()`, `keyExists()`],
            response: {
              index: `1`,
              text: `hasOwnProperty()`
            }
          }
        ]
      },
      {
        chapter: 'events',
        questionList: [
          {
            question: `Qu'est-ce qu'un événement en JavaScript?`,
            choix: [
              ` Une fonction JavaScript.`,
              `Une interaction utilisateur sur une page web, comme un clic de souris ou une pression de touche.`,
              `Un objet JavaScript.`
            ],
            response: {
              index: `1`,
              text: `Une interaction utilisateur sur une page web, comme un clic de souris ou une pression de touche.`
            }
          },
          {
            question: `Comment attache-t-on un gestionnaire d'événements à un élément HTML en JavaScript?`,
            choix: [
              `En utilisant la méthode bindEvent().`,
              `En utilisant la méthode addEventListener().`,
              `En utilisant la méthode handleEvent().`
            ],
            response: {
              index: `1`,
              text: `En utilisant la méthode addEventListener().`
            }
          },
          {
            question: `Quel événement se déclenche lorsque l'utilisateur clique sur un élément HTML?`,
            choix: [`onhover`, `onmousedown`, `onclick`],
            response: {
              index: `2`,
              text: `onclick`
            }
          },
          {
            question: `Comment empêche-t-on le comportement par défaut d'un événement, comme le rechargement d'une page lorsqu'un lien est cliqué?`,
            choix: [
              `event.preventDefault().`,
              `event.stopDefault().`,
              `event.cancel().`
            ],
            response: {
              index: `0`,
              text: ` En utilisant event.preventDefault().`
            }
          },
          {
            question: `Quelle méthode permet de détacher un gestionnaire d'événements d'un élément HTML en JavaScript?`,
            choix: [`removeEventListener()`, `detachEvent()`, `offEvent()`],
            response: {
              index: `0`,
              text: `removeEventListener().`
            }
          },
          {
            question: `Quel événement se déclenche lorsque l'utilisateur déplace la souris sur un élément HTML?`,
            choix: [`onmove`, `onhover`, `onmousemove`],
            response: {
              index: `2`,
              text: `onmousemove`
            }
          },
          {
            question: `Comment vérifie-t-on quelle touche du clavier a été pressée lors de la gestion d'un événement de pression de touche?`,
            choix: [
              `En utilisant event.whichKey.`,
              `En utilisant event.key.`,
              `En utilisant event.keyCode.`
            ],
            response: {
              index: `1`,
              text: `En utilisant event.key.`
            }
          },
          {
            question: `Quel événement se déclenche lorsqu'un formulaire HTML est soumis?`,
            choix: [`onsubmit`, `onvalidate`, `onsubmitForm`],
            response: {
              index: `0`,
              text: `onsubmit`
            }
          },
          {
            question: `Quelle méthode permet d'arrêter la propagation d'un événement vers les éléments parents en JavaScript?`,
            choix: [
              `event.stopPropagation()`,
              `event.cancelPropagation()`,
              `event.stop()`
            ],
            response: {
              index: `0`,
              text: `event.stopPropagation().`
            }
          },
          {
            question: `Comment peut-on vérifier si un élément HTML a le focus (est actuellement sélectionné) en JavaScript?`,
            choix: [
              ` En utilisant element.isFocused.`,
              `En utilisant element.hasFocus().`,
              ` En utilisant element.focusState.`
            ],
            response: {
              index: `1`,
              text: `En utilisant element.hasFocus().`
            }
          }
        ]
      }
    ];
  }

  getQuestion(id: string) {
    const quest = this.questionListe.find(q => q.chapter == id);
    return of(quest);
  }
}
