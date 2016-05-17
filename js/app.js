(function () {
  $('#question').keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();
      var question = $('#question').val();
      console.log('inside func', question)

      // question-check implementation
      // 3 things to check:- question's length, wh-question and question mark.
      var everythingIsOk = true;

      if (question.length > 150) {
        swal({
          title: "That may be too long!",
          text: "Your question might be too long. Could you make it more concise?",
          type: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Update question'
        })
        everythingIsOk = false;
      } else if (question.length < 15) {
        swal({
          title: "That may be too short!",
          text: "Your question might be too short. Could you give more context?",
          type: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Update question'
        });
        everythingIsOk = false;
      }

      // check for the wh questions
      function checkWh(value) {
        var tempArray = value.toLowerCase().split(' ');
        return tempArray.filter( function (val) {
          return (val === 'how' || val === 'why' || val === 'what' ||
          val === 'where' || val === 'when'|| val === 'who');
        }).length > 0;
      };

      if ( !checkWh(question) ) {
        swal({
          title: "Forgot the wh-question?",
          text: "Your question does not contain a what, where, how, who, when or why keyword.",
          type: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Update question'
        })
        everythingIsOk = false;
      }

      // checking for question mark
      function checkQuestionMark(value) {
        var tempString = value.trim();
        return (tempString[tempString.length - 1] === "?");
      }

      if ( !checkQuestionMark(question) ) {
        swal({
          title: "Forgot the question mark?",
          text: "Your question does not have a question mark. Adding it would make it awesome!",
          type: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Update question'
        })
        everythingIsOk = false;
      }

      // checking for correc answer
      if (everythingIsOk) {
        swal('Good job', 'That looks awesome', 'success');
      }
    }
  })
})();
