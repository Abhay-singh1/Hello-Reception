import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card-div' style={{width:`${props.width }`, height:`${props.height}`, backgroundImage:`${props.bgcolor}` }}>
        <h5 className='title' style={{color:`${props.textColor}`}}>{props.plan}</h5>
        <table >
          <tbody>
          <tr>
            <th style={{color:`${props.textColor}`}}>{props.price}</th>
          </tr>
          <tr>
            <td style={{color:`${props.textColor}`}}>{props.storage}</td>
          </tr>
          <tr>
            <td style={{color:`${props.textColor}`}}>{props.user}</td>
          </tr>
          <tr>
            <td style={{color:`${props.textColor}`}}>{props.upload}</td>
          </tr>
          </tbody>
        </table>
        <button style={{backgroundImage:`${props.btnbg}`, color:`${props.btntext}`}}>LEARN MORE</button>
    </div>
  )
}



export default Card