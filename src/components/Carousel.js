import React from "react";
import SlideProvider from "../context/SlideProvider";
import Screen from "./Screen";
import Slider from "./Slider";
import Indicator from "./Indicator";

class Carousel extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className={"container"}>
                <SlideProvider>
                    <Screen>
                        <Slider slidesDisplay={this.props.slidesDisplay}>
                            {this.props.children}
                        </Slider>
                    </Screen>
                    <Indicator/>
                </SlideProvider>
            </div>
        )
    }
}

export default Carousel;