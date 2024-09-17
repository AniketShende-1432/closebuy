// import React from 'react'
import React, { useState } from 'react';
import './Community.css';
const Community = () => {
    const cards = [
        { id: 1, img:'https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww',
            name:'Suresh Yadav',shop:'blinkit shop',city:'Pune ,Maharashtra'
         },
        { id: 2, img:'https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947',
            name:'Rajesh Sawant',shop:'retail Store',city:'Nagpur, Maharashtra'
         },
        { id: 3, img:'https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D',
            name:'Ramesh Shedge',shop:'Own Store',city:'Mumbai, Maharashtra'
         },
        { id: 4, img:'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
            name:'Sahil Mulik',shop:'Food Store',city:'Mumbai, Maharashtra'
         },
        { id: 5, img:'https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwc21pbGluZ3xlbnwwfHwwfHx8MA%3D%3D',
            name:'Sachin Shinde',shop:'Super Market',city:'Mumbai, Maharashtra'
         },
        { id: 6, img:'https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg',
            name:'Aditya Kundlik',shop:'My Store',city:'Pune, Maharashtra'
         },
        { id: 7, img:'https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg',
            name:'Mayur Khandare',shop:'Best Store',city:'Thane, Maharashtra'
         },
        { id: 8, img:'https://www.shutterstock.com/image-photo/headshot-handsome-bearded-serious-young-260nw-1119460865.jpg',
            name:'Harsh Mehta',shop:'Retail Store',city:'Nagpur, Maharashtra'
         },
    ];

    // State to keep track of the first visible card's index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Click handler for right arrow
    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
          // Calculate the next index for cyclic behavior
          return (prevIndex + 1) % cards.length;
        });
      };
    
      // Click handler for left arrow with cyclic behavior
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
          // Calculate the previous index for cyclic behavior
          return (prevIndex - 1 + cards.length) % cards.length;
        });
      };
    return (
        <>
            {/* <div className='chead'><h1>View Community</h1></div>
            <div className='commcont'>
                {Array.from({ length: 5 }).map((_, index) => (
                    <div className='box' key={index}>
                        <div>
                            <img className='imagep' src='https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww' alt={`community-${index}`} />
                        </div>
                        <div className='boxc'>
                            <div>Suresh Yadav</div>
                            <div>Blinkit Shop</div>
                            <div>Pune, Maharashtra</div>
                            <button className='btn'>Read More</button>
                        </div>
                    </div>
                ))}
            </div> */}
            <div className='chead'><h1>View Community</h1></div>
            <div className="card-slider">
                <button onClick={handlePrev} className="arrow left-arrow">{'<'}</button>
                <div className="card-container">
                    {cards.slice(currentIndex, currentIndex + 4).concat(
                        cards.slice(0, Math.max(0, (currentIndex + 4) - cards.length))
                    ).map((card, index) => (
                        <div className='box' key={index}>
                        <div>
                            <img className='imagep' src={card.img} alt={`community-${index}`} />
                        </div>
                        <div className='boxc'>
                            <div>{card.name}</div>
                            <div>{card.shop}</div>
                            <div>{card.city}</div>
                            <button className='btn'>Read More</button>
                        </div>
                    </div>
                    ))}
                </div>
                <button onClick={handleNext} className="arrow right-arrow">{'>'}</button>
            </div>
        </>
    )
}

export default Community