import React, { Component } from 'react'
import round from '../../../images/round.jpg'
import  './HomeStageSectionPhoto.css'
export default class HomeStageSectionPhoto extends Component {
    state={
        data:[

            {  customeStyleSectionOne:'col-md-4 Photo_border_right ' ,photo:round,  title:'WHY H&D',para:'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users.'},
            {customeStyleSectionOne:'col-md-4 Photo_border_right ', photo:round,  title:'VISION & MISSION',para:'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users.'},
            {customeStyleSectionOne:'col-md-4 Photo_border_right_no', photo:round,  title:'OUR VALUES',para:'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users.'}
        ]
    }
    render() {
        return (
            <div ClassName="photo_main_section">
            <div className="conainer">
            <div className="row mx-0">

{this.state.data.map(description=>{
return(
    <>
    
   
   
               <div className={description.customeStyleSectionOne}>
                   <img className="photo_img_res" src={description.photo}/>
                   <h3 className="pt-5">{description.title}</h3>
                   <p className="pt-3 photo_padding_text">{description.para}</p>
                   </div>
                  
                  
                   </>
)
                })}
                
            </div>
            </div>
            </div>
        )
    }
}
