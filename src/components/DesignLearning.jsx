import React, { useEffect, useState } from 'react'

// images
import man from '../assets/images/DesignMan.png';
import bg from '../assets/images/DesignBg.png';

const DesignLearning = ({ scroll }) => {
    const [opacity, setOpacity] = useState(0.1);

    useEffect(() => {
        const newOpacity = scroll >= 1500 ? Math.min((scroll - 1500) / 200, 1) : 0.1;
        if (newOpacity >= 0.1) {
            setOpacity(newOpacity);
        }
    }, [scroll]);

    return (
        <section className='design-learning'>
            <img className='bg' src={bg} alt="" />
            <div className="design-block">
                <div className="decoration">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1162" height="411" viewBox="0 0 1162 411" fill="none">
                        <path d="M1160 -6.10352e-05V323.483C1160 334.529 1151.05 343.483 1140 343.483H22C10.9543 343.483 2 352.437 2 363.483V410.5" stroke={scroll >= 1500 ? 'var(--green)' : "#343434"}
                            strokeOpacity={opacity} stroke-width="3" />
                    </svg>
                </div>
                <div className="container-block">
                    <div className="design-info">
                        <h1>We Design Learning.</h1>
                        <p>What We Can Do For You?</p>
                        <button>Know more</button>
                    </div>
                </div>
                <img className='man' src={man} alt="DesignMan" />
            </div>
        </section >
    )
}

export default DesignLearning
