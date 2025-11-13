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


// for each cryptogram
//   count letters
//   key = most common letter - e
//   letter = alphabet[key]
//  keyNMumber.append(key)
//   key.append(letter)
