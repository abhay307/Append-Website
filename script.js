
	var tl = gsap.timeline()


tl.from(".navbar",{
	opacity:0,
	duration:0.8,
	delay:0.3,
	y:-100
})
tl.from(".banner .row",{
	opacity:0,
	duration:0.8,
	scale:0
})



/**About section GSAP start**/
gsap.from("#aboutdiv",{
	y:-100,
	opacity:0,
	duration:0.9,
	scrollTrigger:{
        trigger:"#aboutdiv",//when we use pin property the we trigger parent div.
        scroller:"body",
        /*markers:true,*/
        start:"top 60%",
        end:" top -150%",
        
       
	}
})

gsap.from(".right1-about",{
	scale:0,
	opacity:0,
	duration:0.9,
	scrollTrigger:{
        trigger:".right1-about",//when we use pin property the we trigger parent div.
        scroller:"body",
       /* markers:true,*/
        start:"top 70%",
        end:" top -150%",      
	}
})
gsap.from(".left1-about",{
	scale:0,
	opacity:0,
	duration:0.9,
	scrollTrigger:{
        trigger:".right1-about",//when we use pin property the we trigger parent div.
        scroller:"body",
       /* markers:true,*/
        start:"top 70%",
        end:" top -150%",      
	}
})



gsap.from(".right2-about",{
	scale:0,
	opacity:0,
	duration:0.9,
	scrollTrigger:{
        trigger:".right2-about",//when we use pin property the we trigger parent div.
        scroller:"body",
        /*markers:true,*/
        start:"top 80%",
        end:" top -150%",   
		
	}
})
gsap.from(".left2-about",{
	scale:0,
	opacity:0,
	duration:0.9,
	scrollTrigger:{
        trigger:".right2-about",//when we use pin property the we trigger parent div.
        scroller:"body",
       /* markers:true,*/
        start:"top 80%",
        end:" top -150%",      
	}
})
/**About section GSAP End**/


/**Count section GSAP Start**/

gsap.from(".c-1",{
	y:-100,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".right2-about",
        scroller:"body",
       /*markers:true,*/
        start:"top 30%",
        end:" top -150%",      
	}
})
gsap.from(".c-2",{
	y:100,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".right2-about",
        scroller:"body",
       /*markers:true,*/
        start:"top 25%",
        end:" top -150%",      
	}
})
gsap.from(".c-3",{
	y:-100,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".right2-about",
        scroller:"body",
       /*markers:true,*/
        start:"top 20%",
        end:" top -150%",      
	}
})
gsap.from(".c-4",{
	y:100,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".right2-about",
        scroller:"body",
       /*markers:true,*/
        start:"top 15%",
        end:" top -150%",      
	}
})

/**Count section GSAP End**/



/**Services section GSAP Start**/

gsap.from(".head1",{
	y:-100,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".c-4",
        scroller:"body",
      /* markers:true,*/
        start:"top 55%",
        end:" top -150%",      
	}
})

gsap.from(".serv-1",{
	x:-100,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".head1",
        scroller:"body",
       /*markers:true,*/
        start:"top 25%",
        end:" top -150%",      
	}
})

gsap.from(".serv-2",{
	x:100,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".head1",
        scroller:"body",
       /*markers:true,*/
        start:"top 25%",
        end:" top -150%",      
	}
})


gsap.from(".serv-3",{
	x:-100,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".serv-1",
        scroller:"body",
       /*markers:true,*/
        start:"top 20%",
        end:" top -150%",      
	}
})

gsap.from(".serv-4",{
	x:100,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".serv-1",
        scroller:"body",
       /*markers:true,*/
        start:"top 20%",
        end:" top -150%",      
	}
})
gsap.from(".serv-5",{
	x:-100,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".serv-3",
        scroller:"body",
       /*markers:true,*/
        start:"top 0%",
        end:" top -150%",      
	}
})

gsap.from(".serv-6",{
	x:100,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".serv-3",
        scroller:"body",
       /*markers:true,*/
        start:"top 0%",
        end:" top -150%",      
	}
})

/**Services section GSAP End**/



/**Features section GSAP Start**/


gsap.from(".head2",{
	y:-100,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".head2",
        scroller:"body",
		/*markers:true,*/
        start:"top 45%",
        end:" top -150%",      
	}
})

gsap.from(".feat-1",{
	x:-100,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".feat-1",
        scroller:"body",
		/*markers:true,*/
        start:"top 50%",
        end:" top -150%",      
	}
})
gsap.from(".fimg",{
	x:100,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".fimg",
        scroller:"body",
		/*markers:true,*/
        start:"top 50%",
        end:" top -150%",      
	}
})



gsap.from(".feat-2",{
	x:-100,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".feat-2",
        scroller:"body",
		/*markers:true,*/
        start:"top 50%",
        end:" top -150%",      
	}
})
gsap.from(".feat-3",{
	x:100,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".feat-3",
        scroller:"body",
		/*markers:true,*/
        start:"top 50%",
        end:" top -150%",      
	}
})

	
/**Features section GSAP End**/




/**Portfolio section GSAP Start**/

gsap.from(".head3",{
	y:-100,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".head3",
        scroller:"body",
		/*markers:true,*/
        start:"top 45%",
        end:" top -150%",      
	}
})


gsap.from(".portfolio-image",{
	scale:0,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".port-row",
        scroller:"body",
		/*markers:true,*/
        start:"top 45%",
        end:" top -150%",      
	}
})
/**Portfolio section GSAP End**/



/**Pricing section GSAP Start**/
	
	
	gsap.from(".head4",{
	scale:0,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".head4",
        scroller:"body",
		/*markers:true,*/
        start:"top 65%",
        end:" top -150%",      
	}
})
gsap.from(".price-1",{
	x:-200,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".head4",
        scroller:"body",
		/*markers:true,*/
        start:"top 55%",
        end:" top -150%",      
	}
})
gsap.from("#pricing-center",{
	scale:0,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".head4",
        scroller:"body",
		/*markers:true,*/
        start:"top 55%",
        end:" top -150%",      
	}
})
gsap.from(".price-2",{
	x:200,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".head4",
        scroller:"body",
		/*markers:true,*/
        start:"top 55%",
        end:" top -150%",      
	}
})
	
/**Pricing section GSAP End**/



/**FAQ section GSAP Start**/

gsap.from(".faq",{
	x:-200,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".faq",
        scroller:"body",
		/*markers:true,*/
        start:"top 95%",
        end:" top -150%",      
	}
})

gsap.from(".accordion",{
	x:200,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".faq",
        scroller:"body",
		/*markers:true,*/
        start:"top 95%",
        end:" top -150%",      
	}
})
	
/**FAQ section GSAP End**/


/**Team section GSAP End**/

gsap.from(".head5",{
	scale:0,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".head5",
        scroller:"body",
		/*markers:true,*/
        start:"top 75%",
        end:" top -150%",      
	}
})


gsap.from(".AppTeam-1",{
	scale:0,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".head5",
        scroller:"body",
		/*markers:true,*/
        start:"top 15%",
        end:" top -150%",      
	}
})
gsap.from(".AppTeam-2",{
	scale:0,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".AppTeam-1",
        scroller:"body",
		/*markers:true,*/
        start:"top 35%",
        end:" top -150%",      
	}
})
	
/**Team section GSAP End**/


/**Call to action section GSAP Start**/

gsap.from(".cta",{
	scale:0,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".call",
        scroller:"body",
		/*markers:true,*/
        start:"top 70%",
        end:" top -150%",      
	}
})

/**Call to action section GSAP End**/


/**Testimonials section GSAP End**/
gsap.from(".testi",{
	x:-100,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:"#demo",
        scroller:"body",
		/*markers:true,*/
        start:"top 70%",
        end:" top -150%",      
	}
})
gsap.from(".carousel-inner",{
	x:100,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:"#demo",
        scroller:"body",
		/*markers:true,*/
        start:"top 70%",
        end:" top -150%",      
	}
})
/**Testimonials section GSAP End**/



/**Blog section GSAP Start**/

gsap.from("#blog",{
	scale:0,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".carousel-control-next-icon",
        scroller:"body",
		/*markers:true,*/
        start:"top 40%",
        end:" top -150%",      
	}
	
})


gsap.from(".head6",{
	scale:0,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".head6",
        scroller:"body",
		/*markers:true,*/
        start:"top 80%",
        end:" top -150%",      
	}
	
})


gsap.from(".cont1",{
	x:-200,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".head6",
        scroller:"body",
		/*markers:true,*/
        start:"top 40%",
        end:" top -150%",      
	}
	
})
gsap.from(".contactform",{
	x:200,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".head6",
        scroller:"body",
		/*markers:true,*/
        start:"top 40%",
        end:" top -150%",      
	}
	
})

gsap.from(".footericon",{
	y:-200,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".footericon",
        scroller:"body",
		/*markers:true,*/
        start:"top 50%",
        end:" top -150%",      
	}
	
})
gsap.from(".foot2",{
	y:200,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".footericon",
        scroller:"body",
		/*markers:true,*/
        start:"top 50%",
        end:" top -150%",      
	}
	
})
gsap.from(".foot3",{
	y:200,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".footericon",
        scroller:"body",
		/*markers:true,*/
        start:"top 50%",
        end:" top -150%",      
	}
	
})
gsap.from(".foot4",{
	y:-200,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".footericon",
        scroller:"body",
		/*markers:true,*/
        start:"top 50%",
        end:" top -150%",      
	}
	
})

gsap.from(".copyright",{
	scale:0,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
        trigger:".copyright",
        scroller:"body",
		/*markers:true,*/
        start:"top 100%",
        end:" top -150%",      
	}
	
})