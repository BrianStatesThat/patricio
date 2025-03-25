import React from 'react'

const Headerx = () => {
  return (
    <div
  className="hero min-h-screen w-full bg-cover bg-center pt-[64px]"
  style={{
    backgroundImage: "url(https://www.freepik.com/free-photo/african-american-man-guy-sitting-chair-barber-works-with-beard_14671735.htm#fromView=search&page=1&position=14&uuid=3fd910c3-3975-4362-8d07-7f4f1faa12da&query=Barber+black)",
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5 text-center">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Headerx