import React, { useState, useEffect } from 'react';
import Card from './Card';
import ColorPicker from './ColorPicker';
import OccupationPicker from './OccupationPicker';

// images

const Services = ({ scroll }) => {
    console.log(scroll);
    const [toggleColors, setToggleColors] = useState(false);
    const [selectColor, setSelectColor] = useState('yellow');
    const [selectType, setSelectType] = useState('circle');
    const [toggleOccupations, setToggleOccupations] = useState(false);
    const [selectOccupation, setSelectOccupation] = useState('All');
    const [searchText, setSearchText] = useState('');

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

    const colorAndTypeCheck = selectType === 'circle' ? 'white' : `var(--${selectColor})`;

    const cards = [
        {
            img: <svg width="59" height="46" viewBox="0 0 59 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_424_30" fill="white">
                    <rect x="16.6163" y="0.0909424" width="41.4052" height="26.9638" rx="0.728751" />
                </mask>
                <rect x="16.6163" y="0.0909424" width="41.4052" height="26.9638" rx="0.728751" stroke={colorAndTypeCheck} strokeWidth="4.37251" mask="url(#path-1-inside-1_424_30)" />
                <path d="M13.6587 10.2935H10.3209C9.91844 10.2935 9.59216 10.6197 9.59216 11.0222V35.4354C9.59216 35.8378 9.91844 36.1641 10.3209 36.1641H49.5292C49.9317 36.1641 50.2579 35.8378 50.2579 35.4354V30.3341" stroke={colorAndTypeCheck} strokeWidth="2.18625" />
                <path d="M5.89537 19.0385H2.55755C2.15507 19.0385 1.8288 19.3647 1.8288 19.7672V44.1804C1.8288 44.5828 2.15507 44.9091 2.55755 44.9091H41.7658C42.1683 44.9091 42.4946 44.5828 42.4946 44.1804V39.0791" stroke={colorAndTypeCheck} strokeWidth="2.18625" />
            </svg>,
            title: 'Instructional Design',
            text: 'We provide full-service instructional design consulting. From standalone lessons to the series of courses, no job is too large or too small for us.'
        },
        {
            img: <svg width="56" height="49" viewBox="0 0 56 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.67671" y="1.38582" width="52.4967" height="40.6063" rx="2.49103" stroke={colorAndTypeCheck} strokeWidth="2.13517" />
                <line x1="0.609131" y1="32.0191" x2="55.2409" y2="32.0191" stroke={colorAndTypeCheck} strokeWidth="2.13517" />
                <ellipse cx="27.925" cy="37.3609" rx="2.87536" ry="2.84943" fill={colorAndTypeCheck} />
                <line x1="27.9179" y1="43.0597" x2="27.9179" y2="45.9091" stroke={colorAndTypeCheck} strokeWidth="1.42344" />
                <line x1="45.1772" y1="46.9768" x2="10.6729" y2="46.9768" stroke={colorAndTypeCheck} strokeWidth="2.13517" />
            </svg>,
            title: 'Elearning Development',
            text: 'The eLearning products we create feature deep learner engagement and ensure high knowledge transfer.'
        },
        {
            img: <svg width="39" height="57" viewBox="0 0 39 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.27398" y="1.77398" width="35.6792" height="53.1547" rx="6.18925" stroke={colorAndTypeCheck} strokeWidth="2.18444" />
                <line x1="13.6525" y1="6.14277" x2="24.5747" y2="6.14277" stroke={colorAndTypeCheck} strokeWidth="2.18444" strokeLinecap="round" />
                <line x1="0.910156" y1="10.5117" x2="38.0456" y2="10.5117" stroke={colorAndTypeCheck} strokeWidth="2.18444" />
                <line x1="0.181885" y1="44.7346" x2="37.3174" y2="44.7346" stroke={colorAndTypeCheck} strokeWidth="2.18444" />
                <circle cx="19.1139" cy="50.1958" r="2.91259" fill={colorAndTypeCheck} />
            </svg>,
            title: 'Mobile Learning',
            text: 'Let us help you take your learning process anywhere your business may take you. Any place, any time, any device.'
        },
        {
            img: <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.2924 10.885V1.45459H55.4606V22.4917H47.0349L37.8765 31.5594V22.4917H32.0151" stroke={colorAndTypeCheck} strokeWidth="2.17625" />
                <ellipse cx="31.6486" cy="13.4239" rx="1.09901" ry="1.08813" fill="white" />
                <ellipse cx="37.51" cy="13.4239" rx="1.09901" ry="1.08813" fill="white" />
                <ellipse cx="43.3713" cy="13.4239" rx="1.09901" ry="1.08813" fill="white" />
                <path d="M27.9963 27.9323C27.9963 33.6374 23.7991 38.0882 18.827 38.0882C13.8548 38.0882 9.65771 33.6374 9.65771 27.9323C9.65771 22.2272 13.8548 17.7765 18.827 17.7765C23.7991 17.7765 27.9963 22.2272 27.9963 27.9323Z" stroke={colorAndTypeCheck} strokeWidth="2.17625" />
                <path d="M8.93567 27.5696C11.0116 28.295 16.1891 28.5127 20.2921 23.5798C21.4644 28.2225 26.3977 28.1741 28.7178 27.5696" stroke={colorAndTypeCheck} strokeWidth="2.17625" />
                <path d="M14.4309 37.3627V42.4407C10.157 43.4079 1.60913 46.1403 1.60913 49.3321C1.60913 52.524 1.60913 54.531 1.60913 55.1355H36.7774V50.3454C36.7774 49.6826 36.6073 49.0238 36.1833 48.5144C34.5328 46.5316 30.5687 43.448 23.9556 42.4407C23.9556 38.6685 23.9556 36.7582 23.9556 36.6373" stroke={colorAndTypeCheck} strokeWidth="2.17625" />
            </svg>,
            title: 'Instructor-led Training',
            text: 'We are experts at developing a classroom curriculum that meets your business needs and exceeds even your highest expectations'
        }
    ]

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const filteredCards = selectOccupation === 'All'
        ? cards.filter(card => card.title.toLowerCase().includes(searchText.toLowerCase()))
        : [cards.find(card => card.title === selectOccupation)];


    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 4;
    const totalPagesToShow = 3;
    const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
    const hasEnoughItems = filteredCards.length > itemsPerPage;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const [opacity, setOpacity] = useState(0.1);
    
    useEffect(() => {
        const newOpacity = scroll >= 700 ? Math.min((scroll - 700) / 200, 1) : 0.1;
        if (newOpacity >= 0.1) {
            setOpacity(newOpacity);
        }
    }, [scroll]);

    return (
        <div id="services">
            <div className="decoration">
                <div className="decoration-circle-top"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1162" height="956" viewBox="0 0 1162 956" fill="none">
                    <path id="gradientPath" d="M2 0V592.017C2 603.063 10.9543 612.017 22 612.017H1140C1151.05 612.017 1160 620.971 1160 632.017V955.5" stroke={scroll >= 700 ? 'var(--green)' : "#343434"}
                        strokeOpacity={opacity} strokeWidth="3" />
                </svg>
                <div className="decoration-circle-bottom"></div>
            </div>
            <div className="container-block">
                <h1>Services We Provide</h1>
                <div className="sort-block">
                    <div className="search-block">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <span><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.75">
                                <path d="M10.9167 10.9166L18 18" stroke="#343434" strokeWidth="1.7" strokeLinecap="round" />
                                <path d="M10.6735 10.6736C12.8865 8.46064 12.8865 4.87271 10.6735 2.65973C8.46056 0.446756 4.87262 0.446756 2.65969 2.65973C0.446669 4.87271 0.446669 8.46064 2.65969 10.6736C4.87262 12.8866 8.46056 12.8866 10.6735 10.6736Z" stroke="#343434" strokeWidth="1.7" strokeLinecap="round" />
                            </g>
                        </svg></span>
                    </div>
                    <ColorPicker {...{
                        selectColor,
                        selectType,
                        toggleColors,
                        colors,
                        setToggleColors,
                        setSelectColor,
                        setSelectType
                    }} />
                    <OccupationPicker {...{
                        occupation,
                        toggleOccupations,
                        setToggleOccupations,
                        selectOccupation,
                        setSelectOccupation
                    }} />
                </div>
                <div className='services'>
                    <div className="services-card">
                        {filteredCards.map((card, index) => (
                            <Card key={index} color={selectColor} type={selectType} card={card} />
                        ))}
                    </div>
                    <div className="pagination">
                        <svg
                            className='previous' xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                            <g opacity="0.2">
                                <path d="M2 8L8 2L2 8ZM2 8L8 14L2 8Z" fill="var(--text-color)" />
                                <path d="M8 2L2 8L8 14" stroke="var(--text-color)" strokeWidth="2.25" strokeLinecap="round" />
                            </g>
                        </svg>
                        {Array.from({ length: totalPagesToShow }, (_, index) => {
                            const pageNumber = index + 1;
                            const showPage = hasEnoughItems ? pageNumber : totalPages === 1 ? pageNumber : null;

                            return (
                                <div
                                    className='pagination-number'
                                    style={{
                                        background: totalPages === index + 1 ? `var(--search-background)` : 'inherit',
                                        opacity: totalPages !== index + 1 ? 0.2 : 1,
                                        cursor: currentPage === showPage ? 'default' : 'pointer',
                                        pointerEvents: currentPage === showPage ? 'none' : 'auto',

                                    }}
                                    key={pageNumber}
                                    onClick={currentPage === showPage ? undefined : () => handlePageChange(showPage)}
                                >
                                    {showPage}
                                </div>
                            );
                        })}
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                            <g opacity="0.2">
                                <path d="M8 8L2 2L8 8ZM8 8L2 14L8 8Z" fill="var(--text-color)" />
                                <path d="M2 2L8 8L2 14" stroke="var(--text-color)" strokeWidth="2.25" strokeLinecap="round" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services