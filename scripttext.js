`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);



const words = ["Hockey Player.", "Entrepreneur.", "Developer.", "Honest person."]
// const words = ["Shivam.", "SaeeAM.", "Kaliya.", "Alfa."]
const startup = ["Business Online", "Business Project.", "Developer.", "Honest person."]
// const startup = ["Service1", "Service2.", "Service3.", "Service4."]
const skill = ["Software Developer.", "Teacher.", "Content Creater.", "Digital Marketing."]
// const skill = ["Skill1.", "skill2.", "skill3.", "skill4."]
const Education = ["10th CBSE (70%) - 2017.", "12th BSEB (1 Division) -2019.", "Graduation-Math- In - 2023.", "Self Learning- Life Time."]
// const Education = ["education1.", "education2.", "education3.", "education4."]
const experience = ["Vodafone(Sales) - 2017.", "Grofers (2020).", "Yamaha (2022).", "Maruti Suzuki (Qualified)", "Film Shooting (Film, Songs, Ads, More)", "Byjus- (BDA, RA)", "Govt. Collage Trainer"]
// const experience = ["Experience1.", "Experience2.", "Experience3.", "Experience4", "Experience5", "Experience6"]


let cursor = gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeat:-1})
let masterTl = gsap.timeline({repeat: -1}).pause()
let boxTl = gsap.timeline()

boxTl.to('.box', {duration:1, width:"17vw", delay: 0.5, ease: "power4.inOut"})
  .from('.hi', {duration:1, y:"7vw", ease: "power3.out"})
  .to('.box', {duration:1, height:"7vw", ease: "elastic.out", onComplete: () => masterTl.play() })
  .to('.box', {duration:2, autoAlpha:0.7, yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})

  words.forEach(word => {
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1})
  tl.to('.text', {duration: 1, text: word})
  masterTl.add(tl)
})



let cursor1 = gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeat:-1})
let masterTl1 = gsap.timeline({repeat: -1}).pause()
let boxTl1 = gsap.timeline()

boxTl1.to('.box', {duration:1, width:"17vw", delay: 0.5, ease: "power4.inOut"})
  .from('.hi', {duration:1, y:"7vw", ease: "power3.out"})
  .to('.box', {duration:1, height:"7vw", ease: "elastic.out", onComplete: () => masterTl1.play() })
  .to('.box', {duration:2, autoAlpha:0.7, yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})

startup.forEach(start=>{
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:0})
  tl.to('.startup', {duration: 1, text: start})
  masterTl1.add(tl)
})


let cursor2 = gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeat:-1})
let masterTl2 = gsap.timeline({repeat: -1}).pause()
let boxTl2 = gsap.timeline()

boxTl2.to('.box', {duration:1, width:"17vw", delay: 0.5, ease: "power4.inOut"})
  .from('.hi', {duration:1, y:"7vw", ease: "power3.out"})
  .to('.box', {duration:1, height:"7vw", ease: "elastic.out", onComplete: () => masterTl2.play() })
  .to('.box', {duration:2, autoAlpha:0.7, yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})

skill.forEach(skills=>{
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:0})
  tl.to('.skill', {duration: 1, text: skills})
  masterTl2.add(tl)
})


let cursor3 = gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeat:-1})
let masterTl3 = gsap.timeline({repeat: -1}).pause()
let boxTl3 = gsap.timeline()

boxTl3.to('.box', {duration:1, width:"17vw", delay: 0.5, ease: "power4.inOut"})
  .from('.hi', {duration:1, y:"7vw", ease: "power3.out"})
  .to('.box', {duration:1, height:"7vw", ease: "elastic.out", onComplete: () => masterTl3.play() })
  .to('.box', {duration:2, autoAlpha:0.7, yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})

Education.forEach(educ=>{
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:0})
  tl.to('.education', {duration: 1, text: educ})
  masterTl3.add(tl)
})

let cursor4 = gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeat:-1})
let masterTl4 = gsap.timeline({repeat: -1}).pause()
let boxTl4 = gsap.timeline()

boxTl4.to('.box', {duration:1, width:"17vw", delay: 0.5, ease: "power4.inOut"})
  .from('.hi', {duration:1, y:"7vw", ease: "power3.out"})
  .to('.box', {duration:1, height:"7vw", ease: "elastic.out", onComplete: () => masterTl4.play() })
  .to('.box', {duration:2, autoAlpha:0.7, yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})

experience.forEach(expe=>{
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:0})
  tl.to('.experience', {duration: 1, text: expe})
  masterTl4.add(tl)
})