import React from "react";
import "./Gallery.css";
import GalleryImg1 from "../../images/gallery-img-1.svg";
import GalleryImg2 from "../../images/gallery-img-2.svg";
import GalleryImg3 from "../../images/gallery-img-3.svg";
import GalleryImg4 from "../../images/gallery-img-4.svg";
import GalleryImg5 from "../../images/gallery-img-5.svg";
import GalleryImg6 from "../../images/gallery-img-6.svg";
import GalleryImg7 from "../../images/gallery-img-7.svg";

function Gallery() {
  return (
    <div className="gallery">
      <div className="galleryHead">
        <p className="galleryTitle">Gallery</p>
        <p className="gallerySubHead">
          We focus on ergonomics and meeting you where you work.
          <br />
          It's only a keystroke away.
        </p>
      </div>

      <div className="galleryDiv">
        <div class="imageRow">
          <div>
            <img className="galleryImg" alt="gallery" src={GalleryImg1} />
          </div>
          <div>
            <img className="galleryImg" alt="gallery" src={GalleryImg2} />
          </div>
          <div>
            <img className="galleryImg" alt="gallery" src={GalleryImg3} />
          </div>
          <div>
            <img className="galleryImg" alt="gallery" src={GalleryImg4} />
          </div>
        </div>

        <div class="imageRow">
          <div>
            <img className="galleryImg" alt="gallery" src={GalleryImg5} />
          </div>
          <div>
            <img className="galleryImg" alt="gallery" src={GalleryImg6} />
          </div>
          <div>
            <img className="galleryImg" alt="gallery" src={GalleryImg7} />
          </div>
        </div>

        <div className="seeMoreBtnDiv">
          <button class="seeMore button">See more</button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
