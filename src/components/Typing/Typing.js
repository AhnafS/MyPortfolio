import { init } from "ityped";
import { useEffect, useRef } from "react";

const Typing = () => {
  const intro = useRef();
  const welcome = useRef();
  useEffect(() => {
    init(intro.current, {
      showCursor: false,
      strings: ["My Name Is Ahnaf"],
      typeSpeed: 50,
      loop: false,
      onFinished: () => {
        init(welcome.current, {
          showCursor: false,
          strings: ["Welcome to My Site"],
          typeSpeed: 50,
          loop: false,
        });
      },
    });
  }, []);
  return (
    <div>
      <div ref={intro}></div>
      <div ref={welcome}></div>
    </div>
  );
};

export default Typing;
