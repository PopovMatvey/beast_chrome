import React from "react";
import "./css/style.css";
import { SlideMenu } from "../../components/SlideMenu";
import { ImageSlider } from "../../components/ImageSlider";
// import { YouTudeVideoSlider } from "../../components/YouTubeVideoSlider";
// import { arrayYouTubeVideos } from "../../data/arrauYouTubeVidoSlider";
// import { useRequestArray } from "../../hook/useRequestArray";
// import { urlPortfolioImagesApi, urlPortfolioVideosApi, urlPortfolioVideosApiYoutube } from "../../data/apiUrls";
import { VideoSlider } from "../../components/VideoSlider";
import { arrayPortfolioImages } from "./data/images";
import { videosPortfolioArray as arrayPortfolioVideos, videosPortfolioArray } from "./data/videos";
import { YouTudeVideoSlider } from "../../components/YouTubeVideoSlider";

// Наши работы
export function OurWorks() {
    // const arrayImagePortfolio = useRequestArray(urlPortfolioImagesApi).requestArray;
    // console.log(arrayImagePortfolio)
    // const arrayYouTubeVideos = useRequestArray(urlPortfolioVideosApi).requestArray;
    // const arrayVideos = useRequestArray(urlPortfolioVideosApi).requestArray;
    // console.log(arrayVideos)    
    console.log(arrayPortfolioVideos);
    return (
        <>
            <div className="out-works-container">
                <div className="out-works-container_beginner-screen beginner-screen">
                    <SlideMenu />
                    <div className="out-works-container_beginner-screen_container">
                        <h1>Наши работы</h1>
                        <div className="out-works-container_beginner-screen_text">
                            <span>
                               Самый яркий пример значимой части наших работ.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="out-works-container_beginner-screen_portfolio">
                    <h3>Портфолио</h3>
                    <div className="out-works-container_beginner-screen_portfolio_contaiiner">
                        <ImageSlider items={arrayPortfolioImages} />
                    </div>
                    <div className="out-works-container_beginner-screen_portfolio_contaiiner_videos">
                        <YouTudeVideoSlider items={videosPortfolioArray} />
                    </div>
                </div>
            </div>
        </>
    )
}