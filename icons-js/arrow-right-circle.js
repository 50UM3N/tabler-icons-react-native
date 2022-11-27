import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconArrowRightCircle({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 15l3 -3l-3 -3" /><Circle cx={5} cy={12} r={2} /><Path d="M7 12h14" /></Svg>;
}
export default IconArrowRightCircle;