import React, { Component } from 'react';

class Plot extends React.Component {
    render() { 
        return (
            <div className="plot-div">
                <div className="plot-grid">
                    <div class="plot-grid-item">
                        <button className="button-row"><span className=".button-row-text">+</span></button>
                        <button className="button-row"><span className=".button-row-text">pumpkin</span></button>
                        <button className="button-row"><p className=".button-row-text">pumpkin</p></button>
                        <button className="button-row"><p className=".button-row-text">pumpkin</p></button>
                        <button className="button-row"><p className=".button-row-text">pumpkin</p></button>
                        <button className="button-row"><p className=".button-row-text">pumpkin</p></button>
                        <button className="button-row"><p className=".button-row-text">pumpkin</p></button>
                    </div>
                    <div class="plot-grid-item">
                    <button className="button-row"><p className=".button-row-text">+</p></button>
                    </div>
                    <div class="plot-grid-item">3</div>
                    <div class="plot-grid-item">4</div>
                    <div class="plot-grid-item">5</div>
                    <div class="plot-grid-item">6</div>
                    <div class="plot-grid-item">7</div>
                    <div class="plot-grid-item">8</div>
                </div>
            </div>
        )
    }
}
 
export default Plot ;

