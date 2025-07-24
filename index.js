

const longestWord = (words) => {

   let longestWord = ""
   let splittedWords = words.split(" ")

   for (let word of splittedWords){

     if (word.length >= longestWord.length){
        longestWord = word
     }
   }

   console.log(longestWord)


}

longestWord("Hello world Omayowamoshinderu dsdsd");
