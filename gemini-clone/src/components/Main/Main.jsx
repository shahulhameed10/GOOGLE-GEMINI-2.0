import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}= useContext(Context)
  return (
    <div className="main">
      <div className="nav">
        <p>GEMINI</p>
        <img src={assets.user_icon} alt="" />
      </div> 
      <div className="main-container">
        {!showResult
        ?<><div className="greet">
            <p><span>Hello,Shahul.</span></p>
            <p>How can i help you today</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to see on upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>

            <div className="card">
                <p>Briefly explain about concept: urban planning</p>
                <img src={assets.bulb_icon}alt="" />
            </div>

            <div className="card">
                <p>Brainstorm team bonding activities</p>
                <img src={assets.message_icon} alt="" />
            </div>

            <div className="card">
                <p>What are application of Data Science</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
       </>
       :<div className="result">
        <div className="result-title">
          <img src={assets.user_icon} alt="" />
          <p>{recentPrompt}</p>
        </div>
        <div className="result-data">
          <img src={assets.gemini_icon} />
          {loading
          ?<>
          <div className="loader">
              <hr />
              <hr />
              <hr />
          </div>
          </>: <p dangerouslySetInnerHTML={{__html:resultData}}></p>
        }
         
         </div>


       </div>
        }
        
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="ENTER PROMPT HERE HERE"/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                </div>
            </div>
            <p className="bottom-info">
                Gemini may display inaccurate info,including about peoples,so double-check it responses.Your privacy and Gemini Apps
            </p>

        </div>
      </div>
    </div>
  );
}
export default Main;
