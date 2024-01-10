const correctAnswer=['B', 'A', 'C', 'A', 'D'];
const form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');
const questions=document.querySelectorAll('.question'); //all questions can be accessed using indexing

form.addEventListener('submit', event=> {
    event.preventDefault();

    let score=0;
    
    const userAnswers=[form.q1.value, form.q2.value, form.q3.value, form.q4.value
    ,form.q5.value ]

    userAnswers.forEach((answer, index) => {
        if (answer===correctAnswer[index]){
            score++;
            questions[index].classList.add('correct');

        }
        else{
            questions[index].classList.add('wrong');
        }

    });
    console.log(score);

    scrollTo(0,0);  //scroll to the top and remove hide
    result.classList.remove('hide');
    //it is going to check only .result(not whole document) and take first p
    result.querySelector('p').textContent=`You scored ${score}/5!`;
});
