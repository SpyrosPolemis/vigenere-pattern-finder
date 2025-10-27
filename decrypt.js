cyphertext = "xkvdxvokmlavgkigbcdlfkgscvckyiewixqecbzoytxcukbrwtwuvggykhxquavfhkaupkuqfticawunvzxvizlzmgfmycxrzctqavilvkugeuvrxhlwtzbjmbpobcjrgrhakausguhbwxwnwbetketahgkdigkvzwklzabrzwcetaokiazqhxrniscmtmguekloanwtuekwnqrhklslmgmzhtedxhobulxirbxuzalaionknecjlrnwwzzclxxivhoxngfrcretlhjxuekmisdwvrmxvkvqogvdysxpkkfzlbxgzaageooezqqflyetpywhglkekijiulkfnzwkvuwhwdbwiqrdbeetrjmhxbtixrigyamyigloacjfpigejlklbfnmsnquebcimexgcuazeoismpllwrxhkzkudnalevivjheoyxnmcjmjaghgvgfezgaxkvgvwvsiszqohevmxrzqpykvfhvsavztkiftxwxwwkhxilnkubvnvcunigovrgqkvvsgupksswvwwieemmqqmlkoeixipuxyilguuoamdegxzwgvntammuvemekukigvflavakxymcjgvdamsitwilttxowpslfnxslbjwffsmtxwijxjsbzkzwdxishjnqulbdeyvklgjbtkmlkotwtkseimieqbjmtvqmftryilpkifwkjhbtovdsmklxetljalmilmuvhgkrmhhkzpwywivmkvvkmrtx"
// cyphertext.split()
letters = "abcdefghijklmnopqrstuvwxyz"
letters = letters.split()

let threeLetterPatterns = [];
let fourLetterPatterns = [];
let fiveLetterPatterns = [];

function parseCyphertext() {
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < cyphertext.length; j++) {
            if (cyphertext[j] === letters[i]) {
                threeLetterPatterns.push(cyphertext.slice(j, j + 2))
                fourLetterPatterns.push(cyphertext.slice(j, j + 3))
                fiveLetterPatterns.push(cyphertext.slice(j, j + 4))
            }
        }
    }
}
    
function printRepeatingPatterns(pattern) {
    let dict = {};
    for (let i = 0; i > pattern.length; i++) {
        if (pattern[i] in dict) {
            dict[pattern[i]] += 1;
        } else {
            dict[pattern[i]] = 0;
        }
    }

    for (const key in dict) {
        if (dict[key] > 1) {
            console.log(key, dict[key])
        }
    }
}

parseCyphertext()
printRepeatingPatterns(threeLetterPatterns)
printRepeatingPatterns(fourLetterPatterns)
printRepeatingPatterns(fiveLetterPatterns)
