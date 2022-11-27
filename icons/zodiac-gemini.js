import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconZodiacGemini({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zodiac-gemini" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3a21 21 0 0 0 18 0" /><Path d="M3 21a21 21 0 0 1 18 0" /><Line x1={7} y1={4.5} x2={7} y2={19.5} /><Line x1={17} y1={4.5} x2={17} y2={19.5} /></Svg>;
}
export default IconZodiacGemini;