import forest from "./forest.jpg";
import boy from "./boy.jpg";
import summer from "./summer.jpg";



export const digitalPaints = [
    {id: 1, title: "forest", src: forest} ,
    {id: 2, title: "boy", src: boy} ,
    {id: 3, title: "summer", src: summer },
]

export interface Paint {
    id: number;
    title: string;
    src: any ;
}