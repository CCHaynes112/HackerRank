class Student extends Person {

    constructor(firstName, lastName, identification, scores) {
        super(firstName, lastName, identification);
        this.scores = scores;
    }

    calculate() {
        var grade = 0;
        var counter = 0;
        for(var i in this.scores) {
            grade += this.scores[i];
            counter++;
        }
        grade /= counter;
        
        if(grade <= 100 && grade >= 90)
            return "O";
        if(grade < 90 && grade >= 80)
            return "E";
        if(grade < 80 && grade >= 70)
            return "A";
        if(grade < 70 && grade >= 55)
            return "P";
        if(grade < 55 && grade >= 40)
            return "D";
        if(grade < 40)
            return "T";
    }
}