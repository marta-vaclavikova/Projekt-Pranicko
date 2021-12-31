import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Snowfall from "react-snowfall";
import './card.css';
import czechitasLogo from './img/czechitas.svg';
import { useAudio } from '../../hooks/useAudio';

const Card = () => {

    const { code } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://xmas-api.itgirls.cz/cards/${code}`)
            .then(response => response.json())
            .then(json => {
                if (json.success) {
                    setData(json.data);
                } else {
                    setError(json.error);
                }
            });
    }, []);

    if (error) {
        return error;
    }
    if (!data) {
        return 'Loading...';
    }

    return (

        <CardBody data={data}/>

    );
}

const CardBody = ({ data }) => {

    const [isPlaying, play, pause] = useAudio(`../assets/audio/${data.music}.mp3`);
    const [open, setOpen] = useState(false);

    const openCard = () => {
        if (open) {
            pause();
        } else {
            play();
        }
        setOpen(!open);
    }

    return (

        <div className={`background background--${data?.background}`}>

            <div className="snow">
                <Snowfall snowflakeCount={data?.snow} />
            </div>



            <div className={`card card--${data?.color} ${open ? 'card--open' : ''}`} onClick={() => openCard()}>



                <div className="cover">
                    <img className="cover__image" src={`/assets/covers/${data?.cover}.svg`} />
                </div>


                <div className="inside-left">
                    <div className="inside-left__content">
                        <div className="inside-left__text">{data?.text}</div>
                        <div className="inside-left__sender">{data?.sender}</div>
                    </div>
                    <img className="inside-left__logo" src={czechitasLogo} alt="Czechitas" />
                </div>

                <div className="inside-right">
                    <div className="photo photo1"><img src="/assets/photos/photo5.jpg" /></div>
                    <div className="photo photo2"><img src="/assets/photos/photo6.jpg" /></div>
                    <div className="photo photo3"><img src="/assets/photos/photo7.jpg" /></div>
                    <div className="photo photo4"><img src="/assets/photos/photo8.jpg" /></div>
                </div>

            </div>

            <p className="instructions">Kliknutím mě otevři</p>

        </div>

    );
}

export default Card;