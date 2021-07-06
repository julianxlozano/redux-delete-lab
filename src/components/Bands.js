import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
  
    renderBands = () => this.props.bands.map(band=><Band delete={this.props.delete} key={band.id} name={band.name} band={band}/>)
    render() {
        return (
            <ul>
                {this.renderBands()}
            </ul>
        );
    }
}

export default Bands;