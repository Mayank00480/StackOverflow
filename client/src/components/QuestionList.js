import React from 'react'
import Extra from './Extra'

export default function QuestionList(props) {
  return (
   
   <p>{props.questionList.map((question) => 
    <Extra Question = {question} /> 
    )}</p>
  
  )
}
