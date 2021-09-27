import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from "./components/Carousel";

class App extends React.Component {

    render() {
        return (
            <Carousel slidesDisplay={1}>
                <img src={"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"} className={"slideItem"} alt={"Baby yoda"}/>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"} className={"slideItem"} alt={"Phone"}/>
            </Carousel>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))