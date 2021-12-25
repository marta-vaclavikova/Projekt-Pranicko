import React from "react";
import { Link } from 'react-router-dom';

const CardDone = ({ code, reset }) => {

    return (
        <div className="pickup">

            <p className="pickup__label">Přímý odkaz na přáníčko</p>

            <div className="box shadow mb-30">
                <div className="box__inside pt-0 pb-0">
                    <Link to={`/card/${code}`} className="pickup__url">{window.location.origin}/card/{code}</Link>
                    <p className="pickup__description">
                        Tento odkaz pošli emailem, přes messenger nebo ho dej na sociální sítě. Po kliknutí na odkaz se zobrazí tvoje přáníčko.
                    </p>
                </div>
            </div>


            <p className="pickup__label">Kód tvého přáníčka</p>

            <div className="box shadow mb-30">
                <div className="box__inside pt-0 pb-0">
                    <div className="pickup__code">{code}</div>
                    <p className="pickup__description">
                        S tímto kódem si kdokoliv může vyzvednout tvoje uložené přáníčko. Hodí se, když chceš přáníčko poslat třeba SMSkou a nechceš opisovat celou adresu.
                    </p>
                </div>
            </div>

            <button className="button button--big" onClick={() => reset()}>Vytvořit další přáníčko</button>

        </div>


    );
}
export default CardDone;