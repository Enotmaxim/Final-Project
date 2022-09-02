import React, {Component, useState} from 'react';
import MyButton from "../UI/button/MyButton";
import sliderFile from './sliderFile.json'

class Foto extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            currentSlideImage: 0
        })
    }
    render() {
        return (
            <div className="container" style={{textAlign: "center"}}>
                <MyButton onClick={() => this.handlePrevButton(sliderFile)}>Prev</MyButton>
                <img src={sliderFile[this.state.currentSlideImage]}/>
                {sliderFile.length
                    ?
                    <MyButton value = {sliderFile} onClick={() => this.handleNextButton(sliderFile) }>Next</MyButton>

                    :
                    console.log("all gone")
                  }
            </div>
        );
    }
    handlePrevButton = () => {
        let currentSlideImage = this.state.currentSlideImage;
        this.setState({
            currentSlideImage: --currentSlideImage
        })
    }

    handleNextButton = () => {
        let currentSlideImage = this.state.currentSlideImage;
        this.setState({
           currentSlideImage : ++currentSlideImage
        })
        console.log(this.state.currentSlideImage);
        console.log(this.state);
        console.log(this.props);
    }


}

export default Foto;