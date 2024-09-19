import gsap from "gsap";
gsap.defaults({
  ease: "expo.inOut",
});

export const UpperLayOut = (ul1, ul2, ul3) => {
  const tl = gsap.timeline();
  tl.to(ul1, {
    height: 0,
    duration: 1.5,
    delay: 0.3,
  })
    .to(ul2, {
      height: 0,
      duration: 1.5,
      delay: -0.3,
    })
    .to(ul3, {
      height: 0,
      duration: 1.5,
      delay: -0.5,
    });

  return tl;
};
export const LowerLayOut = (ll1, ll2, ll3) => {
  const tl = gsap.timeline();
  tl.to(
    ll3,
    {
      width: 0,
      duration: 1.5,
    },
    "0"
  );
  tl.to(
    ll2,
    {
      width: 0,
      duration: 1.5,
      delay: 0.2,
    },
    "0"
  );
  tl.to(
    ll1,
    {
      width: 0,
      duration: 1.5,
      delay: 0.2,
    },
    "0"
  );

  return tl;
};

export const txt = (h1, h2) => {
  const tl = gsap.timeline();
  tl.fromTo(h1, { y: 120, skewY: 5 }, { y: 0, duration: 1, skewY: 0 }).fromTo(
    h2,
    { y: 120, skewY: 5 },
    { y: 0, duration: 1, skewY: 0, delay: 1.2 },
    "0"
  );
  return tl;
};

export const ImagZoom = () => {
  const tl = gsap.timeline();
  tl.fromTo(".imgContainer img", { scale: 2 }, { scale: 1, duration: 2 });
  return tl;
};
