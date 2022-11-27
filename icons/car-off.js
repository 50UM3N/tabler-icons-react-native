import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconCarOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-car-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={7} cy={17} r={2} /><Path d="M15.584 15.588a2 2 0 0 0 2.828 2.83" /><Path d="M5 17h-2v-6l2 -5h1m4 0h4l4 5h1a2 2 0 0 1 2 2v4m-6 0h-6m-6 -6h8m4 0h3m-6 -3v-2" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconCarOff;