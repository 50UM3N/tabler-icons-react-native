import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconLocationOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-location-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10.72 6.712l10.28 -3.712l-3.724 10.313m-1.056 2.925l-1.72 4.762a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l4.775 -1.724" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconLocationOff;