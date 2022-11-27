import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconEqualDouble({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-equal-double" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 10h7" /><Path d="M3 14h7" /><Path d="M14 10h7" /><Path d="M14 14h7" /></Svg>;
}
export default IconEqualDouble;