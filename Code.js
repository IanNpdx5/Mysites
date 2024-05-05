var answers = {
        CA:["ALGORITHM", "APPLICATION", "BINARY", "BROWSER", "CLIENT", "COMMAND", "COMPUTER", "PROGRAM", "DASHBOARD", "DESKTOP", 
            "FIREWALL", "FIRMWARE", "GRAPHICS", "HARDWARE", "JAVASCRIPT", "PLATFORM", "QWERTY", "SUPERCOMPUTER", "SYNTAX", 
            "TERMINAL", "nocans"], 
        SAS:["MATGIHLRO", "INTLIPPCAAO", "RYNAIB", "WBEORSR", "CTINEL", "MDMANOC", "RTMECPOU", "GRRPAOM", "HDASDROAB", "DOSPTKE", 
             "FERWIALL", "FARRMEWI", "SRGHCIPA", "AHWRRADE", "RAJVASPICT", "LAMOFPTR", "RYQWET", "RMTCEEPROUPSU", "YTAXNS", 
             "TMNALERI", "THE END to play again reload the page (no correct answer)"]
};
    var currintq = answers.SAS[0];
    var num = 0;
    var numscore = 0;
    var $score = $("#score");
    
    $score.text("Score: " + numscore);
    
    var check = function(answer2, Canswer2) {
                if (answer2 === Canswer2) { 
                currintq = answers.SAS[num +1];
                $(".scrambled").text(currintq);
                num++;
                numscore++;
                $score.text("Score: " + numscore);
                return $("#joke-result").text("YOU GOT IT!").css("color", "green")
            } else {
                return $("#joke-result").text("Try again!").css("color", "red")   
            }};
    
    $(".scrambled").text(currintq);
    
    $("#joke-form").on("submit", function(event) {
            event.preventDefault();
            var $answer = $("#answer"); 
            var answer = $answer.val().toLowerCase();
            var answersh = answers.CA[num].toLowerCase();
            check(answer, answersh);
            $answer.val("");
            }); 
