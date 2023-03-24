function countWords(inputString) {
    // Step 1: Split the input string into individual words
    const wordsArray = inputString.split(" ");
    
    // Step 2: Loop through the array of words and count each one
    const wordCountMap = new Map();
    wordsArray.forEach((word) => {
      if (wordCountMap.has(word)) {
        wordCountMap.set(word, wordCountMap.get(word) + 1);
      } else {
        wordCountMap.set(word, 1);
      }
    });
    
    // Step 3: Return the Map containing each word's count
    return wordCountMap;
  }
  
  // Example usage:
  const inputString = "the quick brown fox jumps over the lazy dog";
  const wordCountMap = countWords(inputString);
  console.log(wordCountMap);
  
  
  
//   // Output: Map(8) { 'the' => 2, 'quick' => 1, 'brown' => 1, 'fox' => 1, 'jumps' => 1, 'over' => 1, 'lazy' => 1, 'dog' => 1 }