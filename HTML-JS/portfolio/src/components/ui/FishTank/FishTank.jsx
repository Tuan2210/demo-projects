import React, {useEffect} from "react";

import Fish from './Fish'

import styled from "styled-components";

const FishTank = ({ children }) => {

  // handle bubbles
  useEffect(() => {
    const bubbleCount = 12;
    const bubbleField = document.getElementsByClassName("bubble-field")[0];

    // generate bubbles with randomly animation
    for (let i = 0; i < bubbleCount; i++) {
      const randNum = Math.floor(Math.random() * 20) + 1;
      const animDur = 2 + 0.5 * randNum;
      const moveEl = document.createElement("div");
      moveEl.setAttribute("class", "bubble-rise");
      moveEl.setAttribute("style", `animation-duration: ${animDur}s;`);

      const bubbleEl = document.createElement("div");
      bubbleEl.setAttribute("class", "bubble");
      const bubbleElContent = document.createTextNode("");
      bubbleEl.appendChild(bubbleElContent);

      moveEl.appendChild(bubbleEl);
      bubbleField.appendChild(moveEl);
    }
  }, []);

  return (
    <StyledFishTank className='bubble-field text-white bg-black mb-[100%] w-full h-full text-center relative overflow-hidden'>      
      <Fish className="fish yellow-green-fish blue-fish absolute left-0 bottom-[80%]" />
      <Fish className="fish absolute left-0 bottom-[50%]" />
      <Fish className="fish blue-fish absolute left-0 bottom-[5px]" />
      { children }
    </StyledFishTank>
  )
}

const StyledFishTank = styled.div`
  // bubbles
  @keyframes bubble {
      0% { 
        transform: translateX(10px);
        -webkit-transform: translateX(10px);
        -moz-transform: translateX(10px);
        -ms-transform: translateX(10px);
        -o-transform: translateX(10px); 
      }
      50% { 
        transform: translateX(-10px);
        -webkit-transform: translateX(-10px);
        -moz-transform: translateX(-10px);
        -ms-transform: translateX(-10px);
        -o-transform: translateX(-10px); 
      }
      100% { 
        transform: translateX(10px);
        -webkit-transform: translateX(10px);
        -moz-transform: translateX(10px);
        -ms-transform: translateX(10px);
        -o-transform: translateX(10px); 
      }
  }

  .bubble {
      position: relative;
      box-shadow: 0px 0px 12px 5px inset lightgray;
      -webkit-box-shadow: 0px 0px 12px 5px inset lightgray;
      -moz-box-shadow: 0px 0px 12px 5px inset lightgray;
      -o-box-shadow: 0px 0px 12px 5px inset lightgray;
      -ms-box-shadow: 0px 0px 12px 5px inset lightgray;
      border-radius: 50%;
      display: inline-block;
      width: 30px;
      height: 30px;
      text-align: center;
      vertical-align: middle;
      line-height: 50px;
      font-size: 25px;
      animation: bubble 2s ease 0s infinite normal;
  }

  .bubble:after {
      content: '';
      position: absolute;
      background-color: lightgray;
      width: 13px;
      height: 8px;
      top: 10%;
      right: 21%;
      border-radius: 50%;
      transform: rotateZ(30deg) scaleY(0.7);
      -webkit-transform: rotateZ(30deg) scaleY(0.7);
      -moz-transform: rotateZ(30deg) scaleY(0.7);
      -ms-transform: rotateZ(30deg) scaleY(0.7);
      -o-transform: rotateZ(30deg) scaleY(0.7);
      filter: blur(1px);
      -webkit-filter: blur(1px);
  }

  @keyframes bubble-rise {
      0% { 
        transform: translateY(0px);
        -webkit-transform: translateY(0px);
        -moz-transform: translateY(0px);
        -ms-transform: translateY(0px);
        -o-transform: translateY(0px); 
      }
      100% { 
        transform: translateY(-1000px);
        -webkit-transform: translateY(-1000px);
        -moz-transform: translateY(-1000px);
        -ms-transform: translateY(-1000px);
        -o-transform: translateY(-1000px); 
      }
  }

  .bubble-rise {
      position: relative;
      display: inline-block;
      margin: 15px;
      top: 100%;
      animation: bubble-rise 2s cubic-bezier(0.3, 0, 0.7, 0.75) 0s infinite normal;
  }

  // fish
  @keyframes fish {
    0% { 
      transform: translate(0vw);
      -webkit-transform: translate(0vw);
      -moz-transform: translate(0vw);
      -ms-transform: translate(0vw);
      -o-transform: translate(0vw);
    }
    10% {
      transform: translate(20vw, -125px);
      -webkit-transform: translate(20vw, -125px);
      -moz-transform: translate(20vw, -125px);
      -ms-transform: translate(20vw, -125px);
      -o-transform: translate(20vw, -125px); 
    }
    20% {
      transform: translate(40vw, -45px) rotateZ(22deg);
      -webkit-transform: translate(40vw, -45px) rotateZ(22deg);
      -moz-transform: translate(40vw, -45px) rotateZ(22deg);
      -ms-transform: translate(40vw, -45px) rotateZ(22deg);
      -o-transform: translate(40vw, -45px) rotateZ(22deg); 
    }
    30% {
      transform: translate(60vw, -250px);
      -webkit-transform: translate(60vw, -250px);
      -moz-transform: translate(60vw, -250px);
      -ms-transform: translate(60vw, -250px);
      -o-transform: translate(60vw, -250px); 
    }
    40% {
      transform: translate(80vw, -80px) rotateZ(22deg);
      -webkit-transform: translate(80vw, -80px) rotateZ(22deg);
      -moz-transform: translate(80vw, -80px) rotateZ(22deg);
      -ms-transform: translate(80vw, -80px) rotateZ(22deg);
      -o-transform: translate(80vw, -80px) rotateZ(22deg); 
    }
    50% { 
      transform: translate(100vw, -145px);
      -webkit-transform: translate(100vw, -145px);
      -moz-transform: translate(100vw, -145px);
      -ms-transform: translate(100vw, -145px);
      -o-transform: translate(100vw, -145px);
    }
    51% { 
      transform: translate(100vw, -145px) rotateY(180deg);
      -webkit-transform: translate(100vw, -145px) rotateY(180deg);
      -moz-transform: translate(100vw, -145px) rotateY(180deg);
      -ms-transform: translate(100vw, -145px) rotateY(180deg);
      -o-transform: translate(100vw, -145px) rotateY(180deg);
    }
    60% { 
      transform: translate(80vw, -80px) rotateY(180deg) rotateZ(22deg);
      -webkit-transform: translate(80vw, -80px) rotateY(180deg) rotateZ(22deg);
      -moz-transform: translate(80vw, -80px) rotateY(180deg) rotateZ(22deg);
      -ms-transform: translate(80vw, -80px) rotateY(180deg) rotateZ(22deg);
      -o-transform: translate(80vw, -80px) rotateY(180deg) rotateZ(22deg);
    }
    70% { 
      transform: translate(60vw, -250px) rotateY(180deg);
      -webkit-transform: translate(60vw, -250px) rotateY(180deg);
      -moz-transform: translate(60vw, -250px) rotateY(180deg);
      -ms-transform: translate(60vw, -250px) rotateY(180deg);
      -o-transform: translate(60vw, -250px) rotateY(180deg);
    }
    80% { 
      transform: translate(40vw, -45px) rotateY(180deg) rotateZ(22deg);
      -webkit-transform: translate(40vw, -45px) rotateY(180deg) rotateZ(22deg);
      -moz-transform: translate(40vw, -45px) rotateY(180deg) rotateZ(22deg);
      -ms-transform: translate(40vw, -45px) rotateY(180deg) rotateZ(22deg);
      -o-transform: translate(40vw, -45px) rotateY(180deg) rotateZ(22deg);
    }
    90% { 
      transform: translate(20vw, -125px) rotateY(180deg);
      -webkit-transform: translate(20vw, -125px) rotateY(180deg);
      -moz-transform: translate(20vw, -125px) rotateY(180deg);
      -ms-transform: translate(20vw, -125px) rotateY(180deg);
      -o-transform: translate(20vw, -125px) rotateY(180deg);
    }
    99% { 
      transform: translate(0vw) rotateY(180deg) rotateZ(22deg);
      -webkit-transform: translate(0vw) rotateY(180deg) rotateZ(22deg);
      -moz-transform: translate(0vw) rotateY(180deg) rotateZ(22deg);
      -ms-transform: translate(0vw) rotateY(180deg) rotateZ(22deg);
      -o-transform: translate(0vw) rotateY(180deg) rotateZ(22deg);
    }
    100% { 
      transform: translate(0vw);
      -webkit-transform: translate(0vw);
      -moz-transform: translate(0vw);
      -ms-transform: translate(0vw);
      -o-transform: translate(0vw);
    }
  }

  .fish {
    animation: fish 40s cubic-bezier(0.9, 1, 0.3, 0.75) 0s infinite normal;
  }

  .blue-fish {
    animation: fish 25s cubic-bezier(0.7, 1, 0.3, 0.5) 0s infinite normal;
  }

  .yellow-green-fish {
    animation: fish 20s cubic-bezier(0.7, 1, 0.3, 0.5) 0s infinite normal;
  }

  .fish-body {
      box-shadow: 0px -7px 7px inset #00000045;
      -webkit-box-shadow: 0px -7px 7px inset #00000045;
      -moz-box-shadow: 0px -7px 7px inset #00000045;
      -o-box-shadow: 0px -7px 7px inset #00000045;
      -ms-box-shadow: 0px -7px 7px inset #00000045;
      transform: skewX(5deg) skewY(-10deg);
      -webkit-transform: skewX(5deg) skewY(-10deg);
      -moz-transform: skewX(5deg) skewY(-10deg);
      -ms-transform: skewX(5deg) skewY(-10deg);
      -o-transform: skewX(5deg) skewY(-10deg);
  }

  .blue-fish .fish-body {
    background-color: #0098e0;
  }

  .yellow-green-fish .fish-body {
    background-color: yellowgreen;
  }

  .fish-body:before {
      content: "";
      width: 15px;
      height: 15px;
      background-color: #ffffff;
      position: absolute;
      border-radius: 50%;
      right: 18px;
      top: 16px;
  }

  .fish-body:after {
      content: "";
      width: 7px;
      height: 9px;
      background-color: #000000;
      position: absolute;
      border-radius: 50%;
      right: 20px;
      top: 18px;
  }

  .top-fin {
      border-radius: 20% 50%;
      box-shadow: 2px -11px 7px inset #00000080;
      -webkit-box-shadow: 2px -11px 7px inset #00000080;
      -moz-box-shadow: 2px -11px 7px inset #00000080;
      -o-box-shadow: 2px -11px 7px inset #00000080;
      -ms-box-shadow: 2px -11px 7px inset #00000080;
      transform: rotate(80deg) skewX(-23deg);
      -webkit-transform: rotate(80deg) skewX(-23deg);
      -moz-transform: rotate(80deg) skewX(-23deg);
      -ms-transform: rotate(80deg) skewX(-23deg);
      -o-transform: rotate(80deg) skewX(-23deg);
  }

  .blue-fish .top-fin {
    background-color: #0098e0;
  }

  @keyframes tail-fin {
      0% { 
        transform: rotate(25deg) skewX(-18deg) skewY(-5deg);
        -webkit-transform: rotate(25deg) skewX(-18deg) skewY(-5deg);
        -moz-transform: rotate(25deg) skewX(-18deg) skewY(-5deg);
        -ms-transform: rotate(25deg) skewX(-18deg) skewY(-5deg);
        -o-transform: rotate(25deg) skewX(-18deg) skewY(-5deg);
        left: -35px;
      }
      50% {
        transform: rotate(25deg) skewX(-18deg) skewY(-15deg);
        -webkit-transform: rotate(25deg) skewX(-18deg) skewY(-15deg);
        -moz-transform: rotate(25deg) skewX(-18deg) skewY(-15deg);
        -ms-transform: rotate(25deg) skewX(-18deg) skewY(-15deg);
        -o-transform: rotate(25deg) skewX(-18deg) skewY(-15deg); 
        left: -33px;
      }
      100% { 
        transform: rotate(25deg) skewX(-18deg) skewY(-5deg);
        -webkit-transform: rotate(25deg) skewX(-18deg) skewY(-5deg);
        -moz-transform: rotate(25deg) skewX(-18deg) skewY(-5deg);
        -ms-transform: rotate(25deg) skewX(-18deg) skewY(-5deg);
        -o-transform: rotate(25deg) skewX(-18deg) skewY(-5deg);
        left: -35px;
      }
  }

  .tail-fin {
      border-radius: 40% 50%;
      box-shadow: 1px -13px 7px inset #00000080;
      -webkit-box-shadow: 1px -13px 7px inset #00000080;
      -moz-box-shadow: 1px -13px 7px inset #00000080;
      -o-box-shadow: 1px -13px 7px inset #00000080;
      -ms-box-shadow: 1px -13px 7px inset #00000080;
      transform: rotate(25deg) skewX(-18deg) skewY(-15deg);
      -webkit-transform: rotate(25deg) skewX(-18deg) skewY(-15deg);
      -moz-transform: rotate(25deg) skewX(-18deg) skewY(-15deg);
      -ms-transform: rotate(25deg) skewX(-18deg) skewY(-15deg);
      -o-transform: rotate(25deg) skewX(-18deg) skewY(-15deg);
      animation: tail-fin 1s ease 0s infinite normal;
  }

  .blue-fish .tail-fin {
    background-color: #0098e0;
  }

  .tail-fin:before {
      content: "";
      z-index: 9;
      position: absolute;
      left: -16px;
      bottom: 19px;
      width: 40px;
      height: 48px;
      border-radius: 40% 50%;
      background-color: orange;
      box-shadow: 1px -13px 7px inset #00000080;
      -webkit-box-shadow: 1px -13px 7px inset #00000080;
      -moz-box-shadow: 1px -13px 7px inset #00000080;
      -o-box-shadow: 1px -13px 7px inset #00000080;
      -ms-box-shadow: 1px -13px 7px inset #00000080;
      transform: rotate(85deg);
      -webkit-transform: rotate(85deg);
      -moz-transform: rotate(85deg);
      -ms-transform: rotate(85deg);
      -o-transform: rotate(85deg);
  }

  .blue-fish .tail-fin:before {
    background-color: #0098e0;
  }

  @keyframes side-fin {
      0% { 
      transform: rotate(15deg) skewX(-18deg) skewY(-15deg);
      -webkit-transform: rotate(15deg) skewX(-18deg) skewY(-15deg);
      -moz-transform: rotate(15deg) skewX(-18deg) skewY(-15deg);
      -ms-transform: rotate(15deg) skewX(-18deg) skewY(-15deg);
      -o-transform: rotate(15deg) skewX(-18deg) skewY(-15deg);
      }
      50% { 
      transform: rotate(25deg) skewX(-18deg) skewY(-15deg);
      -webkit-transform: rotate(25deg) skewX(-18deg) skewY(-15deg);
      -moz-transform: rotate(25deg) skewX(-18deg) skewY(-15deg);
      -ms-transform: rotate(25deg) skewX(-18deg) skewY(-15deg);
      -o-transform: rotate(25deg) skewX(-18deg) skewY(-15deg);
      }
      100% { 
      transform: rotate(15deg) skewX(-18deg) skewY(-15deg);
      -webkit-transform: rotate(15deg) skewX(-18deg) skewY(-15deg);
      -moz-transform: rotate(15deg) skewX(-18deg) skewY(-15deg);
      -ms-transform: rotate(15deg) skewX(-18deg) skewY(-15deg);
      -o-transform: rotate(15deg) skewX(-18deg) skewY(-15deg);
      }
  }

  .side-fin {
      border-radius: 50% 40%;
      box-shadow: 1px -13px 7px inset #00000080;
      -webkit-box-shadow: 1px -13px 7px inset #00000080;
      -moz-box-shadow: 1px -13px 7px inset #00000080;
      -o-box-shadow: 1px -13px 7px inset #00000080;
      -ms-box-shadow: 1px -13px 7px inset #00000080;
      transform: rotate(25deg) skewX(-18deg) skewY(-15deg);
      -webkit-transform: rotate(25deg) skewX(-18deg) skewY(-15deg);
      -moz-transform: rotate(25deg) skewX(-18deg) skewY(-15deg);
      -ms-transform: rotate(25deg) skewX(-18deg) skewY(-15deg);
      -o-transform: rotate(25deg) skewX(-18deg) skewY(-15deg);
      animation: side-fin 2s ease 0s infinite normal;
  }

  .blue-fish .side-fin {
    background-color: #0098e0;
  }

  .scale {
      box-shadow: 3px -3px 5px inset #00000020;
      -webkit-box-shadow: 3px -3px 5px inset #00000020;
      -moz-box-shadow: 3px -3px 5px inset #00000020;
      -o-box-shadow: 3px -3px 5px inset #00000020;
      -ms-box-shadow: 3px -3px 5px inset #00000020;
      transform: rotate(22deg) skewX(-3deg) skewY(-10deg);
      -webkit-transform: rotate(22deg) skewX(-3deg) skewY(-10deg);
      -moz-transform: rotate(22deg) skewX(-3deg) skewY(-10deg);
      -ms-transform: rotate(22deg) skewX(-3deg) skewY(-10deg);
      -o-transform: rotate(22deg) skewX(-3deg) skewY(-10deg);
  }

  .blue-fish .scale {
    background-color: #0098e0;
  }
`

export default FishTank