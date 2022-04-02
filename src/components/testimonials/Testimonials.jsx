import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "UX/UI Design with React",
      title: "ATG Across The Globe",
      img:
"https://as1.ftcdn.net/v2/jpg/02/49/52/02/1000_F_249520231_q2gSb1ERSdp65ltJ0eAfUxJLmReIzpjg.jpg",      icon: "assets/twitter.png",
      desc:
        "https://github.com/VishalR-2022/ATG-VISHAL-TASK-1",
      host:"https://condescending-wing-3746b2.netlify.app/"
    },
    {
      id: 2,
      name: "Owl carousel & SVG sliding",
      title: "ATG Across The Globe",
      img:
"https://ps.w.org/lgx-owl-carousel/assets/icon-256x256.png?rev=1469248", 
     icon: "assets/youtube.png",
      desc:
        "https://github.com/VishalR-2022/ATG-TASK-2-BANAO",
        host:"https://serene-hodgkin-95fd75.netlify.app/",
      featured: true,
    },
    {
      id: 3,
      name: "Logic CRM",
      title: "Call Management Website",
      img:
        "https://m.media-amazon.com/images/I/61OnA6pSo6L._AC_SX425_.jpg",
      icon: "assets/linkedin.png",
      desc:
        "https://github.com/VishalR-2022/simon",
        host:"https://vishalr-2022.github.io/simon/"
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>REACT PROJECTS</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img
                className="user"
                src={d.img}
                alt=""
              />
            </div>
            <a href={d.desc} className="center">
              {d.desc}
            </a>
            <a href={d.host} className="center">
              {d.host}
            </a>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
