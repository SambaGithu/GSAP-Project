var tl = gsap.timeline({scrollTrigger:{
    //Each value in  start  and  end  has two parts:  "trigger position"   "viewport position".
    trigger: ".two",
    start: "0% 95%",
    end: "85% 85%",
    scrub: true,
    //  markers: true,
}})

tl.to("#fanta",{
    top:"115%",
    left:"2%"
},"orange")

tl.to("#orange-cut",{
    top:"160%",
    left:"24%"
},"orange")

tl.to("#orange",{
    width:"15%",
    top:"165%",
    right:"5%"
},"orange")

tl.to("#leaf",{
    rotate:"130deg",
    left:"80%",
    top:"105%",
},"orange")

tl.to("#leaf2",{
    rotate:"130deg",
    left:"0%",
    top:"105%",
},"orange")


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')
tl2.to("#fanta",{
    width:"35%",
    top: "210%",
    left: "33%",
}, 'ca')

