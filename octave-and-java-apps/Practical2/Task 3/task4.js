function words() {
    
    let input = prompt("Enter 20 words separated by spaces:");
    
    let words = input.split(" ");

    if (words.length !== 20) {
        alert("Please enter exactly 20 words!");
        return;
    }

    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    let highlightedWords = words.map(word => {
        return vowels.includes(word.charAt(0)) ? `<b>${word}</b>` : word;
    });

    let consonantWords = words.filter(word => !vowels.includes(word.charAt(0)));

    let originalList = words.join(" ");
    let reversedList = words.reverse().join(" ");
    let sortedList = words.slice().sort().join(" ");
    let consonantList = consonantWords.join(" ");

    document.write("<p><strong>Original List:</strong> " + originalList + "</p>");
    document.write("<p><strong>Reversed List:</strong> " + reversedList + "</p>");
    document.write("<p><strong>Sorted List:</strong> " + sortedList + "</p>");
    document.write("<p><strong>Highlighted Words (Starting with Vowel):</strong> " + highlightedWords.join(" ") + "</p>");
    document.write("<p><strong>Words Starting with a Consonant:</strong> " + consonantList + "</p>");
}

words();