import React from 'react'
import './LatestProjects.css'

const LatestProjects = () => {
    return (
        <div>
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="row LatestProjectSection">
                    <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 ourProjectSectionWraper" data-aos="fade-down">
                        <div className="ourLastestSec">
                            <h3>OUR SERVICES</h3>
                            <p className="txt-italic">Make sure your property looks its BEST with FINESSE! </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 ourProjectSectionWraper" data-aos="flip-down">
                        <div className="ourLastestSecRight">
                            <p>Our Services include home staging for sellers, real estate agents, and brokers. We are well versed with Vacant staging as well as Occupied staging. Our home staging services can work wonders in attracting the prominent home buyers and help increase the value of your home. Contact us today to find out how we can get you TOP DOLLAR in the current housing market! </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestProjects
