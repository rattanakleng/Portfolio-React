import React from 'react'

const SkillItem = ({src, title, }) => {
    return (
        <div className="col-md-2 col-sm-3 p-2">

            <div className="card border-white">

                <img src={src} className="card-img-top px-5" alt="Program language icon" />

                <div className="card-body">
                    <h6 className="card-title text-center">{title}</h6>
                </div>
            </div>
           
        </div>
    )
}

export default SkillItem
