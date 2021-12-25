import React from "react";

const Background = ({ backgrounds, setBackground, background }) => (
    <div className="field">
        <label className="field__label">Pozadí stránky</label>

        <div className="field__swatch-group field__swatch-group--round">
            {backgrounds.map(b =>
                <div className="field__swatch" key={b.value}>
                    <input type="radio" name="background" id={`background-${b.value}`} defaultChecked={background === b.value} 
                    onChange={(e) => setBackground(e.target.value)} value={b.value}/>
                    <label htmlFor={`background-${b.value}`} className={`swatch--${b.value}`}
                        data-description={b.description}></label>
                </div>
            )}

        </div>

    </div>
);

export default Background;