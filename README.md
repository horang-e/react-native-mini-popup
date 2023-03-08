# react-native-swal




This library is really simple popup modal same as Sweet Alert in React.

React-native-swal popup for a second(It can be cutomize) and closed.


![ezgif-5-3efbc9f5a3](https://user-images.githubusercontent.com/105104335/223360296-37321a8c-d263-415d-8428-de4c9f7c4b9c.gif)
![ezgif-1-48c03b2d4b](https://user-images.githubusercontent.com/105104335/223648951-9154156b-3b5a-44a4-889b-5a62d81c2da7.gif)

한국어 설명 :https://velog.io/@horang-e/React-native-swal-npm-%EB%B0%B0%ED%8F%AC

## Document

- [Installation](#installation)
- [How to use](#how-to-use)
- [Properties](#properties)

## Installation

```bash
npm i react-native-swal
```

## How to use

Import react-native-swal.

```js
import Swal from 'react-native-swal';
```

Add the source code below to where you want to use it.

```js
return (
     <Swal
        swal={swal}
        setSwal={setSwal}
        text={text}
        backgroundcolor="#225"
        color="white"
        positionFromBottom={80}
        fontsize={16}
        touchOutSideClose={true}
        duration={3000}
        textStyle={{fontFamily: 'NotoSans'}}
        button={true}
        buttonText={'hello'}
        btnFunction={() => setMode(!mod)}
        btnStyle={{color: 'red'}}
        popup={false}
      />
);
```

## Properties

Below are `react-native-swal` specific properties.

| Prop                           | required | Type                                                                                                                  | Description                                                                                                                                |
| ------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| swal | O        | boolean                                                                                                               | modal's state                         |
| setSwal                  | O        | (open: boolean) => void                                                                                                               | modal's setState |
| text                 | O        | string                                                                                                               |text you want to show                                                                                     |
| backgroundcolor           | X        | string                                                                                                                | background color for swal (default : "black")                                                                                                 |
| color         | X       | string                                                                                                                | text color for swal (default : "white")                                                                       |
| positionFromBottom                       | X        | number                                                                                                           | set the position from bottom  (default : 80)                                                                         |
| fontsize                       | X        | number                                                                                                               | text font size   (default : 16)                                                                                                               |
| touchOutSideClose                | X        | boolean                                                                                                            | If you choose this props as true this modal is closed when you click outside of modal  (default : false)                                                                                   |
| popup                     | X        | boolean |set swal is pop up and gone or not(default : true) |
| duration                     | X        | number |set how long swal opened  (default : 2000(2s)(popup Prop has to be true))| 
| textStyle                     | X        | {} |set text style in modal-> main text|
| button                     | X        | boolean | add additional button to do some function when you click it|
| buttonText                     | X        | string | set button's text(it shows when button Prop is true)|
| btnStyle                     | X        | {} |set button's textStyle underline is default (it shows when button Prop is true)|
| btnFunction                     | X        | () => void |set function when you hit the button(it shows when button Prop is true)|
