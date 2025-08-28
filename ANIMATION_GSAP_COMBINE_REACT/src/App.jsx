import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const App = () => {
  const boxRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    // tạo timeline khi component mount
    tl.current = gsap.timeline({ paused: true });
    tl.current.to(boxRef.current, {
      x: 300,
      rotation: 360,
      duration: 1.5,
      ease: "power2.inOut",
    });
  }, []);

  const handleClick = () => {
    // restart từ đầu, nhảy về trạng thái ban đầu rồi chạy lại
    tl.current.restart(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Start Animation</button>
      <div
        ref={boxRef}
        style={{
          width: 100,
          height: 100,
          background: "red",
          marginTop: 20,
        }}
      ></div>
    </div>
  );
}

export default App;