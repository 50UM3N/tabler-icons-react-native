import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconAnchorOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-anchor-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12v9" /><Path d="M4 13a8 8 0 0 0 14.138 5.13m1.44 -2.56a7.99 7.99 0 0 0 .422 -2.57" /><Path d="M21 13h-2" /><Path d="M5 13h-2" /><Path d="M12.866 8.873a3.001 3.001 0 1 0 -3.737 -3.747" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconAnchorOff;