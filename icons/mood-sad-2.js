import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconMoodSad2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-sad-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" /><Path d="M10 9.25c-.5 1 -2.5 1 -3 0" /><Path d="M17 9.25c-.5 1 -2.5 1 -3 0" /></Svg>;
}
export default IconMoodSad2;