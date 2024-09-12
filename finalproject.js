

function logomotiveanimtion(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function lodinganimtion(){

    var h5text = document.querySelector("#line-part1 h5");
var grow = 0
setInterval(function(){
    if(grow<100){
        h5text.innerHTML= grow++
    }
    else{
        h5text.innerHTML= grow
    }
},26)




var tl = gsap.timeline()

tl.from(".line h1" ,{
    y: 100,
   duration:0.5,
    stagger:0.2,
    delay:0.3,
    
})
tl.from("#line-part1, .line h2",{
    opacity: 0,
    
})

tl.to("#looder",{
    opacity: 0,
    duration: 0.3,
    delay: 1,

})
tl.from("#page1",{
    y: 25,
    opacity: 0,
    duration:0.5,
    delay:1,
})
tl.to("#looder",{
    display:"none"
})

tl.from(".hero h1",{
    y:100,
    stagger:0.2,
})
tl.from("#nav",{
    opacity:0,
})

}


function cursorAnimation() {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet("#nav-part2 h4");

var vieocontainer = document.querySelector("#video-contener")
var video = document.querySelector("#video-contener video");
vieocontainer.addEventListener("mouseenter", function(){
    vieocontainer.addEventListener("mousemove", function(dets){
        gsap.to(".mousefollower" ,{
            opacity:0
        })

        gsap.to("#video-cursol" ,{
            left:dets.x - 500,
            y:dets.y - 200,
        })
    })
})

vieocontainer.addEventListener("mouseleave", function(){
    gsap.to(".mousefollower",{
        opacity: 1,
    })

    gsap.to("#video-cursol",{
        left:"70%",
        top:"-8%",

    })
})


var flag = 0
video.addEventListener("click" ,function(){
    if(flag == 0){
    video.play()
    video.style.opacity = 1
    document.querySelector("#video-cursol").innerHTML = `<i class="ri-play-circle-fill"></i>`
    gsap.to ("#video-cursol",{
        scale:0.5
    })
    flag = 1
}
else{
    video.pause()
    video.style.opacity = 0
    document.querySelector("#video-cursol").innerHTML = `<i class="ri-pause-circle-fill"></i>`
    gsap.to ("#video-cursol",{
        scale:1
    })
    flag = 0

}
})

}






function sheryainAnimation(){
    Shery.imageEffect(".image-div",{
        style:4,
        config:{"uColor":{"value":false},"uSpeed":{"value":0.23,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":0.84,"range":[0,5]},"uFrequency":{"value":0,"range":[0,10]},"geoVertex":{"range":[1,64],"value":20.24},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6060665698677711},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.38,"range":[0,10]},"metaball":{"value":0.67,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.08,"range":[0,0.1]},"noise_height":{"value":0.55,"range":[0,2]},"noise_scale":{"value":22.9,"range":[0,100]}},
        gooey:true,

    })
}




logomotiveanimtion()
lodinganimtion()
sheryainAnimation()

cursorAnimation()

  
  document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
        x:dets.x,
        y:dets.y,
    })
  })


document.querySelector("#hero3").addEventListener("mouseenter",function(){
    gsap.to("#flag",{
        opacity: 1,
    })
})
document.querySelector("#hero3").addEventListener("mouseleave",function(){
    gsap.to('#flag',{
        opacity: 0,
    })
})