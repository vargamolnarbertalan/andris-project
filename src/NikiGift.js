import React, { useState } from 'react';
import './NikiGift.css';
import ScratchCard from 'react-scratchcard';



// Component that toggles based on correct input
const NikiGift = () => {
    const [counter, setCounter] = useState(0);
    const [isDisabled, setIsDisabled] = useState(true);
    const [myColor, setMyColor] = useState('#f8f8f880');

    const settings = [
        {
            width: 300,
            height: 300,
            image: 'https://i.imgur.com/AJH5Vxf.jpeg',
            finishPercent: 95,
            onComplete: () => {
                console.log('The card is now clear!')
                setIsDisabled(false)
                setMyColor('red')
            }
        },
        {
            width: 300,
            height: 300,
            image: 'https://i.imgur.com/fhnrELx.jpeg',
            finishPercent: 95,
            onComplete: () => {
                console.log('The card is now clear!')
                setMyColor('red')
                setIsDisabled(false)
            }
        }, {
            width: 300,
            height: 300,
            image: 'https://i.imgur.com/Q0CtpYB.jpeg',
            finishPercent: 95,
            onComplete: () => {
                console.log('The card is now clear!')
                setMyColor('red')
                setIsDisabled(false)
            }
        }, {
            width: 300,
            height: 300,
            image: 'https://i.imgur.com/CpHC3DR.jpeg',
            finishPercent: 95,
            onComplete: () => {
                console.log('The card is now clear!')
                setMyColor('red')
                setIsDisabled(false)
            }
        },
        {
            width: 300,
            height: 300,
            image: 'https://i.imgur.com/LkRULvA.jpeg',
            finishPercent: 95,
            onComplete: () => {
                console.log('The card is now clear!')
                setMyColor('red')
                setIsDisabled(false)
            }
        }, 
        {
            width: 300,
            height: 300,
            image: 'https://i.imgur.com/XnGPZPG.jpeg',
            finishPercent: 95,
            onComplete: () => {
                console.log('The card is now clear!')
            }
        }
    ];

    function countPlus(){
        setMyColor('#f8f8f880')
        setIsDisabled(true)
        setCounter(counter + 1)
        console.log(counter)
        if (counter > 3) setIsDisabled(true)
    }

    return (
        <div className='giga-container'>
            <div className='scratch-title'>Kapard!</div>
            <div className='cards-mine'>
            <div className='my-cardbody'>
                <ScratchCard {...settings[0]}>Ajándékod:<br></br>Egy ölelés! 🤗</ScratchCard>
            </div>
            <div className='my-cardbody'>
                    <ScratchCard {...settings[1]}>Ajándékod:<br></br>5 ingyenes fülpuszi! 😚</ScratchCard>
            </div>
            <div className='my-cardbody'>
                <ScratchCard {...settings[2]}>Ajándékod:<br></br>Egy csokor rózsa! 🌹</ScratchCard>
            </div>
            <div className='my-cardbody'>
                <ScratchCard {...settings[3]}>Ajándékod:<br></br>Egy szett takarításhoz! 🧹🧼🧽</ScratchCard>
            </div>
            <div className='my-cardbody'>
                <ScratchCard {...settings[4]}>Ajándékod:<br></br>Egy évfordulós vacsora! 🥞</ScratchCard>
            </div>
            <div className='my-cardbody'>
                <ScratchCard {...settings[5]}>Ajándékod:<br></br>Egy utazás Amerikába! ✈️</ScratchCard>
            </div>
            </div>

            {false && <button className='giftbutton-small' style={{backgroundColor: myColor}} disabled={isDisabled} onClick={countPlus}>Következő</button>}

        </div>
    );
}

export default NikiGift;