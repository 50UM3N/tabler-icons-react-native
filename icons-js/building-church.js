import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconBuildingChurch({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-church" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={3} y1={21} x2={21} y2={21} /><Path d="M10 21v-4a2 2 0 0 1 4 0v4" /><Line x1={10} y1={5} x2={14} y2={5} /><Line x1={12} y1={3} x2={12} y2={8} /><Path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" /></Svg>;
}
export default IconBuildingChurch;