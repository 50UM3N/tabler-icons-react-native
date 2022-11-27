import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBikeOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bike-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={5} cy={18} r={3} /><Path d="M16.437 16.44a3 3 0 0 0 4.123 4.123m1.44 -2.563a3 3 0 0 0 -3 -3" /><Path d="M12 19v-4l-3 -3l1.665 -1.332m2.215 -1.772l1.12 -.896l2 3h3" /><Circle cx={17} cy={5} r={1} /><Path d="M3 3l18 18" /></Svg>;
}
export default IconBikeOff;