import React from 'react'
import exprience from '../data/exprience.json'
import './Exprience.css'

export default function Exprience() {
  return <>
    <div className='container ex' id='exprience'>
        <h1>EXPRIENCE</h1>
        {
            exprience.map((data)=>{
                return<>
                    <div className='ex-items text-center my-5' key={data.id} data-aos="zoom-in" data-aos-duration='1000'>
                        <div className='left'>
                            <img src={`/assets/${data.imageSrc}`} alt=''/>
                        </div>
                        <div className='right'>
                            <h2>{data.role}</h2>
                            <h4>
                                <span style={{color:'yellowgreen'}}>
                                    {data.startDate}{" "}{data.endDate}{" "}
                                </span>
                                <span style={{color:'yellow'}}>
                                    {data.location} 
                                </span>
                                
                            </h4>
                            <h5 style={{color:'lime'}}>{data.experiences[0]}</h5>
                            <h5 style={{color:'lime'}}>{data.experiences[1]}</h5>
                        </div>


                    </div>
                </>
            })
        }
    </div>
  </>
}
