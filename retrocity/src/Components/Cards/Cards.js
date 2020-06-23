import React from 'react';
import './Cards.css'
import Card from './Card/Card';

const Cards = (props) => {
    return ( 
        <div className="Cards">
            <Card imgUrl="https://avatars.mds.yandex.net/get-pdb/472427/b954f0d2-1ed7-4358-a7c4-7d1bc0d5db5e/s1200?webp=false" title="Title" by="By:" date="Date" />
            <Card imgUrl="https://avatars.mds.yandex.net/get-pdb/963327/e0617785-b12b-4121-a346-cb994485b334/s1200?webp=false" title="w" by="s" date="0001" />
            <Card imgUrl="https://avatars.mds.yandex.net/get-pdb/2838509/bdc1cf2c-f7ee-458d-a6c6-3c08cff4db3a/s1200?webp=false" title="e" by="d" date="0002" />
            <Card imgUrl="https://f.vividscreen.info/soft/b416a194227ccc11469f0c4171604205/Retro-Portrait-2880x1920.jpg" title="r" by="f" date="0003" />
            <Card imgUrl="https://torg-oboi.ru/upload/iblock/24e/retro-avto-a-049-3-0kh2-38-m.jpg" title="t" by="g" date="0004" />
            <Card imgUrl="https://avatars.mds.yandex.net/get-pdb/992060/7fb037de-6748-44f5-a48c-0214645842fa/s1200?webp=false" title="y" by="h" date="0005" />
            <Card imgUrl="https://www.zastavki.com/pictures/1600x1200/2009/Drawn_wallpapers_Red_retro_car_013753_.jpg" title="u" by="j" date="0006" />
            <Card imgUrl="https://avatars.mds.yandex.net/get-pdb/2449556/361139a1-aaf2-4f06-a34e-e9856ed7c138/s1200?webp=false" title="i" by="k" date="0007" />
        </div>    
    );
}

export default Cards;