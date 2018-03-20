
$( document ).ready(function() {


    $(".startGame").on("click", function (){
                $('.wrapper').show();
        
                $(this).hide();
            });

        var game = {
            questions: [
            {
                   question: 'Which rap group was totally crossed out?',
                   possibles: ['Bone Thugs n Harmony', 'Kriss Kross', 'All 4 One', 'Wu Tang Clan'],
                   id: 'question-one',
                   answer: 1
            }, {
                question: "Which member of TLC burned her football player boyfriend's house down?",
                possibles: ['Lisa Left Eye Lopez', 'Brandy', 'Monica', 'Missy Elliott'],
                id: 'question-two',
                answer: 0
            }, {
                question: "who sang 'Renegades Of Funk'",
                possibles: ['Blur', 'Weezer', 'Rage Against the Machiene'],
                id: 'question-three',
                answer: 2
            }, {
                question: 'What Soundgarden song formed a Religious Cult',
                possibles: ['Let me Down', 'Black Hole Sun', 'Limo Wreck'],
                id: 'question-four',
                answer: 1
            }, {
                question: 'Who Bumped Michael Jackson Off The #1 Spot In January 1992?',
                possibles: ['Mirah Carey', 'Madonna', 'Nirvana'],
                id: 'question-five',
                answer: 2
            }
            ]}

    

        var number = 100;
        $('#timeLeft').on('click', run);
    

        function decrement(){
            number--;
            $('#timeLeft').html('<h2>' + number + " seconds"+'</h2>');
            if (number === 0){
            stop();
           $('#message').html('your time is up!');
            checkAnswers();
            }
        }

        function run(){
            counter = setInterval(decrement, 1000);
        }

        function stop(){

            clearInterval(counter);
        }
    
        run();
    

    function formTemplate(data) {

        var qString = "<form id='question'>"+ data.question +"<br>";

        var possibles = data.possibles;

        for (var i = 0; i < possibles.length; i++) {
            var possible = possibles[i];
            qString = qString + "<input type='radio' name='"+data.id+"' value="+ i +">"+possible;
        }
        return qString + "</form>";
        }

    

    function displayQuestions(){
        var questionHTML = ''
        for (var i = 0; i<game.questions.length; i++) {
            questionHTML = questionHTML + formTemplate(game.questions[i]);
        }
        $('#questions-container').append(questionHTML);
    
    }
    
    displayQuestions();
    
    
    function checkAnswers (){
    
    
        var resultsHTML = '';
        var guessedAnswers = [];
        var right = 0;
        var wrong = 0;
    
        for (var i = 0; i<game.questions.length; i++) {
            if (isRight(game.questions[i])) {
                right++;
            } else {

                if (checkAnswers(game.questions[i])) {
                  wrong++;
                } else {
            }
        }
    
        }

        $('.results').html('right: '+right+ "<br>" +'wrong: '+wrong);
    }

        $('#doneButton').on('click', function() {
        checkAnswers();
        stop();
        $("#messageDiv").html("Game Over!");
        })
    });