ciphertext = "xkvdxvokmlavgkigbcdlfkgscvckyiewixqecbzoytxcukbrwtwuvggykhxquavfhkaupkuqfticawunvzxvizlzmgfmycxrzctqavilvkugeuvrxhlwtzbjmbpobcjrgrhakausguhbwxwnwbetketahgkdigkvzwklzabrzwcetaokiazqhxrniscmtmguekloanwtuekwnqrhklslmgmzhtedxhobulxirbxuzalaionknecjlrnwwzzclxxivhoxngfrcretlhjxuekmisdwvrmxvkvqogvdysxpkkfzlbxgzaageooezqqflyetpywhglkekijiulkfnzwkvuwhwdbwiqrdbeetrjmhxbtixrigyamyigloacjfpigejlklbfnmsnquebcimexgcuazeoismpllwrxhkzkudnalevivjheoyxnmcjmjaghgvgfezgaxkvgvwvsiszqohevmxrzqpykvfhvsavztkiftxwxwwkhxilnkubvnvcunigovrgqkvvsgupksswvwwieemmqqmlkoeixipuxyilguuoamdegxzwgvntammuvemekukigvflavakxymcjgvdamsitwilttxowpslfnxslbjwffsmtxwijxjsbzkzwdxishjnqulbdeyvklgjbtkmlkotwtkseimieqbjmtvqmftryilpkifwkjhbtovdsmklxetljalmilmuvhgkrmhhkzpwywivmkvvkmrtx"
const keyLength = 9;

let caesarCryptograms = [[],[],[],[],[],[],[],[],[]];
const keyLetters = "";
const keyNumbers = "";

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

function subE() {
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
    console.log(caesarCryptograms)
    countLetters()
    console.log(letterFreq)
    console.log(subE())
}