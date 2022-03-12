
export interface Paint {
    id: number;
    title: string;
    src: any ;
}
export interface GalleryProps {
    images: Paint[];
}

export interface LightBox {
    open: boolean;
    index: number | null;
    url: string;
}

export enum Direction {
    next ="next",
    prev = "prev"
}