let quizzes = [
    {
        ask: 'con chó có mấy chân?',
        ans1: 1,
        ans2: 2,
        ans3: 3,
        ans4: 4,
        
    },
    {
        ask: 'con gà có mấy chân?',
        ans1: 1,
        ans2: 2,
        ans3: 3,
        ans4: 4,
        
    },
    {
        ask: 'con bò có mấy chân?',
        ans1: 1,
        ans2: 2,
        ans3: 3,
        ans4: 4,
        
    },
    {
        ask: 'con lợn có mấy chân?',
        ans1: 1,
        ans2: 2,
        ans3: 3,
        ans4: 4,
        
    },

]
let quiz = quizzes[Math.floor(Math.random() * quizzes.length)];
let answer = Number(prompt(`${quiz.ask}\n1. ${quiz.ans1}\n2. ${quiz.ans2}\n3. ${quiz.ans3}\n4. ${quiz.ans4}`));
 
