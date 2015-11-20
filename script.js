$(document).ready(function() {

  function isPalindrome(word) {
    var forwords = word.toLowerCase().split(' ').join('');
    var backwords = forwords.split('').reverse().join('');
    return forwords === backwords;
  };

  console.log(isPalindrome('Stop nine myriad murmur Put up rum rum dairymen in pots'));

});
