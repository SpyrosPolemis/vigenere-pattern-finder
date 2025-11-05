const ciphertext = "xkvdxvokmlavgkigbcdlfkgscvckyiewixqecbzoytxcukbrwtwuvggykhxquavfhkaupkuqfticawunvzxvizlzmgfmycxrzctqavilvkugeuvrxhlwtzbjmbpobcjrgrhakausguhbwxwnwbetketahgkdigkvzwklzabrzwcetaokiazqhxrniscmtmguekloanwtuekwnqrhklslmgmzhtedxhobulxirbxuzalaionknecjlrnwwzzclxxivhoxngfrcretlhjxuekmisdwvrmxvkvqogvdysxpkkfzlbxgzaageooezqqflyetpywhglkekijiulkfnzwkvuwhwdbwiqrdbeetrjmhxbtixrigyamyigloacjfpigejlklbfnmsnquebcimexgcuazeoismpllwrxhkzkudnalevivjheoyxnmcjmjaghgvgfezgaxkvgvwvsiszqohevmxrzqpykvfhvsavztkiftxwxwwkhxilnkubvnvcunigovrgqkvvsgupksswvwwieemmqqmlkoeixipuxyilguuoamdegxzwgvntammuvemekukigvflavakxymcjgvdamsitwilttxowpslfnxslbjwffsmtxwijxjsbzkzwdxishjnqulbdeyvklgjbtkmlkotwtkseimieqbjmtvqmftryilpkifwkjhbtovdsmklxetljalmilmuvhgkrmhhkzpwywivmkvvkmrtx"

let patterns = ["", "", "", "",]
let locations = []

for (let i = 0; i < patterns.length; i++) {
    locations.push([])
    // for each pattern, go through the text,
    // while (ciphertext.indexOf(patterns[i]) != -1) {
    //     // while there is pattern in cipher text
    //     patternIndex = ciphertext.indexOf(patterns[i]) // find the index of the first pattern in remaining text 
    //     ciphertext.replace(patterns[i], replacePattern(patterns[i])) // replace the first pattern with 1's 
    //     locations[i].push(patternIndex) // push the position into locations array
    //     console.log(i)
    // }
}

function replacePattern(pattern) {
    const length = pattern.length
    let replacementString = ""
    for (let j = 0; j < length; j++) {
        replacementString += "1";
    }
    console.log(replacementString)
    return replacementString;
}

console.log("testing distances")


// SPLIT THE ARRAY ON PATTERN, RETURN THE LEFT SIDE AND GET COUNT->WHICH IS POSITION