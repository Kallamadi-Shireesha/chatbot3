function talk(){
    var know = {
      "15A04511" : "Ram,English faculty, M.Tech, phone number:9121310855",
      "15A04512" : "Lakshman, Physics faculty phone number:9121310855",
      "15A04513" : "Ravan, Maths faculty,  phone number:9121310855",
      
    };
    var user = document.getElementById('userBox').value;
      document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
      document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
      document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
  }