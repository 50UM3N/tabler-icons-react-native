import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconBuildingBridge({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-bridge" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={6} y1={5} x2={6} y2={19} /><Line x1={18} y1={5} x2={18} y2={19} /><Line x1={2} y1={15} x2={22} y2={15} /><Path d="M3 8a7.5 7.5 0 0 0 3 -2a6.5 6.5 0 0 0 12 0a7.5 7.5 0 0 0 3 2" /><Line x1={12} y1={10} x2={12} y2={15} /></Svg>;
}
export default IconBuildingBridge;