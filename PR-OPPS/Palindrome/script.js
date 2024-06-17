class StringManipulator {
    cleanString(str){
        return str.replace(/[^a-zA-Z0-9 -]/).toLowerCase();
    }
}
class PalindromeChecker  extends StringManipulator {
    isPalindrome(str){
        let cleanrString = this.cleanString(str);

        let revString = cleanrString.split('').reverse().join('');

        return cleanrString === revString;
    }
}
let Checker = new PalindromeChecker();

let text = document.getElementById("demo").value;
let printpal = Checker.isPalindrome(text);

function pal(printpal){
    
if( printpal){
    document.getElementById("dis").innerHTML = " is Palindrome ";
}
else{
    document.getElementById("dis").innerHTML = " is not a Palindrome ";
}
}