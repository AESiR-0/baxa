import React from 'react'

export default function ScrolligCard(props) {
  return (
    <>
      <div className="flex max-md:flex-col max-md:gap-20  max-md:h-full  items-center justify-center w-auto h-auto gap-10">
        <div className="mb-10 max-md:mb-0 max-md:h-fit max-md:px-24 scroller-main">
        <img src={props.image} height={600} width={800} alt=""  srcSet="" />
        </div>
        <div className="text-left max-md:text-center max-md:gap-3   max-md:px-10  max-md:h-fit max-md:mb-10 -mb-40 flex h-auto justify-center  flex-col gap-1">
            <p className='text-2xl max-md:hidden font-jost'>{props.number}</p> <br />
            <p className='uppercase text-4xl max-w-xl font-jost font-bold'>{props.title}</p> <br />
            <p className='max-md:max-w-md max-md:px-5 text-2xl max-w-sm font-jost font-semibold'>{props.text}</p>
        </div>
      </div>
    </>
  )
}
