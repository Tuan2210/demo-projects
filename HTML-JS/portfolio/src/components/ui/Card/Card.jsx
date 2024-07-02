import React from "react";
import { Link } from 'react-router-dom'
import { FlippingCard, FlippingCardBack, FlippingCardFront } from 'react-ui-cards';

export default function ProjectItem({ prj }) {
  return (
    <FlippingCard>
      <FlippingCardFront>
        <p className="p-1 text-lg font-bold bg-gradient-to-l from-[#5F0F40] to-[black]">{prj.name}</p>
        <img
          src={prj.image}
          alt="prj-img"
          className="w-full h-full bg-contain"
        />
      </FlippingCardFront>
      <FlippingCardBack>
        <div className="w-full h-full p-6 flex flex-col justify-center items-center gap-4 rounded-xl border-2 border-[#5F0F40]">
          <p className="text-base text-justify">{prj.description}</p>
          <Link to={prj.link} className="w-fit p-2 pl-4 pr-4 text-[1rem] font-semibold rounded-full outline-0 bg-[darkorange] hover:bg-orange-400">Read more</Link>
        </div>
      </FlippingCardBack>
    </FlippingCard>
  )
}