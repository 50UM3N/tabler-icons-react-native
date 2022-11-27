import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconBrowserPlus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-browser-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={1} /><Path d="M4 8h16" /><Path d="M8 4v4" /><Path d="M10 14h4" /><Path d="M12 12v4" /></Svg>;
}
export default IconBrowserPlus;