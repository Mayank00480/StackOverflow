import React from 'react'
import {Link} from 'react-router-dom'

export default function Extra(props) {
  return (
    <div className = "display-question-container">
        <div className = "display-votes-ans">
           <p> {props.Question.votes}</p>
                <p> votes</p>
 </div>
 <div className = "display-votes-ans">
           <p> {props.Question.noOfAnswers}</p>
                <p> votes</p>
 </div>
 <div className = "display-question-details">
       <Link to = {`/Question/${props.Question._id}`} className = "question-title-link">{props.Question.questionTitle}</Link>
               <div className = "display-tags-time">
                <div className = "display-tags">
                    {
                        props.Question.questionTags.map((tag) => (
                            <p key = {tag}>{tag}</p>
                        ))
                    }
                </div>
                <p className = "display-time">
                   Asked {props.Question.AskedOn} {props.Question.userPosted}
                </p>
               </div>
 </div>
       
              </div>
  
  )
}
