import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ImagZoom } from "../../animation";
const images = [
  {
    src: "https://th.bing.com/th/id/OIP.1chrrJhejuZEmQunHNTMawHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain",
    title: "Shields Earth from harmful ultraviolet rays.",
  },
  {
    src: "https://t4.ftcdn.net/jpg/02/54/11/89/360_F_254118959_rXNcHLGQl8Kp4iyhkzyOSXQrOq0ikwsS.jpg",
    title: "Ozone depletion increases risks for living.",
  },
  {
    src: "https://th.bing.com/th/id/OIP.60fQeWlCtQJnUITQ4B5tDwAAAA?rs=1&pid=ImgDetMain",
    title: "CFCs, are the main cause of ozone loss.",
  },
];

function Bottom({ timeline }) {
  const imgref1 = useRef(null);
  const imgref2 = useRef(null);
  const imgref3 = useRef(null);

  useEffect(() => {
    timeline && timeline.add(ImagZoom(), "bottom");
  }, [timeline]);

  return (
    <div className="bottom">
      {images.map((image, index) => {
        return (
          <ImageDiv
            reff={imgref1}
            title={image.title}
            src={image.src}
            key={index}
          />
        );
      })}
    </div>
  );
}

function ImageDiv({ reff, title, src }) {
  console.log(reff);
  return (
    <div className="imgContainer">
      <img ref={reff} src={src} />
      <div className="tagline">{title}</div>
    </div>
  );
}
export default Bottom;
