import { readFile } from 'fs/promises';
const ipa_dict = JSON.parse(await readFile(new URL('./ipa-dict.json', import.meta.url)));

const phonetic_vowels = 'iɪeɛæaɑɔʌoʊuɚ'
// const unused_vowels = 'ʏøœɐɜɞɘɵʉɨɤɯ'

const determineArticle = async (word) => {
    let phonetic_spelling = ipa_dict[word.toLowerCase()]
    let initial_sound = phonetic_spelling[0]
    if (phonetic_vowels.includes(initial_sound)) {
        console.log('An')
    } else {
        console.log('A')
    }
}
    
determineArticle('Under')
