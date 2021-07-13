import { useState } from 'react'
import Radiobutton from './question/Radiobutton';
import Gender from './question/Gender';
import Checkbox from './question/Checkbox';

// infoSlides
import Intro from './infoSlides/Intro';
import Changes from './infoSlides/Changes'
import GoodJob from './infoSlides/GoodJob'
import Relationship from './infoSlides/Relationship'
import FewMoments from './infoSlides/FewMoments'

import Age from './question/Age'
import Indicator from './question/Indicator';

export default function Quiz() {
    const [answers, setAnswers] = useState([]);
    const [id, setId] = useState(0);


    const onAnswerHandler = (answerFromComponent) => {
        setAnswers([...answers, answerFromComponent])
        setId(id + 1)
        console.log(answers);
    };

    const listOfSlides = [
        {
            id: 0,
            type: 'gender',
            question: 'Select your gender',
            answer: [
                {
                    gender: 'Male',
                    emoji: '👨'
                },
                {
                    gender: 'Female',
                    emoji: '👩'
                }
            ]
        },
        {
            id: 1,
            type: 'changes',
            question: 'Your date of birth'

        },
        // {
        //     id: 2,
        //     type: 'age',
        // },
        {
            id: 2,
            // id: 3,
            index: 1,
            percent: 0,
            type: 'radio',
            question: 'Your body type',
            opitons: [
                {
                    answer: 'Average',
                    emoji: '🤚'
                },
                {
                    answer: 'Slim',
                    emoji: '🙂'
                },
                {
                    answer: 'Athletic',
                    emoji: '💪'
                },
                {
                    answer: 'Muscular',
                    emoji: '🏋‍♂'
                },
                {
                    answer: 'A few extra pounds',
                    emoji: '✌️'
                },
                {
                    answer: 'Big & beautiful',
                    emoji: '🤗'
                },
            ]
        },
        {
            id: 3,
            // id: 4,
            index: 2,     
            percent: 3.8,  
            type: 'radio',
            question: 'In clothes you prefer',
            opitons: [
                {
                    answer: 'Reserved and classy style',
                    emoji: '🤵'
                },
                {
                    answer: 'Something flamboyant and bright',
                    emoji: '🦹'
                }
            ]
        },

        {
            id: 4,
            // id: 5,
            index: 3,
            percent: 7.7,
            type: 'radio',
            question: 'Do you like to be the center of attention?',
            opitons: [
                {
                    answer: 'Sure thing – I can sing a song right now',
                    emoji: '😏'
                },
                {
                    answer: 'Not really – I’d better stay at home or something like that',
                    emoji: '🏡'
                }
            ]
        },
        {
            id: 5,
            // id: 6,
            index: 4,
            percent: 11.5,
            type: 'radio',
            question: 'Your thinking is more',
            opitons: [
                {
                    answer: 'Logical – facts, facts and again facts',
                    emoji: '📊'
                }, {
                    answer: 'Emotional – feelings are my guiding light',
                    emoji: '😜'
                }
            ]
        },
        {
            id: 6,
            // id: 7,
            index: 5,
            percent: 15.3,
            type: 'radio',
            question: 'The perfect holiday is',
            opitons: [
                {
                    answer: 'A weekend at home dossing about',
                    emoji: '🛋'
                },
                {
                    answer: 'A couples of weeks away on a secret island',
                    emoji: '🏝'
                },
                {
                    answer: 'Out trekking about in the hills or mountains',
                    emoji: '🏔'
                },
                {
                    answer: 'Being with the one you love, wherever it is',
                    emoji: '💕'
                }
            ]
        },
        {
            id: 7,
            // id: 8,
            index: 6,
            percent: 19.2,
            type: 'checkbox',
            question: 'The best way to spend money is',
            opitons: ['On hobbies',
                'On friends and family',
                'On education and job training',
                'On having fun',
                'Create an emergency fund',
            ]
        },
        {
            id: 8,
            // id: 9,
            index: 7,
            percent: 23.1,
            type: 'checkbox',
            question: 'The best way to spend money is',
            opitons: ['New experience and emotions',
                'Love, love, love',
                'Loyalty and trust',
                'Money'
            ]
        },
        {
            id: 9,
            // id: 10,
            index: 8,
            percent: 26.9,
            type: 'radio',
            question: 'The best love song of all times is',
            opitons: [
                {
                    answer: 'Stevie Wonder – I Just Called To Say I Love You ',
                    emoji: '☎️'
                },
                {
                    answer: 'Aerosmith – I Don\'t Want to Miss a Thing',
                    emoji: '🎶'
                },
                {
                    answer: 'Cyndi Lauper – Time After Time',
                    emoji: '🎼'
                },
                {
                    answer: 'James Blunt – You\'re beautiful',
                    emoji: '😌'
                },
                {
                    answer: 'Are you kidding? None of the above',
                    emoji: '🙅🏻'
                }
            ]
        },
        {
            id: 10,
            // id: 11,
            type: 'goodJob'
            // 31 процент загрузки 
        },
        {
            id: 11,
            // id: 12,
            index: 9,
            percent: 30.8,
            type: 'radio',
            question: 'Your ideal woman is...',
            opitons: [
                {
                    answer: 'creative and expressive',
                    emoji: '💃'
                },
                {
                    answer: 'impulsive and emotional',
                    emoji: '🙀'
                },
                {
                    answer: 'ambitious and brilliant',
                    emoji: '👩🏼‍🎓'
                },
                {
                    answer: 'caring and thoughtful',
                    emoji: '👩‍❤️‍👨'
                }
            ]
        },
        {
            id: 12,
            // id: 13,
            index: 10,
            percent: 34.6,
            type: 'radio',
            question: 'What kind of pet would she like?',
            opitons: [
                {
                    answer: 'Dog',
                    emoji: '🐶'
                },
                {
                    answer: 'Cat',
                    emoji: '😻'
                },
                {
                    answer: 'Other',
                    emoji: '✔️'
                },
                {
                    answer: 'None',
                    emoji: '❌'
                }
            ]
        },
        {
            id: 13,
            // id: 14,
            index: 11,
            percent: 38.5,
            type: 'radio',
            question: 'Her favourite movie genre is...',
            opitons: [
                {
                    answer: 'horrors – she watched all Stephen King movies and wants you to do the same',
                    emoji: '🧟‍♀️'
                },
                {
                    answer: 'drama – if the main character doesn’t suffer, it’s a bad movie',
                    emoji: '🎭'
                },
                {
                    answer: 'comedy – she loves watching something hilarious',
                    emoji: '🤣'
                },
                {
                    answer: 'love stories – romantic movies for a romantic girl',
                    emoji: '👩‍❤️‍👨'
                }
            ]
        },
        {
            id: 14,
            // id: 15,
            index: 12,
            percent: 42.3,
            type: 'radio',
            question: 'Her favourite movie genre is...',
            opitons: [
                {
                    answer: 'expressive',
                    emoji: '👋'
                },
                {
                    answer: 'reserved',
                    emoji: '✋'
                }
            ]
        },
        {
            id: 15,
            // id: 16,
            index: 13,
            percent: 46.1,
            type: 'radio',
            question: 'Choose the lips you are crazy about',
            opitons: [
                {
                    answer: 'Angelina Jolie’s the best',
                    emoji: '👄'
                },
                {
                    answer: 'Audrey Hepburn’s – nice and tender',
                    emoji: '💋'
                },
                {
                    answer: 'Marilyn Monroe’s – with a beauty mark, please',
                    emoji: '💄'
                }
            ]
        },
        {
            id: 16,
            // id: 17,
            index: 14,
            percent: 50,
            type: 'radio',
            question: 'Which hair color do you find the most attractive',
            opitons: [
                {
                    answer: 'brunette',
                    emoji: '🙎🏻‍♀️'
                },
                {
                    answer: 'blonde',
                    emoji: '🙎🏼‍♀️'
                },
                {
                    answer: 'red',
                    emoji: '👩🏼‍🦰'
                },
                {
                    answer: 'something unusual – pink or green, maybe',
                    emoji: '👩‍🎤'
                }
            ]
        },
        {
            id: 17,
            // id: 18,
            index: 15,
            percent: 53.8,
            type: 'radio',
            question: 'Would your ideal girl have a tattoo',
            opitons: [
                {
                    answer: 'absolutely no tattoos',
                    emoji: '🙅🏼‍♂️'
                },
                {
                    answer: 'maybe a small one  – like a tiny heart on her wrist',
                    emoji: '🖤'
                },
                {
                    answer: 'I don’t care – she can do whatever she wants with her body',
                    emoji: '🤷'
                }
            ]
        },
        {
            id: 18,
            // id: 19,
            index: 16,
            percent: 57.7,
            type: 'radio',
            question: 'What about her body shape',
            opitons: [
                {
                    answer: 'skinny',
                    emoji: '👯‍♀️'
                },
                {
                    answer: 'average',
                    emoji: '🏃🏼‍♀️'
                },
                {
                    answer: 'plus-size',
                    emoji: '➕'
                },
                {
                    answer: 'model type',
                    emoji: '💃'
                },
                {
                    answer: 'I don\'t care',
                    emoji: '🤷🏻‍♂️'
                }
            ]
        },
        {
            id: 19,
            // id: 20,
            index: 17,
            percent: 61.5,
            type: 'radio',
            question: 'How is she with the attention',
            opitons: [
                {
                    answer: 'she wants it all',
                    emoji: '🤗'
                },
                {
                    answer: 'she wants a bit',
                    emoji: '⭐️'
                },
                {
                    answer: 'she wants none',
                    emoji: '👎'
                }
            ]
        },
        {
            id: 20,
            // id: 21,
            index: 18,
            percent: 65.4,
            type: 'radio',
            question: 'What are you expecting from a woman',
            opitons: [
                {
                    answer: 'to be able to do everything',
                    emoji: '🦸🏼‍♀️'
                },
                {
                    answer: 'to be mature',
                    emoji: '👩🏼‍💼'
                },
                {
                    answer: 'to be just pretty',
                    emoji: '💄'
                },
                {
                    answer: 'to be smart and kind',
                    emoji: '👩🏼‍🏫'
                }
            ]
        },
        {
            id: 21,
            // id: 22,
            index: 19,
            percent: 69.2,
            type: 'radio',
            question: 'In a relationship your woman should...',
            opitons: [
                {
                    answer: 'cheer you up when you’re feeling down',
                    emoji: '😁'
                },
                {
                    answer: 'encourage you to achieve higher goals',
                    emoji: '🎯'
                },
                {
                    answer: 'accept you for who you are, no matter what',
                    emoji: '🥰'
                },
                {
                    answer: 'to be your safe haven',
                    emoji: '😌'
                }
            ]
        },
        {
            id: 22,
            // id: 23,
            percent: 73,
            type: 'relationship'
        },
        {
            id: 23,
            // id: 24,
            index: 20,
            percent: 73.1,
            type: 'radio',
            question: 'Love is...',
            opitons: [
                {
                    answer: 'something everyone has in some form',
                    emoji: '❣️'
                },
                {
                    answer: 'something only lucky people have',
                    emoji: '💕'
                },
                {
                    answer: 'something the movie industry created',
                    emoji: '💖'
                },
                {
                    answer: 'in the air',
                    emoji: '💓'
                }
            ]
        },
        {
            id: 24,
            // id: 25,
            index: 21,
            percent: 76.9,
            type: 'radio',
            question: 'What is your idea of a fun date',
            opitons: [
                {
                    answer: 'going clubbing – let’s see if she can dance all night',
                    emoji: '💃🏼'
                },
                {
                    answer: 'chilling in a cozy restaurant with a bottle of wine',
                    emoji: '🍷'
                },
                {
                    answer: 'staying at home and watching a movie',
                    emoji: '🎬'
                },
                {
                    answer: 'drinking all sorts of cocktails at the bar',
                    emoji: '🍹'
                }
            ]
        },
        {
            id: 25,
            // id: 26,
            index: 22,
            percent: 80.8,
            type: 'radio',
            question: 'What is a big no in a relationship',
            opitons: [
                {
                    answer: 'talking to friends about anything and everything',
                    emoji: '🗣'
                },
                {
                    answer: 'bringing up old things every time you fight',
                    emoji: '🤺'
                },
                {
                    answer: 'not giving you your personal space',
                    emoji: '😠'
                },
                {
                    answer: 'being too dramatic',
                    emoji: '😩'
                }
            ]
        },
        {
            id: 26,
            // id: 27,
            index: 23,
            percent: 84.6,
            type: 'radio',
            question: 'It is really annoying when she',
            opitons: [
                {
                    answer: 'has constant mood swings',
                    emoji: '😒'
                },
                {
                    answer: 'takes too many selfies',
                    emoji: '🤳'
                },
                {
                    answer: 'never stops talking',
                    emoji: '🙊'
                },
                {
                    answer: 'always late for the date',
                    emoji: '⏰'
                }
            ]
        },
        {
            id: 27,
            // id: 28,
            index: 24,
            percent: 88.4,
            type: 'radio',
            question: 'The happy couple',
            opitons: [
                {
                    answer: 'can\'t take their hands off each other',
                    emoji: '🤝'
                },
                {
                    answer: 'talk with each other for hours and hours',
                    emoji: '‍👨'
                },
                {
                    answer: 'look in the same direction',
                    emoji: '👀'
                },
                {
                    answer: 'totally forgets about the outside world',
                    emoji: '🌍'
                }
            ]
        },
        {
            id: 28,
            // id: 29,
            index: 25,
            percent: 92.3,
            type: 'radio',
            question: 'You would marry a woman who is',
            opitons: [
                {
                    answer: 'kind-hearted and cares about family values',
                    emoji: '👨‍👩‍👦'
                },
                {
                    answer: 'a go-getter – very determined to be successful',
                    emoji: '‍🦾'
                },
                {
                    answer: 'the socialite – she will never miss a good party ',
                    emoji: '🥳'
                }
            ]
        },
        {
            id: 29,
            // id: 30,
            index: 26,
            percent: 96.1,
            type: 'checkbox',
            question: 'The most important in the relationship is',
            opitons: ['communication',
                'respect',
                'boundaries',
                'trust',
                'support'
            ]
        },
        {
            id: 30,
            // id: 31,
            type: 'fewMoments'
        }
    ];


    const currentQuestion = listOfSlides[id];

    if (currentQuestion.type === 'gender') {
        return (
            <Gender onAnswerHandler={onAnswerHandler} question={currentQuestion} />
        )
    } else if (currentQuestion.type === 'age') {
        return (
            <Age onAnswerHandler={onAnswerHandler} question={currentQuestion} />
        )
    } else if (currentQuestion.type === 'intro') {
        return (
            <Intro onAnswerHandler={onAnswerHandler} />
        )
    } else if (currentQuestion.type === 'changes') {
        return (
            <Changes onAnswerHandler={onAnswerHandler} />
        )
    } else if (currentQuestion.type === 'goodJob') {
        return (
            <GoodJob onAnswerHandler={onAnswerHandler} />
        )
    } else if (currentQuestion.type === 'relationship') {
        return (
            <Relationship onAnswerHandler={onAnswerHandler} />
        )
    } else if (currentQuestion.type === 'fewMoments') {
        return (
            <FewMoments onAnswerHandler={onAnswerHandler} />
        )
    } else if (currentQuestion.type === 'radio') {
        return (
            <>
                <Indicator question={currentQuestion}/>
                <Radiobutton onAnswerHandler={onAnswerHandler} question={currentQuestion} />
            </>
        )
    } else if (currentQuestion.type === 'checkbox') {
        return (
            <>
                <Indicator question={currentQuestion}/>
                <Checkbox onAnswerHandler={onAnswerHandler} question={currentQuestion} />
            </>

        )
    };

}