"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./scrollingText.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!contentRef.current || !railRef.current) return;

    const scrollingText = gsap.utils.toArray(railRef.current.children);
    const tl = horizontalLoop(scrollingText, { repeat: -1, speed: 2 });

    let direction = 1;
    let t: gsap.core.Tween | undefined;

    ScrollTrigger.create({
      trigger: contentRef.current,
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        if (self.direction !== direction) {
          direction = self.direction;
          t && t.kill();
          t = gsap.to(tl, { duration: 0.3, timeScale: self.direction });
        }
      },
      markers: true,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <div className="spacer green">
        <h3>Scroll Based Direction Switch</h3>
      </div>

      <div className="content gray" ref={contentRef}>
        <div className="rail" ref={railRef}>
          <h4>Lorem Ipsum Sit Dolor</h4>
          <h4>Lorem Ipsum Sit Dolor</h4>
          <h4>Lorem Ipsum Sit Dolor</h4>
        </div>
      </div>

      <div className="spacer blue">
        <h3>The End!</h3>
      </div>

      <header>
        <a href="https://greensock.com/scrolltrigger">
          <img
            className="greensock-icon"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg"
            width="200"
            height="64"
            alt="Greensock ScrollTrigger"
          />
        </a>
      </header>
    </>
  );
};

export default ScrollingText;

// **GSAP Horizontal Loop Function**
function horizontalLoop(items: any[], config: any) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: "none" },
    onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
  });

  let length = items.length;
  let startX = items[0].offsetLeft;
  let times: number[] = [];
  let widths: number[] = [];
  let xPercents: number[] = [];
  let curIndex = 0;
  let pixelsPerSecond = (config.speed || 1) * 100;
  let snap = config.snap === false ? (v: any) => v : gsap.utils.snap(config.snap || 1);
  let totalWidth, curX, distanceToStart, distanceToLoop, item, i;

  gsap.set(items, {
    xPercent: (i: number, el: any) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 + gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    },
  });

  gsap.set(items, { x: 0 });

  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);

  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");

    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100),
        },
        {
          xPercent: xPercents[i],
          duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);

    times[i] = distanceToStart / pixelsPerSecond;
  }

  function toIndex(index: number, vars?: any) {
    vars = vars || {};
    if (Math.abs(index - curIndex) > length / 2) {
      index += index > curIndex ? -length : length;
    }

    let newIndex = gsap.utils.wrap(0, length, index);
    let time = times[newIndex];

    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }

    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }

  tl.next = (vars?: any) => toIndex(curIndex + 1, vars);
  tl.previous = (vars?: any) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index: number, vars?: any) => toIndex(index, vars);
  tl.times = times;

  tl.progress(1, true).progress(0, true);

  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }

  return tl;
}