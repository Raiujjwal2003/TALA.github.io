function show() {
    gsap.registerPlugin(ScrollTrigger);
  
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
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
  
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
  }
  show();
  
  
  gsap.from("#main-text",{
    opacity:0,
    duration:1.2,
    delay:1,
    onStart:function(){
      $('#main-text').textillate({ in: { effect: 'fadeInDown' } });
    }
  })
  gsap.from("#subtext h3",{
    opacity:0,
    duration:1.2,
    delay:1,
    onStart:function(){
      $('#subtext h3').textillate({ in: { effect: 'fadeInDown' } });
    }
  })
  gsap.from("#sub2-text h4",{
    opacity:0,
    duration:1.2,
    delay:1,
    onStart:function(){
      $('#sub2-text h4').textillate({ in: { effect: 'fadeInDown' } });
    }
  })

var tl= gsap.timeline()
tl.from("#nav",{
  opacity:0,
  // y:-100,
  duration:1,
  delay:1
})
.to("#page1>img",{
  scale:1,
  duration:.5,
  scrollTrigger:{
    trigger:"#page1>img",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    end:"top 50%",
    scrub:3,
    // pin:true
}
})
.from("#text>h1",{
  opacity:0,  
  y:170,
  duration:.5,
    
  scrollTrigger:{
    trigger:"#text>h1 ",
    scroller:"#main",
    // markers:true,
    start:"top 160%",
    end:"top 125%",
    scrub:3,
    // pin:true
}
})
.from("#breakline",{
  x:-2000,
  duration:1.2,
  scrollTrigger:{
    trigger:"#breakline ",
    scroller:"#main",
    // markers:true,
    start:"top 200%",
    end:"top 198%",
    scrub:3,
    // pin:true
}

})
// .from("#page4>h1",{
//   y:500,
//   opacity:0,
//   duration:4,
//   delay:3,
//   scrolltrigger:{
//     trigger:"#page4>h1",
//     scroller:"body",
//     markers:true,
//     scrub:3
   
//   }
// })


document.querySelector("#main").addEventListener("mousemove",function(dets){
  document.querySelector("#pointer").style.top =`${dets.y}px`
  document.querySelector("#pointer").style.left =`${dets.x}px`
})
// console.log(dets.y)
// document.querySelector("#main-text").addEventListener("mouseenter",function(){
//   // document.querySelector("#pointer").style.Color="transparent";
//   document.querySelector("#main-text").style.color="#232025";
//   document.querySelector("#pointer").style.transform=`scale(2.4)`;
//   document.querySelector("#pointer").style.backgroundColor="#d5cdc465";
// })
// document.querySelector("#main-text").addEventListener("mousemove",function(dets){
//   document.querySelector("#pointer").style.top =`${dets.y}px`
//   document.querySelector("#pointer").style.left =`${dets.x}px`
//   document.querySelector("#pointer").style.color="#d69e5e";
//   document.querySelector("#pointer").style.transform="scale(2)";
  
// })

//   document.querySelector("#main-text").addEventListener("mouseleave",function(){
//     document.querySelector("#pointer").style.backgroundColor="#d69e5e";
//     document.querySelector("#pointer").style.transform="scale(1)";
//   })

var menu=document.querySelector("#menu")
var full=document.querySelector("#fullscreennav")
var nav=document.querySelector("#nav h3")
var nav2=document.querySelector("#nav2 h3")
var line1= document.querySelector("#line1")
var line2= document.querySelector("#crossline")


var flag=0;

menu.addEventListener("click",function(){
  if(flag===0){
  full.style.transform=`translateY(0%)`
  nav.style.color="#232025"
  nav2.style.color="#232025"
  line1.style.backgroundColor="#232025"
  line2.style.backgroundColor="#232025"
  line1.style.transform=`rotate(120deg)`
  line2.style.transform=`rotate(50deg)`
  line1.style.width="80%"
  line2.style.width="80%"
  line1.style.height="3px"
  line2.style.height="3px"
  document.querySelector("#pointer").style.backgroundColor="#232025"
  flag=1
  }
  else{
    full.style.transform=`translateY(-100%)`
  nav.style.color="#d5cdc4"
  nav2.style.color="#d5cdc4"
  line1.style.backgroundColor="#d5cdc4"
  line2.style.backgroundColor="#d5cdc4"
  line1.style.transform=`rotate(180deg)`
  line2.style.transform=`rotate(180deg)`
  line1.style.width="80%"
  line2.style.width="80%"
  line1.style.height="1px"
  line2.style.height="1px"
  document.querySelector("#pointer").style.backgroundColor="#d69e5e"

  flag=0
  }
})

