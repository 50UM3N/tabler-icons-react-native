import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconCursorText({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cursor-text" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 12h4" /><Path d="M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3" /><Path d="M15 4a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3" /></Svg>;
}
export default IconCursorText;