import React from "react";
import SlideContext from "./SlideContext";

class SlideProvider extends React.Component{
    state = {
        currentSlide: 0,
        slidesCount: 0,
    };

    render(){
        return(
            <SlideContext.Provider value={{
                currentSlide: this.state.currentSlide,
                positSlide: current => {
                    this.setState({currentSlide: current});
                },
                slidesCount: this.state.slidesCount,
                positCount: count => {
                    this.setState({slidesCount: count});
                },
            }}>
                {this.props.children}
            </SlideContext.Provider>
        );
    };
}

export default SlideProvider;