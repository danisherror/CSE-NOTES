// npm init -y


const readline = require('readline');

// function vowelCount(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   const count = {};

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count[char] = (count[char] || 0) + 1;
//     }
//   }
//   for(let i=0;i<vowels.length;i++)
//   {
//     if(count[vowels[i]])
//     {
//       console.log(vowels[i]+" : "+count[vowels[i]]);
//     }
//     else
//     {
//       console.log(vowels[i]+" : 0");
//     }
    
    
//   }
// }

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// console.log(rl);
// rl.question('Enter a string: ', (str) => {
//   const count = vowelCount(str);

//   // const output = vowels.map((vowel) => {
//   //   const vowelCount = count[vowel] || 0;
//   //   return `${vowel}: ${vowelCount}`;
//   // });

//   // console.log(`Output: ${output.join(', ')}`);
//   rl.close();
// });



function vowelCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = {};
  for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
          if (count[str[i]]) {
              count[str[i]]++;
          } else {
              count[str[i]] = 1;
          }
      }
  }
  for(let i=0;i<vowels.length;i++){
    if(count[vowels[i]])
    {
      console.log(vowels[i]+" : "+count[vowels[i]]);
    }
    else
    {
      console.log(vowels[i]+" : 0");
    }
  }
  return count;
}

let text = 'Le Tour de France';
let count = vowelCount(text);

console.log("Vowel Frequency in '" + text + "' is: " + JSON.stringify(count));
