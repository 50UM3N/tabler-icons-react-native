import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBracketsOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brackets-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 5v15h3" /><Path d="M16 4h3v11m0 4v1h-3" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconBracketsOff;