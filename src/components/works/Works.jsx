import { useState } from "react";
import "./works.scss";
export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/writing.png",

      title: "SSC M.S.S HighSchool",
      desc:
        "10th grade 79%",
      img:
        "https://lh5.googleusercontent.com/p/AF1QipNhAfdS31ignF-Hm2k5ADCqMeLMG_jyAVdK8C-Z=w1080-k-no",
    },
    {
      id: "2",
      icon: "./assets/writing.png",

      title: "HSC Modern College of Arts, Science and Commerce",
      desc:
"12th grade 60%",    
  img:
        "https://images.shiksha.com/mediadata/images/1549439430phpJpowBX.png",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Degree Government College of Engineering & Research, Avasari",
      desc:
        "CGPA 8.69",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Gcoeara.jpg/1280px-Gcoeara.jpg"
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
