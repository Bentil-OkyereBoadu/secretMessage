let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//remove last element from array
secretMessage.pop();
//print length of array
console.log(secretMessage.length);
//add 'to' and 'Program' to the end of array
secretMessage.push('to');
secretMessage.push('Program');
//update 'easily' to 'right'
secretMessage[7] = 'right';
//remove first element of array
secretMessage.shift();
//add 'Programming' to the start of the array(index 0)
secretMessage.unshift('Programming');
//from array index 6, remove 5 elements and replace with 'know,'
secretMessage.splice(6, 5, 'know,');
//join array elements and print as sentence
console.log(secretMessage.join(' '));
