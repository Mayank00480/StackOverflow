import React from 'react'
import {Link , useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

export default function HomeMainbar() {
    const User = 1;
    const navigate = useNavigate()
  
    var questionList = [{
        _id : 1,
        upVotes : 3,
        downVotes : 2,
        noOfAnswers : 2,
        questionTitle: "What is a function",
        questionBody : "It mean to be",
        questionTags: [ "java" , "node js" ,"reactjs" ,"MongoDb"],
        userPosted: "mano",
        userId: 1,
        AskedOn : "Jan 1",
        Answers : [{
            answerBody: "Answer",
            userAnswered : "Kumar",
            answeredOn : "jan 2",
            userId : 2
}]
    },{
        _id : 2,
        upVotes : 3,
        downVotes : 2,
        noOfAnswers : 0,
        questionTitle: "What is a function",
        questionBody : "It mean to be",
        questionTags: [ "Python" , "R" ,"JavaScript" ],
        userPosted: "mano",
        AskedOn : "Jan 1",
        userId : 1,
        Answers : [{
            answerBody: "Answer",
            userAnswered : "Kumar",
            answeredOn : "jan 2",
            userId : 2
}]
    },
{
    _id : 3,
    upVotes : 3,
    downVotes : 2,
    noOfAnswers : 0,
    questionTitle: "What is a function",
    questionBody : "It mean to be",
    questionTags: [ "Python" , "R" ,"JavaScript" ],
    userPosted: "mano",
    AskedOn : "Jan 1",
    userId : 1,
    Answers : [{
        answerBody: "Answer",
        userAnswered : "Kumar",
        answeredOn : "jan 2",
        userId : 2
    }]
}]
const checkAuth = (() => {
    if(User === null)
    {
        alert('Login or Signup to ask a question')
    navigate('/Login')
    }
    else{
        navigate('/AskQuestion')
    }
})
const Location = useLocation();
  return (
    <div className = "main-bar">
        <div className = "main-bar-header">
           {  Location.pathname === "/" ? <h1>Top Questions </h1> : <h1>All Questions</h1>  }
           <button onClick = {checkAuth} className ="ask-btn">Ask Questions</button>
        </div>
        <div>
            {
                questionList === null ? <h1>Loading......</h1> : <>
                 <p>   {questionList.length} Questions  </p>
                <QuestionList questionList = {questionList} />
              </>
 
            }
        </div>
    </div>
  )
}
