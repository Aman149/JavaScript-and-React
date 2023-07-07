// Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in the given expression.

// Example: 

// Input: exp = “[()]{}{[()()]()}” 
// Output: Balanced
// Explanation: all the brackets are well-formed

// Input: exp = “[(])” 
// Output: Not Balanced 
// Explanation: 1 and 4 brackets are not balanced because 
// there is a closing ‘]’ before the closing ‘(‘

function checkBalanced(str) {
    var stack = []
    for(var i=0; i<str.length; i++) {
        
        if(str[i] == '{')
            stack.push('}');
        else if(str[i] == '[')
            stack.push(']')
        else if(str[i] == '(')
            stack.push(')')
        else if(stack.pop() != str[i])
            return "Not Balanced!";
    }
    return "Balanced";
}

console.log(checkBalanced("[(]"))
