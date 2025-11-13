let ciphertext = "xkvdxvokmlavgkigbcdlfkgscvckyiewixqecbzoytxcukbrwtwuvggykhxquavfhkaupkuqfticawunvzxvizlzmgfmycxrzctqavilvkugeuvrxhlwtzbjmbpobcjrgrhakausguhbwxwnwbetketahgkdigkvzwklzabrzwcetaokiazqhxrniscmtmguekloanwtuekwnqrhklslmgmzhtedxhobulxirbxuzalaionknecjlrnwwzzclxxivhoxngfrcretlhjxuekmisdwvrmxvkvqogvdysxpkkfzlbxgzaageooezqqflyetpywhglkekijiulkfnzwkvuwhwdbwiqrdbeetrjmhxbtixrigyamyigloacjfpigejlklbfnmsnquebcimexgcuazeoismpllwrxhkzkudnalevivjheoyxnmcjmjaghgvgfezgaxkvgvwvsiszqohevmxrzqpykvfhvsavztkiftxwxwwkhxilnkubvnvcunigovrgqkvvsgupksswvwwieemmqqmlkoeixipuxyilguuoamdegxzwgvntammuvemekukigvflavakxymcjgvdamsitwilttxowpslfnxslbjwffsmtxwijxjsbzkzwdxishjnqulbdeyvklgjbtkmlkotwtkseimieqbjmtvqmftryilpkifwkjhbtovdsmklxetljalmilmuvhgkrmhhkzpwywivmkvvkmrtx"

let patterns = ["et", "ig", "kv", "uek", "mlko"];
let locations = [];
let distances = [];

function findLocations() {
    for (let i = 0; i < patterns.length; i++) {
        locations.push([])
        // for each pattern, go through the text,
        while (ciphertext.indexOf(patterns[i]) != -1) {
            // while there is pattern in cipher text
            patternIndex = ciphertext.indexOf(patterns[i]) // find the index of the first pattern in remaining text 
            ciphertext = ciphertext.replace(patterns[i], replacePattern(patterns[i])) // replace the first pattern with 1's 
            locations[i].push(patternIndex) // push the position into locations array
        }
    }
}

function calculateDistances() {
    for (let i = 0; i < locations.length; i++) { //for each pattern
        distances.push([]) // add an array for distances
        for (let j = 0; j < locations[i].length - 1; j++) //for each location in pattern
            // console.log(locations[i + 1])
            // console.log(locations[i])
            // console.log(i)
            distances[i].push(locations[i][j + 1] - locations[i][j]) // 
    }
}

function replacePattern(pattern) {
    const length = pattern.length
    let replacementString = ""
    for (let j = 0; j < length; j++) {
        replacementString += "1";
    }
    return replacementString;
}

console.log("testing distances")
