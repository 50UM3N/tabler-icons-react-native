import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconCurling({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-curling" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={9} width={16} height={10} rx={4} /><Path d="M4 14h16" /><Path d="M8 5h6a2 2 0 0 1 2 2v2" /></Svg>;
}
export default IconCurling;