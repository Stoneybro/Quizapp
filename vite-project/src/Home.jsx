import {AiOutlineStar,AiOutlineBulb} from 'react-icons/ai'
import {RiVipCrownLine,RiHomeSmileFill} from 'react-icons/ri'
import {BiBasketball,BiPalette,BiTv,BiWorld,BiDish,BiBarChartAlt2,BiHistory} from 'react-icons/bi'
import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import Bnavbar from './bottomnavbar'
import categorydata from './category'
import Q from './Vector.svg'
import {FaPlay,FaHistory,FaHome} from 'react-icons/fa'
//ApiCall(difficultyapi,categoryapi)

function App(props) {
  const [category,setcategory]=useState(categorydata)
  const [difficultybutton,setdifficultybutton]=React.useState(false)
  const [categorybutton,setcategorybutton]=React.useState(false)
  const [start,setstart]=React.useState('/')
  const [scoredata,setscoredata]=React.useState(JSON.parse(localStorage.getItem('scores')))
  const [choosebutton,setchoosebutton]=React.useState(false)
  const [colorbutton,setcolorbutton]=React.useState()
const{byCategory,byDifficulty}=category
const difficulty=Object.keys(byDifficulty)
  const categories=Object.keys(byCategory)

  function categoryset(categori) {
    props.apiCall(categori)
    setcategorybutton(true)

  }
  function difficultyset(difficulties) {
    props.apiCall(difficulties)
    setdifficultybutton(true)

  }
const points=scoredata[0].reduce((total,amount)=>{

  return parseInt(total)+parseInt(amount.score)
},[0])
const percent=scoredata[0].reduce((total,amount)=>{

return parseInt(total)+parseInt(amount.score)/scoredata[0].length
  
},[0])
let percentage=Math.round(percent*10)
console.log(percentage);


    return(
      // <Frontpage change={changestart} categories={category} />
      <div className="quizapp">
        <div className="quizapp-text-profile">
          <div className="quizapp-text">Quizapp</div>
          <div className="quizapp-profile">K</div>
        </div>
      <div className="home-dashboard">
        <div className="points">
          <AiOutlineStar  size={30} />
          <div className="points-text">POINTS</div>
          <div className="points-figure">{points}</div>
        </div>
        <div className="win-percent">
            <RiVipCrownLine size={30} />
            <div className="win-percent-text">WIN PERCENTAGE</div>
            <div className="win-percent-figure">{percentage}%</div>
        </div>
        <div className="rank">
              <BiBarChartAlt2  size={30} />
              <div className="rank-text">RANK</div>
              <div className="rank-figure">1</div>
        </div>
    </div>
   <div className="category-difficulty-container">
    <div className="category">
      <h3>
        Category 
      </h3>
      <div className="category-container">
      <div className="btn-category-container">
     {categories.map((categories,index)=>{
        return <button key={index} className="button-color" onClick={()=>{categoryset(categories);}}>{categories}</button>
     })}
      </div>
    </div>
    </div>
    <div className="difficulty">
      <h3>Difficulty</h3>
      <div className="btn-difficulty-container">
      {difficulty.map((difficulties,index)=>{
        
        return <button key={index} className={`button-color `} onClick={()=>{difficultyset(difficulties);}}>{difficulties}</button>
     })}
      </div>
    </div>
    </div>
     {difficultybutton&&categorybutton? <div className='start'><Link to={'/Quiz'}state={props.categorydifficulty} >Start Quiz</Link></div>:<div className='start inactive'>Start Quiz</div>}
     {<div className='signup'>
      <div className="signup-img-title">
      <img src={Q} alt="" />
     <div className="signup-title">Quizzapp</div>
      </div>
     <div className="signup-input">
     <input type="text" placeholder='Name' />
      <input type="text" placeholder='Email' />
     </div>
     
      <button>Enter Quizapp</button>
      </div>}
   <Bnavbar />
  </div>
    )

}

export default App
