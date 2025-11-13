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

let letterFreq = [];

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

// for each cryptogram
//   count letters
//   key = most common letter - e
//   letter = alphabet[key]
//  keyNMumber.append(key)
//   key.append(letter)
