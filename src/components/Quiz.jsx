import { useState } from 'react'
import Question from './Question';
import Gender from './Gender';

// infoSlides
import Intro from './infoSlides/Intro';
import Changes from './infoSlides/Changes'
import GoodJob from './infoSlides/GoodJob'
import Relationship from './infoSlides/Relationship'
import FewMoments from './infoSlides/FewMoments'



export default function Quiz() {
    const [answers, setAnswers] = useState([]);
    const [id, setId] = useState(0);


    const onAnswerHandler = (answerFromComponent) => {
        setAnswers([...answers, answerFromComponent])
        setId(id + 1)
        console.log(answerFromComponent);
    };

    const listOfSlides = [
        {
            id: 0,
            type: 'gender',
            question: 'Select your gender',
            answer: ['Male'
                , 'Female'
            ]
        },
        {
            id: 1,
            type: 'intro',
        },
        {
            id: 2,
            type: 'changes',
        },
        {
            id:3,
            // id: 11,
            type: 'goodJob'
        },
        {
            id:4,
            type: 'relationship'
        },
        {
            id:5,
            type: 'fewMoments'
        }
        
        // {
        //     id: 2,
        //     type: 'input',
        //     question: 'Your date of birth'
        // },
        // {
        //     id: 3,
        //     type: 'radio',
        //     question: 'Your body type',
        //     opitons: ['Average',
        //         'Slim',
        //         'Athletic',
        //         'Muscular',
        //         'A few extra pounds',
        //         'Big & beautiful'
        //     ]
        // },
        // {
        //     id: 4,
        //     type: 'radio',
        //     question: 'In clothes you prefer',
        //     opitons: ['reserved and classy style',
        //         'something flamboyant and bright'
        //     ]
        // },
        // {
        //     id: 5,
        //     type: 'radio',
        //     question: 'Do you like to be the center of attention?',
        //     opitons: ['sure thing – I can sing a song right now',
        //         'not really – I’d better stay at home or something like that'
        //     ]
        // },
        // {
        //     id: 6,
        //     type: 'radio',
        //     question: 'Your thinking is more',
        //     opitons: ['logical – facts, facts and again facts',
        //         'emotional – feelings are my guiding light'
        //     ]
        // },
        // {
        //     id: 7,
        //     type: 'radio',
        //     question: 'The perfect holiday is',
        //     opitons: ['A weekend at home dossing about',
        //         'A couples of weeks away on a secret island',
        //         'Out trekking about in the hills or mountains',
        //         'Being with the one you love, wherever it is'
        //     ]
        // },
        // {
        //     id: 8,
        //     type: 'select',
        //     question: 'The best way to spend money is',
        //     opitons: ['On hobbies',
        //         'On friends and family',
        //         'On education and job training',
        //         'On having fun',
        //         'Create an emergency fund'
        //     ]
        // },
        // {
        //     id: 9,
        //     type: 'select',
        //     question: 'The best way to spend money is',
        //     opitons: ['new experience and emotions',
        //         'love, love, love',
        //         'loyalty and trust',
        //         'money'
        //     ]
        // },
        // {
        //     id: 10,
        //     type: 'select',
        //     question: 'The best love song of all times is',
        //     opitons: ['Stevie Wonder - I Just Called To Say I Love You',
        //         'Aerosmith - I Don\'t Want to Miss a Thing',
        //         'Cyndi Lauper - Time After Time',
        //         'James Blunt - You\'re beautiful',
        //         'Are you kidding? None of the above!'
        //     ]
        // },
        // {
        //     id: 11,
        //     type: 'good_job'
        // },
        // {
        //     id: 12,
        //     type: 'radio',
        //     question: 'Your ideal woman is...',
        //     opitons: ['creative and expressive',
        //         'impulsive and emotional',
        //         'ambitious and brilliant',
        //         'caring and thoughtful'
        //     ]
        // },
        // {
        //     id: 13,
        //     type: 'radio',
        //     question: 'What kind of pet would she like?',
        //     opitons: ['Dog',
        //         'Cat',
        //         'Other',
        //         'None'
        //     ]
        // },
        // {
        //     id: 14,
        //     type: 'radio',
        //     question: 'Her favourite movie genre is...',
        //     opitons: ['horrors – she watched all Stephen King movies and wants you to do the same ',
        //         'drama – if the main character doesn’t suffer, it’s a bad movie',
        //         'comedy – she loves watching something hilarious',
        //         'None'
        //     ]
        // },
        // {
        //     id: 15,
        //     type: 'radio',
        //     question: 'Her favourite movie genre is...',
        //     opitons: ['expressive',
        //         'reserved'
        //     ]
        // },
        // {
        //     id: 16,
        //     type: 'radio',
        //     question: 'Her favourite movie genre is...',
        //     opitons: ['Angelina Jolie’s the best',
        //         'Audrey Hepburn’s – nice and tender',
        //         'Marilyn Monroe’s – with a beauty mark, please'
        //     ]
        // },
        // {
        //     id: 17,
        //     type: 'radio',
        //     question: 'Which hair color do you find the most attractive',
        //     opitons: ['brunette',
        //         'blonde',
        //         'red',
        //         'something unusual – pink or green, maybe'
        //     ]
        // },





    ];


    const currentQuestion = listOfSlides[id];
    if (currentQuestion.type === 'gender') {
        return (
            <Gender onAnswerHandler={onAnswerHandler} question={currentQuestion}/>
        )
    } else if (currentQuestion.type === 'intro'){
        return (
            <Intro onAnswerHandler={onAnswerHandler}/>
        )
    } else if (currentQuestion.type === 'changes'){
        return (
            <Changes  onAnswerHandler={onAnswerHandler}/>
        )
    }    else if (currentQuestion.type === 'goodJob'){
        return (
            <GoodJob  onAnswerHandler={onAnswerHandler}/>
        )
    } else if (currentQuestion.type === 'relationship'){
        return (
            <Relationship  onAnswerHandler={onAnswerHandler}/>
        )
    }else if (currentQuestion.type === 'fewMoments'){
        return (
            <FewMoments  onAnswerHandler={onAnswerHandler}/>
        )
    }

    
    
    else {
        return (
            <Question onAnswerHandler={onAnswerHandler} question={currentQuestion}/>
        )
    };

}