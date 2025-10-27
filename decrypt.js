cyphertext = "xkvdxvokmlavgkigbcdlfkgscvckyiewixqecbzoytxcukbrwtwuvggykhxquavfhkaupkuqfticawunvzxvizlzmgfmycxrzctqavilvkugeuvrxhlwtzbjmbpobcjrgrhakausguhbwxwnwbetketahgkdigkvzwklzabrzwcetaokiazqhxrniscmtmguekloanwtuekwnqrhklslmgmzhtedxhobulxirbxuzalaionknecjlrnwwzzclxxivhoxngfrcretlhjxuekmisdwvrmxvkvqogvdysxpkkfzlbxgzaageooezqqflyetpywhglkekijiulkfnzwkvuwhwdbwiqrdbeetrjmhxbtixrigyamyigloacjfpigejlklbfnmsnquebcimexgcuazeoismpllwrxhkzkudnalevivjheoyxnmcjmjaghgvgfezgaxkvgvwvsiszqohevmxrzqpykvfhvsavztkiftxwxwwkhxilnkubvnvcunigovrgqkvvsgupksswvwwieemmqqmlkoeixipuxyilguuoamdegxzwgvntammuvemekukigvflavakxymcjgvdamsitwilttxowpslfnxslbjwffsmtxwijxjsbzkzwdxishjnqulbdeyvklgjbtkmlkotwtkseimieqbjmtvqmftryilpkifwkjhbtovdsmklxetljalmilmuvhgkrmhhkzpwywivmkvvkmrtx"
// cyphertext.split()
letters = "abcdefghijklmnopqrstuvwxyz"
letters = letters.split("")

// TODO: fix naming / slicing
let threeLetterPatterns = [];
let fourLetterPatterns = [];
let fiveLetterPatterns = [];

function parseCyphertext() {
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < ciphertext.length; j++) {
            if (ciphertext[j] === letters[i]) {
                threeLetterPatterns.push(ciphertext.slice(j, j + 2))
                fourLetterPatterns.push(ciphertext.slice(j, j + 3))
                fiveLetterPatterns.push(ciphertext.slice(j, j + 4))
            }
        }
    }
}
    
function getRepeatingPatterns(pattern, frequency) {
    let dict = {};
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] in dict) {
            dict[pattern[i]] += 1;
        } else {
            dict[pattern[i]] = 1;
        }
    }
    let repeatingPatterns = {}
    for (const key in dict) {
        if (dict[key] > frequency) {
            // console.log(key, dict[key])
            repeatingPatterns[key] = dict[key]; 
        }
    }
    return repeatingPatterns;
}

parseCyphertext()
let frequentTwoLetters = getRepeatingPatterns(threeLetterPatterns, 6) // Gets all 2-letter patterns that have a frequency of 7  or greater
let frequentThreeLetters = getRepeatingPatterns(fourLetterPatterns, 2) // Gets all 3-letter patterns that have a frequency of 3 or greater
let frequentFourLetters = getRepeatingPatterns(fiveLetterPatterns, 1) // Gets all 4-letter patterns that have a frequency of 2 or greater
