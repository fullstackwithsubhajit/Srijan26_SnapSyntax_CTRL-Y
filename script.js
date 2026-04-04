
// Disable cursor on mobile devices
const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
    || window.matchMedia("(max-width: 768px)").matches;
}

if (!isMobileDevice()) {
  let cursor = document.querySelector(".cursor")
  window.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,

        duration: 0.8,
        ease: "power3.out"
    })
  })
}




const texts = ["Hello", "Hola", "Bonjour", "Ciao", "こんにちは", "Namaste", "안녕하세요", "Olá", "Привет", "مرحبا"];
let i = 0
function splashScreen() {

    let introText = document.querySelector("#introText")

    gsap.to(introText, {
        opacity: 1,
        duration: 0.2,

        onComplete: () => {

            introText.innerHTML = texts[i]
            i++
            if (i < texts.length) {
                setTimeout(splashScreen, 40)


            }
            else {
                gsap.to("#intro", {
                    opacity: 0,

                    onComplete: () => {
                        gsap.to(".bar", 1.5, {
                            delay: 0.2,
                            height: 0,
                            stagger: {
                                amount: 0.5
                            },
                            ease: "power4.inOut"
                        })
                        document.querySelector("#intro").style.display = "none"
                    }

                })
            }

        }
    })
}
splashScreen()

function createCard(title) {

    let html = ` <div class="container noselect">
    <div class="canvas">
    <div class="tracker tr-1"></div>
    <div class="tracker tr-2"></div>
    <div class="tracker tr-3"></div>
    <div class="tracker tr-4"></div>
    <div class="tracker tr-5"></div>
    <div class="tracker tr-6"></div>
    <div class="tracker tr-7"></div>
    <div class="tracker tr-8"></div>
    <div class="tracker tr-9"></div>
    <div class="tracker tr-10"></div>
    <div class="tracker tr-11"></div>
    <div class="tracker tr-12"></div>
    <div class="tracker tr-13"></div>
    <div class="tracker tr-14"></div>
    <div class="tracker tr-15"></div>
    <div class="tracker tr-16"></div>
    <div class="tracker tr-17"></div>
    <div class="tracker tr-18"></div>
    <div class="tracker tr-19"></div>
    <div class="tracker tr-20"></div>
    <div class="tracker tr-21"></div>
    <div class="tracker tr-22"></div>
    <div class="tracker tr-23"></div>
    <div class="tracker tr-24"></div>
    <div class="tracker tr-25"></div>
    <div id="card">
    <p id="prompt">HOVER OVER</p>
    
    <div class="title">${title}</div>
    
    
    </div>
    </div>
    </div> `

    document.querySelector(".hero-2-left").innerHTML += html



}

createCard("Lorem, ipsum.")
createCard("Lorem, ipsum.")
createCard("Lorem, ipsum.")


let cardview = document.querySelector(".hero-2-left")
cardview.addEventListener("mouseenter", () => {




    gsap.to(".cursor", {
        scale: 6,
        backgroundColor: "transparent"



    })
})
cardview.addEventListener("mouseleave", () => {

    gsap.to(".cursor", {
        scale: 1,
        backgroundColor: "white"


    })


})

gsap.from(".hero-2-left", {
    opacity: 0,
    duration: 0.8,

    x: -100,
    y: -140,

    scrollTrigger: {

        trigger: ".hero-2",
        scroller: "#main",
        start: "top 60%",
    }


})
gsap.from(".hero-2-right", {
    opacity: 0,
    duration: 0.6,
    x: 100,
    y: -140,

    scrollTrigger: {
        trigger: ".hero-2",
        scroller: "#main",
        start: "top 60%",
    }


})

function workingflowcard(title, text) {

    let html = `<div class="card2">
  
  <div class="card__content" style="padding: 20px; ">
    <h3 class="card__title">${title}</h3>
    <p class="card__description">${text}</p>
  </div>
</div>`

    document.querySelector(".how-it-works-cards").innerHTML += html


}

workingflowcard("Title2", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa fugit officiis amet sequi. Ipsa pariatur est dicta quos obcaecati. Deleniti?")
workingflowcard("Title3", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa fugit officiis amet sequi.")
workingflowcard("Title4", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, rerum. Aspernatur hic quas magni dolores natus labore nesciunt. Natus tempore quae dolore corporis ab.")

gsap.from(".how-it-works-cards", {
    opacity: 0,
    duration: 1.4,
    y: 100,
    scrollTrigger: {
        trigger: ".how-it-works-cards",

        scroller: "#main",
        start: "top 80%",


    }
})
gsap.from(".working-head", {
    opacity: 0,
    duration: 1,
    y: -100,


    scrollTrigger: {
        trigger: ".working-head",
        scroller: "#main",
        start: "top 60%",


    }
})


   
        
        gsap.from(".neumorphic-container", {
            opacity: 0,
            duration: 1,
            x: 100,
           
            
            scrollTrigger: {
                trigger: ".neumorphic-container",
                scroller: "#main",
                start: "top 60%",
                
                
            }
        })
    
gsap.from(".neumorphic-container-2", {
    opacity: 0,
    duration: 1,
    x: -100,


    scrollTrigger: {
        trigger: ".neumorphic-container-2",
        scroller: "#main",
        start: "top 60%",


    }
})
gsap.from(".what-it-does-1-left", {
    opacity: 0,
    duration: 1,
    x: -100,


    scrollTrigger: {
        trigger: ".what-it-does-1-left",
        scroller: "#main",
        start: "top 60%",


    }
})
gsap.from(".what-it-does-2-left", {
    opacity: 0,
    duration: 1,
    x: 100,


    scrollTrigger: {
        trigger: ".what-it-does-2-left",
        scroller: "#main",
        start: "top 60%",


    }
})

let path = `M 0 200 Q 700 200 1200 200`
let finalPath = `M 0 200 Q 700 200 1200 200`

// Disable interactive SVG path on mobile devices
const IsMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
    || window.matchMedia("(max-width: 768px)").matches;
}

if (!IsMobileDevice()) {
  document.querySelector("#string").addEventListener("mousemove", (dets) => {
    // Get the element's position and adjust the Y value relative to it
    const rect = document.querySelector("#string").getBoundingClientRect();
    const offsetY = dets.clientY - rect.top; // Get Y relative to element
    const offsetX = dets.clientX - rect.top; // Get Y relative to element
    
    path = `M 0 200 Q ${offsetX} ${offsetY} 1200 200`
    
    gsap.to("svg path", {
      attr: { d: path },
      duration: 0.2,
   
    })
  })

document.querySelector("#string").addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 0.8,
        ease: "elastic.out(1,0.1)",
    })
  })
}