import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconLadderOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ladder-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 3v1m0 4v13" /><Path d="M16 3v9m0 4v5" /><Path d="M8 14h6" /><Path d="M8 10h2m4 0h2" /><Path d="M10 6h6" /><Path d="M8 18h8" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconLadderOff;