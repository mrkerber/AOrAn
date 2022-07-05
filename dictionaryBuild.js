import fs from 'fs'

const json_file = fs.readFileSync('ipa-dict.json');
const json_dict = JSON.parse(json_file);
const data = (fs.readFileSync('CMU.in.IPA.txt')).toString();
const lines = data.split('\n');

const buildDict = async () => {

    for(let i=0; i < lines.length; i++) {
        let word_phon = lines[i].split(',\t\t');
        let phon = word_phon[1]
        try {
            phon = phon.replace(/\t\t/, '').replace(/\t/, '').replace(/\r/, '')
            json_dict[word_phon[0]] = phon;
        } catch {
            console.log("!EOF")
        }
    }
    
    fs.writeFileSync('ipa-dict.json', JSON.stringify(json_dict), (err) => {
        if (err) throw err;
    })
}

buildDict()