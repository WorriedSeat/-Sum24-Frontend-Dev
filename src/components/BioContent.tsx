import React, { useState } from "react";

import {openPopup, closePopup} from '../logic/comic.ts'

class BioContent extends React.Component{
    render(){
        return (
            <div>
                <img src="/Images/pics/aman.png" alt="aman" id="man"></img>
                <h3 id="infoTitle">A bit about me</h3>
                <div id="mainInfo">
                    <p className="info">
                        I was born in Volzhsky, Volgogradskaya Oblast, Russia. Throughout my childhood, I engaged in various sports
                        including Judo, Football, Break-dance, and Volleyball. My academic pursuits also extended beyond the classroom; 
                        I began studying the English language at the age of five, albeit with intermittent breaks. 
                        Additionally, I delved into the field of robototechnics for two years and developed a 
                        passion for programming from the ninth grade onwards. My self-taught journey in Python continued up until 
                        the preparation for the Russian State Exam.
                    </p>
                    <p className="info">
                        Upon completing high school, I chose to further my education at 
                        Innopolis University. The learning environment here is both challenging and engaging. Balancing my studies with physical 
                        fitness, I dedicate most of my time to academics and gym workouts. However, I occasionally travel back home or to Moscow
                        to spend quality time with my friends and family.
                    </p>
                    <p className="info">
                        My primary interest lies in programming, particularly in backend 
                        development and artificial intelligence. Beyond coding, I find joy in creative endeavors such as sketching.
                    </p>
                </div>

                <div className="popupBox">
                    <div id="ComicHead">
                        <img src="Images/pics/headThoughts.png" alt="headThoughts" id="HeadPic"></img>
                    </div>
                    <button id="openPopupBtn" onClick={openPopup}></button>
                    <div className="myPopup">
                        <p id="wasReleased">Was released:</p>
                        <button id="closePopupBtn" onClick={closePopup}>Close</button>
                    </div>
                </div> 
            </div>
        );
    }
}

export  default BioContent;
