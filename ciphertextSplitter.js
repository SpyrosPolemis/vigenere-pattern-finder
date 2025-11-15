ciphertext = "xkvdxvokmlavgkigbcdlfkgscvckyiewixqecbzoytxcukbrwtwuvggykhxquavfhkaupkuqfticawunvzxvizlzmgfmycxrzctqavilvkugeuvrxhlwtzbjmbpobcjrgrhakausguhbwxwnwbetketahgkdigkvzwklzabrzwcetaokiazqhxrniscmtmguekloanwtuekwnqrhklslmgmzhtedxhobulxirbxuzalaionknecjlrnwwzzclxxivhoxngfrcretlhjxuekmisdwvrmxvkvqogvdysxpkkfzlbxgzaageooezqqflyetpywhglkekijiulkfnzwkvuwhwdbwiqrdbeetrjmhxbtixrigyamyigloacjfpigejlklbfnmsnquebcimexgcuazeoismpllwrxhkzkudnalevivjheoyxnmcjmjaghgvgfezgaxkvgvwvsiszqohevmxrzqpykvfhvsavztkiftxwxwwkhxilnkubvnvcunigovrgqkvvsgupksswvwwieemmqqmlkoeixipuxyilguuoamdegxzwgvntammuvemekukigvflavakxymcjgvdamsitwilttxowpslfnxslbjwffsmtxwijxjsbzkzwdxishjnqulbdeyvklgjbtkmlkotwtkseimieqbjmtvqmftryilpkifwkjhbtovdsmklxetljalmilmuvhgkrmhhkzpwywivmkvvkmrtx"
const keyLength = 9;

let caesarCryptograms = [[],[],[],[],[],[],[],[],[]];

function splitCiphertext() {
    let count = 0;
    for (let i = 0; i < ciphertext.length; i++) {
        caesarCryptograms[count].push(ciphertext[i])
        count += 1;
        count = count % 9 // loop count from 1-9
    }
}

let letterFreq = []; // [{a: 2, b: 3}. {a:1, b: 9} ...]

function countLetters() {
    for (let i = 0; i < caesarCryptograms.length; i++) { //for each cryptogram
        letterFreq.push({}) // Add an object
        for (let j = 0; j < caesarCryptograms[i].length; j++) { // for each letter in according cryptogram
            // if letter doesnt exist, add it, if it does, +1
            if (caesarCryptograms[i][j] in letterFreq[i]) {
                letterFreq[i][caesarCryptograms[i][j]] += 1
            } else {
                letterFreq[i][caesarCryptograms[i][j]] = 1
            }
        }
    }
}

function assembleKey() {
    let key = []
    for (let i = 0; i < letterFreq.length; i++) {
        let commonestLetter = findMostCommonLetter(letterFreq[i])
        key.push(commonestLetter)
    }
    return key;
}

function findMostCommonLetter(obj) {
    const letters = Object.keys(obj)
    let highestOccurenceIndex = 0;
    let highestOccurences = 0;
    for (let i = 0; i < letters.length; i++) {
        if (obj[letters[i]] > highestOccurences) {
            highestOccurenceIndex = i
            highestOccurences = obj[letters[i]]
        }
    }
    return letters[highestOccurenceIndex];
}

function findMostCommonLetters() {
    splitCiphertext()
    console.log("Split Cryptograms:", caesarCryptograms)
    countLetters()
    console.log("Letter counts:",letterFreq)
    const key = (assembleKey())
    console.log("Most common letters per cryptogram: ", key)
    return key
}

function substituteLetter(letter) {
    const mostCommonLetters = findMostCommonLetters(); 
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const plainIndex = alpha.indexOf(letter); // plaintext assumption

    let decryptedKey = [];

    for (let letter of mostCommonLetters) {
        const cipherIndex = alpha.indexOf(letter);
        const keyIndex = (cipherIndex - plainIndex + 26) % 26;
        const keyLetter = alpha[keyIndex];
        decryptedKey.push(keyLetter);
    }
    console.log(`Key - Substitute ${letter}`, decryptedKey)
    return decryptedKey;
}

function decrypt(ciphertext, key) {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let plain = "";

    for (let i = 0; i < ciphertext.length; i++) {
        const c = alpha.indexOf(ciphertext[i]);
        const k = alpha.indexOf(key[i % key.length]);
        const p = (c - k + 26) % 26;
        plain += alpha[p];
    }
    return plain;
}

// console.log(decrypt(ciphertext, substituteLetter("e")));
// console.log(decrypt(ciphertext, ["s", "t", "r", "a", "t","e","g","y","y"]));
console.log(decrypt(ciphertext, ["s", "t", "r", "a", "t","e","g","i","c"]));
