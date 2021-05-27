function validatePalin() {
    let word = prompt("enter a word")

    // get the total length of the words
    const len = word.length;

    // Use for loop to divide the words into 2 half
    for (let i = 0; i < len / 2; i++) {

        // validate the first and last characters are same
        if (word[i] !== word[len - 1 - i]) {
            return( 'It is not a palindrome');
        }
        else{
            return( 'It is a palindrome');
        }
    }
  
}

validatePalin()