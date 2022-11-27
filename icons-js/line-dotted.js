import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconLineDotted({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-line-dotted" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 12v.01" /><Path d="M8 12v.01" /><Path d="M12 12v.01" /><Path d="M16 12v.01" /><Path d="M20 12v.01" /></Svg>;
}
export default IconLineDotted;