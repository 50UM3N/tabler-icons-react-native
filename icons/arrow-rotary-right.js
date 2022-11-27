import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconArrowRotaryRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-rotary-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={8} cy={7} r={3} /><Path d="M8 10v10" /><Path d="M17 11l4 -4l-4 -4" /><Path d="M11 7h10" /></Svg>;
}
export default IconArrowRotaryRight;