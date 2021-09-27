# React-Carousel-w-Classes-v1

This React Carousel was made using classes and supports:

> - All types of HTML content
> - Swipes
> - Going to selected slide
> - Multiple slides at the same time


## React Carousel component app setup:

#### 1. Getting files 

Download ZIP or clone repository.

#### 2. Installation

Open files on any code editor, e.g. Visual Stodio Code. Create new terminal and execute commands:
```
npm install
npm run webpack
```

#### 3. Running

```
npm start
```



## How does this carousel works?

Carousel maps each child, it receives, on its own slide. For example, the code bellow will result in two slides with each element. 
```javascript
<Carousel slidesDisplay={1}>
  <img src={"dog.jpeg"} className={"slideItem"} alt={"Dog"}/>
  <img src={"cat.png"} className={"slideItem"} alt={"Cat"}/>
  <img src={"bird.png"} className={"slideItem"} alt={"Bird"}/>
</Carousel>
```

However, in this case image of dog and cat will be rendered on the same slide and image of bird will have its own.
```javascript
<Carousel slidesDisplay={1}>
  <div className={"slideItem"}>
    <img src={"dog.jpeg"} alt={"Dog"}/>
    <img src={"cat.png"}  alt={"Cat"}/>
  <div>
  <img src={"bird.png"} className={"slideItem"} alt={"Bird"}/>
</Carousel>
```

## How to use Carousel?

It's easy to use. Just use it. Each child that has to be rendered on a slide should have slideItem class. To show multiple elements on the same slide, they have to be encapsulated in <div> . 

The props of slidesDisplay dictates how many slides are shown at the same time.

```javascript
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
```
