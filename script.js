function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
./saeeam/saeeam (1).png
./saeeam/saeeam (2).png
./saeeam/saeeam (3).png
./saeeam/saeeam (4).png
./saeeam/saeeam (5).png
./saeeam/saeeam (6).png
./saeeam/saeeam (7).png
./saeeam/saeeam (8).png
./saeeam/saeeam (9).png
./saeeam/saeeam (10).png
./saeeam/saeeam (11).png
./saeeam/saeeam (12).png
./saeeam/saeeam (13).png
./saeeam/saeeam (14).png
./saeeam/saeeam (15).png
./saeeam/saeeam (16).png
./saeeam/saeeam (17).png
./saeeam/saeeam (18).png
./saeeam/saeeam (19).png
./saeeam/saeeam (20).png
./saeeam/saeeam (21).png
./saeeam/saeeam (22).png
./saeeam/saeeam (23).png
./saeeam/saeeam (24).png
./saeeam/saeeam (25).png
./saeeam/saeeam (26).png
./saeeam/saeeam (27).png
./saeeam/saeeam (28).png
./saeeam/saeeam (29).png
./saeeam/saeeam (30).png
./saeeam/saeeam (31).png
./saeeam/saeeam (32).png
./saeeam/saeeam (33).png
./saeeam/saeeam (34).png
./saeeam/saeeam (35).png
./saeeam/saeeam (36).png
./saeeam/saeeam (37).png
./saeeam/saeeam (38).png
./saeeam/saeeam (39).png
./saeeam/saeeam (40).png
./saeeam/saeeam (41).png
./saeeam/saeeam (42).png
./saeeam/saeeam (43).png
./saeeam/saeeam (44).png
./saeeam/saeeam (45).png
./saeeam/saeeam (46).png
./saeeam/saeeam (47).png
./saeeam/saeeam (48).png
./saeeam/saeeam (49).png
./saeeam/saeeam (50).png
./saeeam/saeeam (51).png
./saeeam/saeeam (52).png
./saeeam/saeeam (53).png
./saeeam/saeeam (54).png
./saeeam/saeeam (55).png
./saeeam/saeeam (56).png
./saeeam/saeeam (57).png
./saeeam/saeeam (58).png
./saeeam/saeeam (59).png
./saeeam/saeeam (60).png
./saeeam/saeeam (61).png
./saeeam/saeeam (62).png
./saeeam/saeeam (63).png
./saeeam/saeeam (64).png
./saeeam/saeeam (65).png
./saeeam/saeeam (66).png
./saeeam/saeeam (67).png
./saeeam/saeeam (68).png
./saeeam/saeeam (69).png
./saeeam/saeeam (70).png
./saeeam/saeeam (71).png
./saeeam/saeeam (72).png
./saeeam/saeeam (73).png
./saeeam/saeeam (74).png
./saeeam/saeeam (75).png
./saeeam/saeeam (76).png
./saeeam/saeeam (77).png
./saeeam/saeeam (78).png
./saeeam/saeeam (79).png
./saeeam/saeeam (80).png
./saeeam/saeeam (81).png
./saeeam/saeeam (82).png
./saeeam/saeeam (83).png
./saeeam/saeeam (84).png
./saeeam/saeeam (85).png
./saeeam/saeeam (86).png
./saeeam/saeeam (87).png
./saeeam/saeeam (88).png
./saeeam/saeeam (89).png
./saeeam/saeeam (90).png
./saeeam/saeeam (91).png
./saeeam/saeeam (92).png
./saeeam/saeeam (93).png
./saeeam/saeeam (94).png
./saeeam/saeeam (95).png
./saeeam/saeeam (96).png
./saeeam/saeeam (97).png
./saeeam/saeeam (98).png
./saeeam/saeeam (99).png
./saeeam/saeeam (100).png
./saeeam/saeeam (101).png
// ./saeeam/saeeam (102).png
// ./saeeam/saeeam (103).png
// ./saeeam/saeeam (104).png
// ./saeeam/saeeam (105).png
// ./saeeam/saeeam (106).png
// ./saeeam/saeeam (107).png
// ./saeeam/saeeam (108).png
// ./saeeam/saeeam (109).png
// ./saeeam/saeeam (110).png
// ./saeeam/saeeam (111).png
// ./saeeam/saeeam (112).png
// ./saeeam/saeeam (113).png
// ./saeeam/saeeam (114).png
// ./saeeam/saeeam (115).png
// ./saeeam/saeeam (116).png
// ./saeeam/saeeam (117).png
// ./saeeam/saeeam (118).png
// ./saeeam/saeeam (119).png
// ./saeeam/saeeam (120).png
// ./saeeam/saeeam (121).png
// ./saeeam/saeeam (122).png
// ./saeeam/saeeam (123).png
// ./saeeam/saeeam (124).png
// ./saeeam/saeeam (125).png
// ./saeeam/saeeam (126).png
// ./saeeam/saeeam (127).png
// ./saeeam/saeeam (128).png
// ./saeeam/saeeam (129).png
// ./saeeam/saeeam (130).png
// ./saeeam/saeeam (131).png
// ./saeeam/saeeam (132).png
// ./saeeam/saeeam (133).png
// ./saeeam/saeeam (134).png
// ./saeeam/saeeam (135).png
// ./saeeam/saeeam (136).png
// ./saeeam/saeeam (137).png
// ./saeeam/saeeam (138).png
// ./saeeam/saeeam (139).png
// ./saeeam/saeeam (140).png
// ./saeeam/saeeam (141).png
// ./saeeam/saeeam (142).png
 `;
  return data.split("\n")[index];
}



const frameCount = 101;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / 10000;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})