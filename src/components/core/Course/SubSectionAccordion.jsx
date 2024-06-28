import React from 'react'

const SubSectionAccordion = ({section, formatTime, activate}) => {


  return (
        <div>
            {
                section?.subSection.map((sub, ind)=>(
                <div key={ind} className={` ${activate?" h-0":" transition duration h-max"} flex justify-between px-10  mx-auto border border-richblack-50 py-5 items-center`}>
                    <p>{sub.title}</p>
                    <p>{formatTime(sub.timeDuration)} min</p>
                </div>
                ))
            }
        </div>

  )
}

export default SubSectionAccordion