import { useState } from "react"

 
function  Home () {
  let [disabale,setDisable]=useState(true)
    return(
        <body id="backgroundHome">
        {/* <!-- Main Page --> */}
        <div class="w3-main w3-padding" style={{height: "90% "}}>
          <div class="w3-row-padding w3-center" style={{paddingTop:"64px"}}>
            {/* <!-- Wallet Connection --> */}
            <div class="w3-quarter w3-mobile" style={{width: "30%", position: "relative"}}>
              <img src="./static/Metamask.png" alt="Steak" width="100%" />
              <div style={{position: "absolute", left: "3.5%", top: "70%"}}>
                <img src="./static/Bars.png" alt="Steak" style={{width: "100%" }}/>
                <p className={disabale?"menuitem-Deactive":"menuitem cursor-pointer"} style={{position: "absolute", left: "32%", top: "4%"}} onclick="alert('hello')">Minting</p>
                <p className={"menuitem cursor-pointer"} style={{position:"absolute", left: "16%", top: "26%" }}onclick="alert('hello')">Soul hunt(stake)</p>
                <p className={"menuitem cursor-pointer"} style={{position: "absolute",left: "18%",  top: "48%"}} onclick="alert('hello')">Ascension well</p>
                <p className={"menuitem cursor-pointer"} style={{position:"absolute", left: "24%", top: "70%"}} onclick="alert('hello')">Whitepaper</p>
              </div>
            </div>
            {/* <!-- Wallet Connection --> */}
            <div class="w3-half w3-mobile mobile-extend" style={{width: "40%"}}> &nbsp;</div>
            {/* <!-- LOGO --> */}
            <div class="w3-quarter w3-mobile" style={{width: "30%"}}>
              <img src="./static/SVG Logo.png" alt="Steak" width="100%" />
            </div>
            {/* <!-- LOGO --> */}
          </div>
          <div class="w3-row-padding w3-center" style={{paddingTop: "12px"}}>
            {/* <!-- Bars --> */}
            <div class="w3-quarter w3-mobile mobile-shrink" style={{width: "30%"}}>
              {/* <!-- <img src="./static/Bars.png" alt="Steak" width="100%" /> --> */}
              {/* &nbsp */}
            </div>
            {/* <!-- Bars --> */}
            <div class="w3-half w3-mobile" style={{width: "68%"}}> &nbsp; </div>
            {/* <!-- Announcement --> */}
            <div class="w3-quarter w3-mobile" style={{width: "30%", position: "relative"}}>
              <img src="./static/announcement board.png" alt="Steak" width="100%" />
              <div style={{position: "absolute", left: "0px", top: "5px", width: "100%", height: "96%"}}>
                {/* <!-- <marquee
                  class="w3-center"
                  behavior="scroll"
                  direction="up"
                  scrollamount="2"
                  style={{"padding-left: 10px; padding-right: 10px; color: whitesmoke; height: 100%"
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                  ultricies nec, pellentesque eu, pretium quis, sem.
                </marquee> --> */}
                <p class="w3-center" style={{paddingTop:"10px", paddingRight: "10px", fontSize:"2vw"}}>
                  Look forward for updates!
                </p>
              </div>
            </div>
            {/* <!-- Announcement --> */}
          </div>
        </div>
        {/* <!-- Main Page -->
        <!-- Footer --> */}
        <div class="w3-container w3-center" style={{height:" 10% !important"}}>
          <div class="w3-quarter w3-mobile" style={{height: "10px",width: "20%"}}></div>
          <div class="w3-half w3-mobile" style={{width:" 60%"}}>
            <img src="./static/music.png" alt="Steak" width="60px" onclick="alert('Hello world!')" />
            <img src="./static/discord.png" alt="Steak" width="60px" onclick="alert('Hello world!')" />
            <img src="./static/twitter.png" alt="Steak" width="60px" onclick="alert('Hello world!')" />
          </div>
          <div class="w3-quarter w3-mobile" style={{  width: "20%"}}>
            <p class="w3-right" style={{color: "yellow", fontSize: "x-large"}}>V1.0</p>
          </div>
        </div>
        {/* <!-- Footer --> */}
      </body>
    )
    }
    export default  Home