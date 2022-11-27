import Svg, { Path, Line, Circle } from 'react-native-svg';
import * as React from "react";
function IconBuildingCottage({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-cottage" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={3} y1={21} x2={21} y2={21} /><Path d="M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11" /><Circle cx={12} cy={9} r={2} /><Path d="M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5" /></Svg>;
}
export default IconBuildingCottage;