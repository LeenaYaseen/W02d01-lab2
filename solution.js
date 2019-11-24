//Question 5
## Maximum of Three Numbers
Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

//Solution 5
```javascript
function maxOfThree(num1,num2,num3)
{
  if(num1 == num2 && num1 == num3)
  {
    console.log("Same Number")
    return num1 && num2 && num3

  }
  else if (num1 > (num2 && num3))
  {
    console.log("First number is the largest")
    return num1
  }
  else if(num2 > (num1 && num3))
  {
    console.log("Second number is the largest")
    return num2
  }
  else if (num3 > (num1 && num2))
  {
    console.log("Third number is the largest")
    return num3
  }
  else
  {
    console.log("This isn't a number")
    return false
  }


}
console.log(maxOfThree(32,11,10))
// I belive that using conditionals is much easier than a while loop, as its only 3 words to be compared with




//Question 6
# 6
## Print Longest Word

Write a function `printLongestWord` that accepts a single argument, an **array of strings**. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

```javascript
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
// Solution 6
function printLongestWord(arr)
{
  let word= "";
  let i =0;
  while(i < arr.length)
  {
    
    if(word.length < arr[i].length)
    {
      word = arr[i]
      
    }
    i++;
  }
  return word;



}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob",]))

```

> => "Peanutbutter"








//Question 7
# 7
## Transmogrify the Numbers
Write a Javascript function called `transmogrify`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
power of 2` is 225.

```javascript
console.log(transmogrify(5, 3, 2));
// Question 7
function transmogrify(num1,num2,num3)
{
  let trans = 0;
  trans = (num1 * num2);
  let mogrify = 0;
  mogrify = Math.pow(trans,2)
  return mogrify
}
console.log(transmogrify(5, 3, 2));




```
// It is a simple multipication function. Doing a while-loop might complicated it more, and thus get more lines in coding.
> => 225