import React from 'react';

const Fish = ({ className }) => (
  <div className={className}>
    <div className="top-fin absolute left-[35px] top-[-23px] w-[28px] h-[50px] bg-[orange]"></div>
    <div className="fish-body absolute w-[115px] h-[75px] rounded-full bg-[orange]"></div>
    <div className="tail-fin absolute left-[35px] bottom-[-89px] w-[43px] h-[50px] bg-[orange]"></div>
    <div className="side-fin absolute left-[39px] bottom-[-77px] w-[33px] h-[38px] bg-[orange]"></div>
    <div className="scale absolute w-[21px] h-[24px] rounded-[39%] bg-[orange] left-[20px] bottom-[-44px]"></div>
    <div className="scale absolute w-[21px] h-[24px] rounded-[39%] bg-[orange] left-[36px] bottom-[-32px]"></div>
    <div className="scale absolute w-[21px] h-[24px] rounded-[39%] bg-[orange] left-[53px] bottom-[-37px]"></div>
  </div>
);

export default Fish