import React, {FunctionComponent, useState} from "react";
import Masonry from "react-masonry-component";
import "./styles.css";
import {Paint} from "../../assets/painting/Digital/Digital";
import {Button} from "@mui/material";

interface LightBox {
    open: boolean;
    index: number | null;
    url:string;
}
interface Props {
    photos: Paint[];
}


const Gallery:FunctionComponent<Props> =({photos})=> {
    const [lightBox, setLightbox] = useState<LightBox>({
        open: false,
        index: null,
        url: ""
    });

    const showLightbox = (url: string, index: number | null) => {
        setLightbox({
            open: true,
            index,
            url
        });
    };

    const navigate = (direction: string) => {
        if (direction === "next") {
            setLightbox({
                open: true,
                index: lightBox.index!! + 1,
                url: photos[lightBox.index!! + 1].src
            });
        } else if (direction === "prev") {
            setLightbox({
                open: true,
                index: lightBox.index!! - 1,
                url: photos[lightBox.index!! - 1].src
            });
        }
    };

    const closeLightbox = () => {
        setLightbox({
            open: false,
            index: null,
            url: ""
        });
    };

    return (
        <>
            <div className="app">
                <Masonry className={"masonry"} elementType={"div"}>
                    {photos &&
                        photos.map((photo, i) => (
                            <div className="box" key={photo.id}>
                                <img
                                    alt={photo.src}
                                    src={photo.src}
                                    onClick={() => showLightbox(photo.src, i)}
                                />
                            </div>
                        ))}
                </Masonry>
            </div>

            {lightBox.open && (
                <div className="lightbox">
                    <Button  variant='contained'
                             color='warning'
                             className="close"
                             onClick={() => closeLightbox()}>
                        close
                    </Button>
                    {lightBox.index !== 0 && (
                        <Button
                            variant='contained'
                            color='warning'
                            className="leftBtn" onClick={() => navigate("prev")}>
                            Prev
                        </Button>
                    )}
                    <img src={lightBox.url} alt={lightBox.url} />
                    {lightBox.index !== photos.length - 1 && (
                        <Button
                            variant='contained'
                            color='warning'
                            className="rightBtn" onClick={() => navigate("next")}>
                            Next
                        </Button>
                    )}
                </div>
            )}
        </>
    );
}
export default Gallery;