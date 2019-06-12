import React, { Component } from 'react'
import './HomeStageSectionTwo.css'
export default class HomeStageSection extends Component {
    state={
        data:[

            {customeStyleSectionOne:'col-md-6 pl-0 SectionTwoBorder' ,title:'WELCOME TO H&D',subtitle:'We hope that you will find inspiration here!',paraTitle:'We provide clients with the highest possible level of service anywhere in the area.'},
            {customeStyleSectiontwo:'col-md-6 SectionTwopadding_sytle',para:'From concept through construction, to the finishing touches of each of your projects, you can rely on the our team to deliver a personal environment tailored specifically for you. By interpreting an individual client’s style and needs, our licensed designers can successfully incorporate function while following current fashion trends.'}
        ]
    }
    render() {
        return (
            <div className="row mx-0 MainSelection_Home">
                <div className="container Home_MainSelection">

                <h1 className="title_Home_style">WELCOME TO H&D</h1>
                <h4 className="pb-5 Paragrap_style">We hope that you will find inspiration here!</h4>
                <div className="row mx-0">   

                {this.state.data.map(description=>{
return(
    <>
    


               <div className={description.customeStyleSectionOne}>
                   <p className="titlepargraph_style">{description.paraTitle}</p>
                   </div>
                   <div className={description.customeStyleSectiontwo}>
                   <p className="SectionTwopara_style">{description.para}</p>
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
