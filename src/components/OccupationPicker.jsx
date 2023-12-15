import React from 'react';

const OccupationPicker = (props) => {
    const {
        occupation,
        toggleOccupations,
        setToggleOccupations,
        selectOccupation,
        setSelectOccupation
    } = props

    const openOccupation = () => {
        setToggleOccupations(true)
    }
    const chooseOccupation = (item) => {
        setSelectOccupation(item);
        setToggleOccupations(false)
    }
    return (
        <div className="occupation-block">
            <p>Occupation</p>
            <div className="occupations">
                {toggleOccupations
                    ? occupation.map((item, index) => { return <div onClick={() => chooseOccupation(item)} key={index} className="occupation">{item}</div> })
                    : <div onClick={openOccupation} className='selectedOccupation'>
                        <div className="occupation">{selectOccupation}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                            <path d="M4.5 4.5L1 1L4.5 4.5ZM4.5 4.5L8 0.999999L4.5 4.5Z" fill="#343434" />
                            <path d="M1 1L4.5 4.5L8 0.999999" stroke="#343434" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                    </div>}
                {toggleOccupations
                    ? <svg onClick={() => setToggleOccupations(!toggleOccupations)} className='close-colors' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 5L9 9M5 5L1 1M5 5L1 9M5 5L9 1" stroke="#343434" strokeWidth="1.14286" strokeLinecap="round" />
                    </svg>
                    : null}
            </div>
        </div>
    )
}

export default OccupationPicker;
