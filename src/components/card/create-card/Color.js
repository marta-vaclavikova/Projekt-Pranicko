import React from "react";

const Color = ({ colors, color, setColor }) => (
    <div className="field">
        <label className="field__label">Barva přáníčka</label>

        <div className="field__swatch-group field__swatch-group--round">
            {colors.map(c =>
                <div className="field__swatch" key={c.value}>
                    <input type="radio" name="color" id={`color-${c.value}`} defaultChecked={color === c.value} 
                    onChange={(e) => setColor(e.target.value)} value={c.value}/>
                    <label htmlFor={`color-${c.value}`} className={`swatch--${c.value}`} data-description={c.description}></label>
                </div>
            )}
        </div>

    </div>
);

export default Color;