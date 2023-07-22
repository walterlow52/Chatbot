function bot() {
  var ans = {
    "What is your name?" : "Hello, I am the HTML Chatbot created by Walter Low. :)",
    "How are you?" : "I am fine! Thank you! :) ",
    "Bye" : "OK, Thank you for chatting with me today! Bye for now! :) "
  };
  var user = document.getElementById('userinput').value;
  document.getElementById('answer').innerHTML = user + "<br>";
  if (user in ans) {
    document.getElementById('answer').innerHTML = ans[user] + "<br>";
  }
  else {
    document.getElementById('answer').innerHTML = "I'm sorry but I don't understand. <br>";
  }
}
