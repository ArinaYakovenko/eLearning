import React from 'react';

const ColorPicker = (props) => {
    const {
        selectColor,
        selectType,
        toggleColors,
        colors,
        setToggleColors,
        setSelectColor,
        setSelectType
    } = props;

    const openColors = () => {
        setToggleColors(true);
    }
    const chooseColor = (color, type) => {
        setSelectColor(color);
        setSelectType(type);
        setToggleColors(false);
    }
    return (
        <div className="type-block">
            <p>Type</p>
            <div
                className="colors"
                style={{
                    backgroundColor: selectType === 'circle' && !toggleColors ? `var(--${selectColor})` : null,
                    border: selectType === 'border' && !toggleColors ? `2px solid var(--${selectColor})` : null
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
                ? <svg onClick={() => setToggleColors(!toggleColors)} className='close-colors' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 5L9 9M5 5L1 1M5 5L1 9M5 5L9 1" stroke="#343434" strokeWidth="1.14286" strokeLinecap="round" />
                </svg>
                : null}
        </div>
    )
}

export default ColorPicker;