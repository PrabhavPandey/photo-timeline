import React, { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";
import { fireConfetti } from "./confetti";

import "./styles.css";

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");
  const [message6, setMessage6] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const timeline6 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);
  const circle6 = useRef(null);

  const someCallback = () => {
    setMessage1(
      "2018 | Lorem ipsum dolor sit amet, est deserunt in esse culpa magna nostrud ad laborum excepteur"
    );
    callback();
  };

  const someCallback2 = () => {
    setMessage2(
      "2019 | Lorem ipsum dolor sit amet, est deserunt in esse culpa magna nostrud ad laborum excepteu"
    );
  };

  const someCallback3 = () => {
    setMessage3(
      "2020 | Lorem ipsum dolor sit amet, est deserunt in esse culpa magna nostrud ad laborum excepteu"
    );
  };

  const someCallback4 = () => {
    setMessage4(
      "2021 | Lorem ipsum dolor sit amet, est deserunt in esse culpa magna nostrud ad laborum excepteu"
    );
  };

  const someCallback5 = () => {
    setMessage5(
      "2021 - Present |Lorem ipsum dolor sit amet, est deserunt in esse culpa magna nostrud ad laborum excepteu"
    );
  };

  const someCallback6 = () => {
    setMessage6(
      "Bonus | Lorem ipsum dolor sit amet, est deserunt in esse culpa magna nostrud ad laborum excepteu"
    );
    fireConfetti();
  };

  useEffect(() => {
    fireConfetti();

    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(timeline5.current);
    setObserver(timeline6.current);

    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
    setObserver(circle5.current, someCallback5);
    setObserver(circle6.current, someCallback6);
  }, []);

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          1
        </div>
        <div className="message">{message1}</div>
      </div>
      <img src="https://i.postimg.cc/6qyygKCn/pak.jpg"></img>

      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          2
        </div>
        <div className="message">{message2}</div>
      </div>
      <img src="https://i.postimg.cc/3xPWqzwD/84b8268bfee7ce19d942eb292ef256a1.jpg"></img>

      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          3
        </div>
        <div className="message">{message3}</div>
      </div>
      <img src="https://i.postimg.cc/8543FQJF/1rzy4a.jpg"></img>

      <div id="timeline4" ref={timeline4} className="timeline" />
      <div className="circleWrapper">
        <div id="circle4" ref={circle4} className="circle">
          4
        </div>
        <div className="message">{message4}</div>
      </div>
      <img src="https://i.postimg.cc/XvfHBSGf/kewl.jpg"></img>

      <div id="timeline5" ref={timeline5} className="timeline" />
      <div className="circleWrapper">
        <div id="circle5" ref={circle5} className="circle">
          5
        </div>
        <div className="message">{message5}</div>
      </div>
      <img src="https://i.postimg.cc/KYYWwc00/kid.png"></img>

      <div id="timeline6" ref={timeline6} className="timeline" />
      <div className="circleWrapper">
        <div id="circle6" ref={circle6} className="circle">
          6
        </div>
        <div className="message">{message6}</div>
      </div>
      <img src="https://i.postimg.cc/3RTK2v8k/cat.png"></img>
    </div>
  );
};

export default function App() {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <div className="App">
      <div className="top">
        <img
          className="sticker"
          src="https://i.postimg.cc/5yRk9fZk/maxresdefault.jpg"
        ></img>
        <h1>Happy Birthday, ... ❤️</h1>
        <img
          className="sticker"
          src="https://i.postimg.cc/5yRk9fZk/maxresdefault.jpg"
        ></img>
      </div>
      <h2>You're 19! Here's to everything</h2>

      <div className="stub1">
        <p className="stub1_scroll">⬇️ Scroll to Start ⬇️</p>
        <p className="stub1_title">... Years in Pictures</p>
      </div>
      <hr />
      <p className="intro">
        Lorem ipsum dolor sit amet, est deserunt in esse culpa magna nostrud ad
        laborum excepteu Lorem ipsum dolor sit amet, est deserunt in esse culpa
        magna nostrud ad laborum excepteu
        <br />
        <br />
        Lorem ipsum dolor sit amet, veniam in nulla incididunt sint adipisicing
        cillum exercitation velit minim anim est in veniam fugiat deserunt
        aliqua eu cupidatat cillum qui velit ipsum commodo id adipisicing ut
        adipisicing consectetur incididunt
        <br />
        <br />
        Lorem ipsum dolor sit amet, veniam in nulla incididunt sint adipisicing
        cillum exercitation velit minim anim est in veniam fugiat deserunt
        aliqua eu cupidatat cillum qui velit ipsum commodo id adipisicing ut
        adipisicing consectetur incididunt
        <br />
        <br />
        <br />
        <br />
        <hr />
      </p>
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#B287E5"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
      <div className="stub2">{message}</div>
      <p className="intro">
        Lorem ipsum dolor sit amet, veniam in nulla incididunt sint adipisicing
        cillum exercitation velit minim anim est in veniam fugiat deserunt
        aliqua eu cupidatat cillum qui velit ipsum commodo id adipisicing ut
        adipisicing consectetur incididunt
        <br />
        <br />
        Lorem ipsum dolor sit amet, veniam in nulla incididunt sint adipisicing
        cillum exercitation velit minim anim est in veniam fugiat deserunt
        aliqua eu cupidatat cillum qui velit ipsum commodo id adipisicing ut
        adipisicing consectetur incididunt
        <br />
        <br />
        Lorem ipsum (say something nice here!)
      </p>
      <footer>
        Developed with ❤️ by Prabhav Pandey (Feel free to remove this footer)
      </footer>
    </div>
  );
}
