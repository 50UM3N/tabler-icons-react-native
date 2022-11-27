import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconStackPop({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack-pop" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 9.5l-3 1.5l8 4l8 -4l-2.999 -1.5" /><Path d="M4 15l8 4l8 -4" /><Path d="M12 11v-7" /><Path d="M9 7l3 -3l3 3" /></Svg>;
}
export default IconStackPop;