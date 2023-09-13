import React from "react";
import './AboutUs.scss'
import link from './babyvideo.mp4'

const AboutUs = () => {
    return (
        <>
            <div className="landingpage">
                <video src={link} autoPlay muted loop className="video-bg"></video>

                <div className="navbar">
                    <div className="menu">
                    </div>
                </div>
            </div>
            <div className="about">
                <p>Welcome to our website, our babys are lovely!</p>
                About Us: FaceBaby is the new social network for babys, enjoy!  better than other social network :D
                Here you will find cutes babys.
                FaceBaby is a social network of pictures and videos created by Victor Macedo and Adrian Pastor in 2023,
                in the app you can apply filters and search for others users!  👼
            </div>
        </>
    )
}

export default AboutUs