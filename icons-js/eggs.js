import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconEggs({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eggs" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 22c-3 0 -4.868 -2.118 -4.995 -5c-.005 -3 1.995 -5 4.995 -5c4 0 8.01 2.5 8.005 5c-.005 2.5 -4.005 5 -8.005 5z" /><Path d="M8 18c-3.03 -.196 -5 -2.309 -5 -5.38c0 -4.307 2.75 -8.625 5.5 -8.62c2.614 .005 5.248 3.915 5.5 8" /></Svg>;
}
export default IconEggs;