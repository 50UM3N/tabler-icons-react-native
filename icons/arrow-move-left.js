import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconArrowMoveLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-move-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 12h-10" /><Path d="M6 15l-3 -3l3 -3" /><Path d="M17 12a2 2 0 1 1 4 0a2 2 0 0 1 -4 0z" /></Svg>;
}
export default IconArrowMoveLeft;