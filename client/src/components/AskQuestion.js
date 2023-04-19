import React from 'react'
import './AskQuestion.css'

export default function AskQuestion() {

  return (<div className = "ask-container">
    <div className = "ask-ques-container">
        <h1>Ask a Public Question</h1>
    <form>
        <div className = "ask-form-container">
            <label htmlFor = "ask-ques-title">
                <h4>title</h4>
                <p>Be specific ad imagine you'r asking a question to another person</p>
                <input type = "text" placeholder = "e.g. Is there an R function for finding the index of an element in a vector?" id = "ask-ques-title" />
            </label>
            <label htmlFor = "ask-ques-body">
                <h4>Body</h4>
                <p> Include all the information someone would need to answer your
                question</p>
                <textarea rows ="10" id = "ask-ques-body" cols ="30" name = ""></textarea>
            </label>
            <label htmlFor = "ask-ques-tags">
                <h4>Tags</h4>
                <p>Add up to 5 tags to describe what your question is about</p>
                <input type = "text" placeholder = "e.g. (xml typescript wordpress)" id = "ask-ques-tags" />
            </label>
        </div>
        <input type ="submit" value = "Review Your Question" className = "review-btn" />
    </form>
 
    </div>
   
  
</div>
    )
}
