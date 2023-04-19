import React from 'react'
import {Link} from 'react-router-dom'
import Avator from './Avator'

export default function DisplayAnswers(props) {
  return (
    <div>
        {props.question.Answers.map((ans) =>
        <div className = " display-ans"><p>
            {ans.answerBody}
        </p>
        <div className = "question-actions-user">
            <div>
                <button type= 'button'>Share</button>
                <button type= 'button'>Delete</button>

            </div>
            <div>
                <p>{ans.answeredOn}</p>
                <Link to = {`/User/${ans.userId}`} className = "user-link" style ={{color : "#0086d8"}}>
                                   <Avator backgroundColor = "green" px= "8px" py = "5px"> {ans.userAnswered.charAt(0).toUpperCase()}</Avator>
                                <div>{ans.userAnswered}</div>
                                </Link>
                </div>
            
            </div>
        </div>
        )
        
        }
    </div>
  )
}
