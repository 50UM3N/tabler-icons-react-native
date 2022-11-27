import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconContainer({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-container" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 4v.01" /><Path d="M20 20v.01" /><Path d="M20 16v.01" /><Path d="M20 12v.01" /><Path d="M20 8v.01" /><Rect x={8} y={4} width={8} height={16} rx={1} /><Path d="M4 4v.01" /><Path d="M4 20v.01" /><Path d="M4 16v.01" /><Path d="M4 12v.01" /><Path d="M4 8v.01" /></Svg>;
}
export default IconContainer;