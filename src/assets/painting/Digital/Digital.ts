import boy from "./boy.jpg";
import summer from "./summer.jpg";
import a from "./d1.jpeg";
import b from "./d2.jpeg";
import c from "./d3.jpeg";
import d from "./d4.jpeg";
import e from "./d5.jpeg";
import f from "./d6.jpeg";
import g from "./d7.jpeg";
import h from "./d8.jpeg";
import i from "./d9.jpeg";
import j from "./d10.jpeg";



export const digitalPaints = [
    {id: 2, title: "boy", src: boy} ,
    {id: 0, title: "summer", src: summer} ,
    {id: 3, title: "summer", src: a },
    {id: 4, title: "summer", src: b },
    {id: 5, title: "summer", src: c },
    {id: 6, title: "summer", src: d },
    {id: 7, title: "summer", src: e },
    {id: 8, title: "summer", src: f },
    {id: 9, title: "summer", src: g },
    {id: 10, title: "summer", src: h },
    {id: 11, title: "summer", src: i },
    {id: 12, title: "summer", src: j },
]

export interface Paint {
    id: number;
    title: string;
    src: any ;
}