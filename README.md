# react-native-swal

This library is really simple popup modal same as Sweet Alert in React Native.

React-native-swal popup for a second(It can be cutomize) and closed.


![ezgif-5-3efbc9f5a3](https://user-images.githubusercontent.com/105104335/223360296-37321a8c-d263-415d-8428-de4c9f7c4b9c.gif)

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
        duration={1000}
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
| backgroundcolor           | O        | string                                                                                                                | background color for swal                                                                                                  |
| color         | O       | string                                                                                                                | text color for swal                                                                           |
| positionFromBottom                       | O        | number                                                                                                           | set the position from bottom                                                                          |
| fontsize                       | O        | number                                                                                                               | text font size                                                                                                                 |
| touchOutSideClose                | O        | boolean                                                                                                            | If you choose this props as true this modal is closed when you click outside of modal                                                                                    |
| duration                     | O        | number |set how long swal opened |                                                               
