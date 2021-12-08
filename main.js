let sentence = "Algorithm practice with chris and paul"

function sentCount(words){
  
let vowelCount = 0
let count = 1
let sentenceLength = 0

let charMap = {
  a: "a",
  e: "e",
  i: "i",
  o: "o",
  u: "u"
}
sentenceLength = words.length

for(let i = 0; i < words.length; i++){
   if (words[i] === " ")
    count += 1
if(words[i] in charMap){
  ++vowelCount
 }
}
return {sentenceLength, count, vowelCount}
}
console.log(sentCount(sentence))

