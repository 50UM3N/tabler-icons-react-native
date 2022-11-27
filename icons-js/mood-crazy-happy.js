import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconMoodCrazyHappy({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-crazy-happy" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Line x1={7} y1={8.5} x2={10} y2={11.5} /><Path d="M7 11.5l3 -3" /><Line x1={14} y1={8.5} x2={17} y2={11.5} /><Path d="M14 11.5l3 -3" /><Path d="M9.5 15a3.5 3.5 0 0 0 5 0" /></Svg>;
}
export default IconMoodCrazyHappy;