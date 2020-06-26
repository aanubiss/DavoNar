import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home/Home'

class App extends React.Component {
  state = {
    posts: [
      {
        imgUrl: "https://avatars.mds.yandex.net/get-pdb/472427/b954f0d2-1ed7-4358-a7c4-7d1bc0d5db5e/s1200?webp=false",
        title: "Title 1",
        by: "AnubisS",
        date: "26.06.2020"
      },
      {
        imgUrl: "https://avatars.mds.yandex.net/get-pdb/963327/e0617785-b12b-4121-a346-cb994485b334/s1200?webp=false",
        title: "w",
        by: "s",
        date: "0001"
      },
      {
        imgUrl: "https://avatars.mds.yandex.net/get-pdb/2838509/bdc1cf2c-f7ee-458d-a6c6-3c08cff4db3a/s1200?webp=false",
        title: "e",
        by: "d",
        date: "0002"
      },
      {
        imgUrl: "https://f.vividscreen.info/soft/b416a194227ccc11469f0c4171604205/Retro-Portrait-2880x1920.jpg",
        title: "r",
        by: "f",
        date: "0003"
      },
      {
        imgUrl: "https://torg-oboi.ru/upload/iblock/24e/retro-avto-a-049-3-0kh2-38-m.jpg",
        title: "t",
        by: "g",
        date: "0004"
      },
      {
        imgUrl: "https://avatars.mds.yandex.net/get-pdb/992060/7fb037de-6748-44f5-a48c-0214645842fa/s1200?webp=false",
        title: "y",
        by: "h",
        date: "0005"
      },
      {
        imgUrl: "https://www.zastavki.com/pictures/1600x1200/2009/Drawn_wallpapers_Red_retro_car_013753_.jpg",
        title: "u",
        by: "j",
        date: "0006"
      },
      {
        imgUrl: "https://avatars.mds.yandex.net/get-pdb/2449556/361139a1-aaf2-4f06-a34e-e9856ed7c138/s1200?webp=false",
        title: "i",
        by: "k",
        date: "0007"
      },
      {
        imgUrl: "https://w-dog.ru/wallpapers/3/13/521942378721505/sara-dzhejn-uoddell-kostyum-mashina-avto-retro-vintazh.jpg",
        title: "o",
        by: "l",
        date: "0008"
      }
    ],
    profiles:[
      {
        login: "AnubisS",
        password: "123456Tumo",
        email: "narek.ghazaryan1.g@tumo.org",
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path='/' render={() => <Home prop={this.state.posts} />} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
