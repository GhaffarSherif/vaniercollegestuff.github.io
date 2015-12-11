
function submitq() {

  var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5') +answerScore('q6') +answerScore('q7'));


  if (answerScore('q1') === 0) {
    document.getElementById('ans1').innerHTML = correctAnswer('correct1', 1);
  }
  if (answerScore('q2') === 0) {
    document.getElementById('ans2').innerHTML = correctAnswer('correct2', 2);
  }
  if (answerScore('q3') === 0) {
    document.getElementById('ans3').innerHTML = correctAnswer('correct3', 3);
  }
  if (answerScore('q4') === 0) {
    document.getElementById('ans4').innerHTML = correctAnswer('correct4', 4);
  }
  if (answerScore('q5') === 0) {
    document.getElementById('ans5').innerHTML = correctAnswer('correct5', 5);
  }

  if (answerScore('q6') === 0) {
    document.getElementById('ans6').innerHTML = correctAnswer('correct6', 6);
  }

  if (answerScore('q7') === 0) {
    document.getElementById('ans7').innerHTML = correctAnswer('correct7', 7);
  }





  var showScore = "Your Score: " + calcScore + "\n Also, we lied about the iphone;

  if (calcScore === 7) {
    showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
  }

  document.getElementById('userScore').innerHTML = showScore;
}


function correctAnswer(correctStringNo, qNumber) {
  return ("The answer for question #" + qNumber + ": &nbsp;<strong>" +
    (document.getElementById(correctStringNo).innerHTML) + "</strong>");
}

function answerScore(qName) {
  var radiosNo = document.getElementsByName(qName);


  for (var i = 0, length = radiosNo.length; i < length; i++) {
    if (radiosNo[i].checked) {

      var answerValue = Number(radiosNo[i].value);
    }
  }

  if (isNaN(answerValue)) {
    answerValue = 0;
  }
  return answerValue;
}