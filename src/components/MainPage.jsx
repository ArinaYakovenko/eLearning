import React, { useState } from 'react';

export default function MainPage() {
  const [toggleColors, setToggleColors] = useState(false);
  const [selectColor, setSelectColor] = useState('');
  const [selectType, setSelectType] = useState('');
  const [toggleOccupations, setToggleOccupations] = useState(false);
  const [selectOccupation, setSelectOccupation] = useState('All');
  console.log(selectColor)

  const colors = [
    {
      type: 'circle',
      color: 'grey'
    },
    {
      type: 'circle',
      color: 'yellow'
    },
    {
      type: 'circle',
      color: 'green'
    },
    {
      type: 'border',
      color: 'green'
    },
    {
      type: 'border',
      color: 'grey'
    },
  ];

  const occupation = [
    'All', 'Instructional Design', 'Elearning Development', 'Mobile Learning', 'Instructor-led Training'
  ];

  const openColors = () => {
    if (selectColor) {
      setSelectColor('');
      setSelectType('');
    }
    setToggleColors(!toggleColors);
  }

  const closeColors = () => {
    setToggleColors(false);
  }
  const chooseColor = (color, type) => {
    setSelectColor(color);
    setSelectType(type);
    setToggleColors(false);
  }
  const openOccupation = () => {
    setToggleOccupations(true)
  }
  const closeOccupations = () => {
    setToggleOccupations(false)
  }
  const chooseOccupation = (item) => {
    setSelectOccupation(item);
    setToggleOccupations(false)
  }

  return (
    <div className='main-page'>
      <div className="container-block">
        <h1>Services We Provide</h1>
        <div className="sort-block">
          <div className="search-block">
            <input type="text" placeholder='Search' />
            <span><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.75">
                <path d="M10.9167 10.9166L18 18" stroke="#343434" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M10.6735 10.6736C12.8865 8.46064 12.8865 4.87271 10.6735 2.65973C8.46056 0.446756 4.87262 0.446756 2.65969 2.65973C0.446669 4.87271 0.446669 8.46064 2.65969 10.6736C4.87262 12.8866 8.46056 12.8866 10.6735 10.6736Z" stroke="#343434" strokeWidth="1.7" strokeLinecap="round" />
              </g>
            </svg></span>
          </div>
          <div className="type-block">
            <p>Type</p>
            <div
              className="colors"
              style={{
                backgroundColor: selectType === 'circle' ? `var(--${selectColor})` : null,
                border: selectType === 'border' ? `2px solid var(--${selectColor})` : null
              }}>
              {toggleColors
                ? colors.map((item, index) => {
                  return (<>
                    <div
                      onClick={() => chooseColor(item.color, item.type)}
                      key={index}
                      className='color'
                      style={{
                        backgroundColor: item.type === 'circle' ? `var(--${item.color})` : null,
                        border: item.type === 'circle' ? null : `2px solid var(--${item.color})`,
                        marginLeft: index === 0 ? '5px' : null,
                        marginRight: index === colors.length - 1 ? '5px' : null
                      }}
                    ></div>
                  </>)
                })
                : <svg onClick={openColors} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M16 14L13 17L16 14ZM16 14L13 11L16 14Z" fill="#343434" />
                  <path d="M13 17L16 14L13 11" stroke="#343434" strokeWidth="1.2" strokeLinecap="round" />
                </svg>}
            </div>
            {toggleColors
              ? <svg onClick={closeColors} className='close-colors' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 5L9 9M5 5L1 1M5 5L1 9M5 5L9 1" stroke="#343434" strokeWidth="1.14286" strokeLinecap="round" />
              </svg>
              : null}
          </div>
          <div className="occupation-block">
            <p>Occupation</p>
            <div className="occupations">
              {toggleOccupations
                ? occupation.map((item, index) => { return <div onClick={() => chooseOccupation(item)} key={index} className="occupation">{item}</div> })
                : <><div className="occupation">{selectOccupation}</div>
                  <svg onClick={openOccupation} xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                    <path d="M4.5 4.5L1 1L4.5 4.5ZM4.5 4.5L8 0.999999L4.5 4.5Z" fill="#343434" />
                    <path d="M1 1L4.5 4.5L8 0.999999" stroke="#343434" strokeWidth="1.4" strokeLinecap="round" />
                  </svg> </>}
              {toggleOccupations
                ? <svg onClick={closeOccupations} className='close-colors' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 5L9 9M5 5L1 1M5 5L1 9M5 5L9 1" stroke="#343434" strokeWidth="1.14286" strokeLinecap="round" />
                </svg>
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
