import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconZoomCheck({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zoom-check" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={10} cy={10} r={7} /><Path d="M21 21l-6 -6" /><Path d="M7 10l2 2l4 -4" /></Svg>;
}
export default IconZoomCheck;