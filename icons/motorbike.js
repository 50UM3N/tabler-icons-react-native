import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconMotorbike({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-motorbike" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={5} cy={16} r={3} /><Circle cx={19} cy={16} r={3} /><Path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" /><Path d="M13 6h2l1.5 3l2 4" /></Svg>;
}
export default IconMotorbike;