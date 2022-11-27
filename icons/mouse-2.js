import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconMouse2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mouse-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={6} y={3} width={12} height={18} rx={4} /><Path d="M12 3v7" /><Path d="M6 10h12" /></Svg>;
}
export default IconMouse2;