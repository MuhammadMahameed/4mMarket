import { Products } from "./app/shared/models/Products";
import { Tag } from "./app/shared/models/Tag";

export const products: Products[] = [
  {
  id: '1',
  name:'Asus Tuf Laptop',
  price:5600,
  tags:['All','Laptops','Asus'] ,
  imageUrl:'assets/1.jpg' ,
  starts:4.9,
  color:'Black',
  description:'ASUS TUF Gaming 15.6" GeForce RTX 3070 V2 OC Edition Laptop With a 32 GB RAM and 1T storage ',
  },
  {
    id: '2',
    name:'HP OMEN Laptop',
    price:5400,
    tags:['All','Laptops','HP'] ,
    imageUrl:'assets/2.jpg' ,
    starts:4.7,
    color:'Gray' ,
    description:'HP OMEN  Laptop 15.6" Go Beyond Performance with 13th Gen Intel® Core™ Processors With a 24 GB RAM and 512GB storage ',
    }
    ,
    {
      id: '3',
      name:'DELL Laptop',
      price:4900,
      tags:['All','Laptops','DELL'] ,
      imageUrl:'assets/3.jpg' ,
      starts:4.2,
      color:'White' ,
      description:'DELL G15 Gaming 14" Laptop 12th Gen Intel® Core™ i7-12700H With a16 GB RAM and 512GB storage ',
      }
      ,
      {
        id: '4',
        name:'OnePlus 11 ',
        price:3700,
        tags:['All','Phones','OnePlus'] ,
        imageUrl:'assets/4.jpg' ,
        starts:4.4,
        color:'Green' ,
        description:'A quality cell phone from OnePlus 1+ 11 Eternal Green SmartPhone 6.7" With A 16 GB RAM and 256GB storage ',
      }
      ,
      {
        id: '5',
        name:'Google Pixel 7 Pro',
        price:4000,
        tags:['All','Phones','Google'] ,
        imageUrl:'assets/5.jpg' ,
        starts:4.7,
        color:'Black' ,
        description:'A high-quality smartphone from Google Pixel 7 Pro 5G Android 13  6.7" Smartphone With A 12 GB RAM and 256GB storage ',
      }
      ,
      {
        id: '6',
        name:'Apple Iphone 14 ProMax',
        price:5200,
        tags:['All','Phones','Apple'] ,
        imageUrl:'assets/6.jpg' ,
        starts:4.9,
        color:'White' ,
        description:'The powerful iPhone 14 Pro Max from Apple 6.7"  With A 6 GB RAM and 512GB storage ',
      }
      ,
      {
        id: '7',
        name:'Razer Mouse',
        price:260,
        tags:['All','accessories','Razer'] ,
        imageUrl:'assets/7.jpg' ,
        starts:3.7,
        color:'Black' ,
        description:'Razer HyperSpeed ​​Ultimate Basilisk wireless gaming mouse: fastest gaming mouse switch, 20K DPI optical sensor ',
      }
      ,
      {
        id: '8',
        name:'Gaming keyboard',
        price:400,
        tags:['All','accessories','Razer'] ,
        imageUrl:'assets/8.jpg' ,
        starts:4.1,
        color:'Black' ,
        description:'Keyboard Gaming With a RGB lighting with Mechanical switches with 2,0mm actuation ',
      }
      ,
      {
        id: '9',
        name:'Samsung Screen',
        price:1800,
        tags:['All','Screens','Samsung'] ,
        imageUrl:'assets/9.jpg' ,
        starts:4.0,
        color:'Black' ,
        description:'43" Odyssey Neo G7 4K UHD 144Hz 1ms VESA Display HDR600 Smart Gaming Monitor',
      }
      ,
      {
        id: '10',
        name:'Asus Screen',
        price:2200,
        tags:['All','Screens','Asus'] ,
        imageUrl:'assets/10.jpg' ,
        starts:4.1,
        color:'Black' ,
        description:'TUF Gaming VG32UQA1A Gaming Monitor up to 32 inch (31.5 inch viewable) 4K (3840 x 2160), Overclock to 160Hz  ',
      }
      ,
      {
        id: '11',
        name:'DELL Screen',
        price:3000,
        tags:['All','Screens','DELL'] ,
        imageUrl:'assets/11.jpg' ,
        starts:4.5,
        color:'Silver',
        description:'37.5" Fast IPS Curved Gaming Monitor with NVIDIA® G-SYNC® ULTIMATE certification, VESA DisplayHDR™ 600 and IPS Nano Color for an immersive gaming experience. ',
      }
      ,
      {
        id: '12',
        name:'Razer headphones Gaming',
        price:850,
        tags:['All','accessories','Razer'] ,
        imageUrl:'assets/12.jpg' ,
        starts:4.0,
        color:'Black' ,
        description:'Razer BlackShark V2 Pro - Black , FREQUENCY RESPONSE :12 Hz up to 28 kHz , IMPEDANCE: 32Ω ',
      }
      ,
      {
        id: '13',
        name:'Razer Gaming Laptop',
        price:4400,
        tags:['All','Laptops','Razer'] ,
        imageUrl:'assets/13.jpg' ,
        starts:5,
        color:'Black' ,
        description:'Razer Blade 19 Base Laptop 15.6" With A 64 GB RAM and 2T storage ,Intel Core i9-10750H 6 Core, NVIDIA GeForce GTX 1998 Ti',
      }
      ,
      {
        id: '14',
        name:'Samsung S23 Ultra',
        price:4500,
        tags:['All','Phones','Samsung'] ,
        imageUrl:'assets/14.jpg' ,
        starts:4.7,
        color:'gray' ,
        description:'A quality cell phone from Samsung with a 6.8-inch screen with a 12GB RAM and 1T storage',
      }
      ,
      {
        id: '15',
        name:'Apple MacBook Pro',
        price:4500,
        tags:['All','Laptops','Apple'] ,
        imageUrl:'assets/15.jpg' ,
        starts:4.9,
        color:'Silver' ,
        description:'MacBook Pro computer from Apple with a 14.2" screen with a 16GB RAM and 1T storage',
      }


]

export const samble_tags:Tag[]= [
  {name: 'All', count: 13},
  {name: 'Laptops', count: 4},
  {name: 'Phones', count: 4},
  {name: 'Screens', count: 3},
  {name: 'accessories', count: 3},
  {name: 'Apple', count: 2},
  {name: 'Samsung', count: 2},
  {name: 'OnePlus', count: 1},
  {name: 'Google', count: 1},
  {name: 'Razer', count: 4},
  {name: 'Asus', count: 2},
  {name: 'DELL', count: 2},
  {name: 'HP', count: 1},
]
