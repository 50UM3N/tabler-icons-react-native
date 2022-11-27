import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconWalk({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-walk" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={13} cy={4} r={1} /><Line x1={7} y1={21} x2={10} y2={17} /><Path d="M16 21l-2 -4l-3 -3l1 -6" /><Path d="M6 12l2 -3l4 -1l3 3l3 1" /></Svg>;
}
export default IconWalk;