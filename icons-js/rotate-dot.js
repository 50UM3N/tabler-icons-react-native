import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconRotateDot({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rotate-dot" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" /><Circle cx={12} cy={12} r={1} /></Svg>;
}
export default IconRotateDot;