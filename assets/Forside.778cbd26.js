import{_ as d,r as u,o as e,c as a,a as i,F as v,b as h,n as g,t as c,d as r,e as x,f}from"./index.3d5fbdda.js";const y={name:"Carousel",setup(){return{slides:u([{src:"/slides/slide1.webp",title:"Slide 1 title text",text:"Slide 1 description text"},{src:"/slides/slide2.webp",title:"Slide 2 title text",text:"Slide 2 description text"},{src:"/slides/slide3.webp",title:"Slide 3 title text",text:"Slide 3 description text"}])}}},w={id:"carouselAutoplaying",class:"carousel slide carousel-fade half-height t-0","data-bs-ride":"carousel"},k={class:"carousel-inner half-height d-flex align-items-center w-100"},_=["src"],q={class:"carousel-caption d-none d-md-block"},C=r('<button class="carousel-control-prev" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',2);function j(t,o,n,l,m,b){return e(),a("div",w,[i("div",k,[(e(!0),a(v,null,h(l.slides,(s,p)=>(e(),a("div",{class:g({"carousel-item":!0,active:p==0}),key:s.src},[i("img",{src:s.src,class:"d-block w-100"},null,8,_),i("div",q,[i("h5",null,c(s.title),1),i("p",null,c(s.text),1)])],2))),128))]),C])}const F=d(y,[["render",j]]),$={name:"Forside",components:{Carousel:F}},S=r('<div class="container px-4 px-lg-5"><div class="card text-white bg-secondary my-5 py-4 text-center"><div class="card-body"><p class="text-white m-0">This call to action card is a great place to showcase some important information or display a clever tagline!</p></div></div><div class="row gx-4 gx-lg-5"><div class="col-md-4 mb-5"><div class="card h-100"><div class="card-body"><h2 class="card-title">Card One</h2><p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p></div><div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">More Info</a></div></div></div><div class="col-md-4 mb-5"><div class="card h-100"><div class="card-body"><h2 class="card-title">Card Two</h2><p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p></div><div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">More Info</a></div></div></div><div class="col-md-4 mb-5"><div class="card h-100"><div class="card-body"><h2 class="card-title">Card Three</h2><p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p></div><div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">More Info</a></div></div></div></div><div class="row gx-4 gx-lg-5 align-items-center"><div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg" alt="..."></div><div class="col-lg-5"><h1 class="font-weight-light">Business Name or Tagline</h1><p>This is a template that is great for small businesses. It doesn&#39;t have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p><a class="btn btn-primary" href="#!">Call to Action!</a></div></div></div><section class="py-5 border-bottom" id="features"><div class="container px-5 my-5"><div class="row gx-5"><div class="col-lg-4 mb-5 mb-lg-0"><div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-collection"></i></div><h2 class="h4 fw-bolder">Featured title</h2><p>Paragraph of text beneath the heading to explain the heading. We&#39;ll add onto it with another sentence and probably just keep going until we run out of words.</p><a class="text-decoration-none" href="#!"> Call to action <i class="bi bi-arrow-right"></i></a></div><div class="col-lg-4 mb-5 mb-lg-0"><div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div><h2 class="h4 fw-bolder">Featured title</h2><p>Paragraph of text beneath the heading to explain the heading. We&#39;ll add onto it with another sentence and probably just keep going until we run out of words.</p><a class="text-decoration-none" href="#!"> Call to action <i class="bi bi-arrow-right"></i></a></div><div class="col-lg-4"><div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div><h2 class="h4 fw-bolder">Featured title</h2><p>Paragraph of text beneath the heading to explain the heading. We&#39;ll add onto it with another sentence and probably just keep going until we run out of words.</p><a class="text-decoration-none" href="#!"> Call to action <i class="bi bi-arrow-right"></i></a></div></div></div></section><section class="bg-light py-5 border-bottom"><div class="container px-5 my-5"><div class="text-center mb-5"><h2 class="fw-bolder">Pay as you grow</h2><p class="lead mb-0">With our no hassle pricing plans</p></div><div class="row gx-5 justify-content-center"><div class="col-lg-6 col-xl-4"><div class="card mb-5 mb-xl-0"><div class="card-body p-5"><div class="small text-uppercase fw-bold text-muted">Free</div><div class="mb-3"><span class="display-4 fw-bold">$0</span><span class="text-muted">/ mo.</span></div><ul class="list-unstyled mb-4"><li class="mb-2"><i class="bi bi-check text-primary"></i><strong>1 users</strong></li><li class="mb-2"><i class="bi bi-check text-primary"></i> 5GB storage </li><li class="mb-2"><i class="bi bi-check text-primary"></i> Unlimited public projects </li><li class="mb-2"><i class="bi bi-check text-primary"></i> Community access </li><li class="mb-2 text-muted"><i class="bi bi-x"></i> Unlimited private projects </li><li class="mb-2 text-muted"><i class="bi bi-x"></i> Dedicated support </li><li class="mb-2 text-muted"><i class="bi bi-x"></i> Free linked domain </li><li class="text-muted"><i class="bi bi-x"></i> Monthly status reports </li></ul><div class="d-grid"><a class="btn btn-outline-primary" href="#!">Choose plan</a></div></div></div></div><div class="col-lg-6 col-xl-4"><div class="card mb-5 mb-xl-0"><div class="card-body p-5"><div class="small text-uppercase fw-bold"><i class="bi bi-star-fill text-warning"></i> Pro </div><div class="mb-3"><span class="display-4 fw-bold">$9</span><span class="text-muted">/ mo.</span></div><ul class="list-unstyled mb-4"><li class="mb-2"><i class="bi bi-check text-primary"></i><strong>5 users</strong></li><li class="mb-2"><i class="bi bi-check text-primary"></i> 5GB storage </li><li class="mb-2"><i class="bi bi-check text-primary"></i> Unlimited public projects </li><li class="mb-2"><i class="bi bi-check text-primary"></i> Community access </li><li class="mb-2"><i class="bi bi-check text-primary"></i> Unlimited private projects </li><li class="mb-2"><i class="bi bi-check text-primary"></i> Dedicated support </li><li class="mb-2"><i class="bi bi-check text-primary"></i> Free linked domain </li><li class="text-muted"><i class="bi bi-x"></i> Monthly status reports </li></ul><div class="d-grid"><a class="btn btn-primary" href="#!">Choose plan</a></div></div></div></div><div class="col-lg-6 col-xl-4"><div class="card"><div class="card-body p-5"><div class="small text-uppercase fw-bold text-muted">Enterprise</div><div class="mb-3"><span class="display-4 fw-bold">$49</span><span class="text-muted">/ mo.</span></div><ul class="list-unstyled mb-4"><li class="mb-2"><i class="bi bi-check text-primary"></i><strong>Unlimited users</strong></li><li class="mb-2"><i class="bi bi-check text-primary"></i> 5GB storage </li><li class="mb-2"><i class="bi bi-check text-primary"></i> Unlimited public projects </li><li class="mb-2"><i class="bi bi-check text-primary"></i> Community access </li><li class="mb-2"><i class="bi bi-check text-primary"></i> Unlimited private projects </li><li class="mb-2"><i class="bi bi-check text-primary"></i> Dedicated support </li><li class="mb-2"><i class="bi bi-check text-primary"></i><strong>Unlimited</strong> linked domains </li><li class="text-muted"><i class="bi bi-check text-primary"></i> Monthly status reports </li></ul><div class="d-grid"><a class="btn btn-outline-primary" href="#!">Choose plan</a></div></div></div></div></div></div></section><section class="py-5 border-bottom"><div class="container px-5 my-5 px-5"><div class="text-center mb-5"><h2 class="fw-bolder">Customer testimonials</h2><p class="lead mb-0">Our customers love working with us</p></div><div class="row gx-5 justify-content-center"><div class="col-lg-6"><div class="card mb-4"><div class="card-body p-4"><div class="d-flex"><div class="flex-shrink-0"><i class="bi bi-chat-right-quote-fill text-primary fs-1"></i></div><div class="ms-4"><p class="mb-1">Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!</p><div class="small text-muted">- Client Name, Location</div></div></div></div></div><div class="card"><div class="card-body p-4"><div class="d-flex"><div class="flex-shrink-0"><i class="bi bi-chat-right-quote-fill text-primary fs-1"></i></div><div class="ms-4"><p class="mb-1">The whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!</p><div class="small text-muted">- Client Name, Location</div></div></div></div></div></div></div></div></section><section class="bg-light py-5"><div class="container px-5 my-5 px-5"><div class="text-center mb-5"><div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div><h2 class="fw-bolder">Get in touch</h2><p class="lead mb-0">We&#39;d love to hear from you</p></div><div class="row gx-5 justify-content-center"><div class="col-lg-6"><form id="contactForm" data-sb-form-api-token="API_TOKEN"><div class="form-floating mb-3"><input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required"><label for="name">Full name</label><div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div></div><div class="form-floating mb-3"><input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email"><label for="email">Email address</label><div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div><div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div></div><div class="form-floating mb-3"><input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required"><label for="phone">Phone number</label><div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div></div><div class="form-floating mb-3"><textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style="height:10rem;" data-sb-validations="required"></textarea><label for="message">Message</label><div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div></div><div class="d-none" id="submitSuccessMessage"><div class="text-center mb-3"><div class="fw-bolder">Form submission successful!</div> To activate this form, sign up at <br><a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a></div></div><div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div><div class="d-grid"><button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div></form></div></div></div></section>',5);function A(t,o,n,l,m,b){const s=x("Carousel");return e(),a("div",null,[f(s),S])}const E=d($,[["render",A]]);export{E as default};