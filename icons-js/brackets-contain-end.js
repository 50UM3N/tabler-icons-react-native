import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBracketsContainEnd({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brackets-contain-end" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 4h4v16h-4" /><Path d="M5 16h.01" /><Path d="M9 16h.01" /><Path d="M13 16h.01" /></Svg>;
}
export default IconBracketsContainEnd;