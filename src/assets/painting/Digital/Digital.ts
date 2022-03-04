import forest from "./forest.jpg";
import boy from "./boy.jpg";
import summer from "./summer.jpg";
import a from "./273051584_734412724387338_2029490584591622343_n.jpeg";
import b from "./274220255_757077452346218_3804420359741808990_n.jpeg";
import c from "./274335715_332152108853589_3482255897770472695_n.jpeg";
import d from "./274352969_490378192806783_7339764915405841535_n.jpeg";
import e from "./274541439_1090771948134299_1234886336800658683_n.jpeg";
import f from "./274623642_982859442436196_1392032866331760267_n.jpeg";
import g from "./274728100_975334059760715_359453176290627663_n.jpeg";
import h from "./274800256_842149207177224_5311161481909067864_n.jpeg";
import i from "./274800869_1031162104146735_180700955485257765_n.jpeg";
import j from "./274919510_274687954743963_8097647694047966182_n.jpeg";



export const digitalPaints = [
    {id: 1, title: "forest", src: forest} ,
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