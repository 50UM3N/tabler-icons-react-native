import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconSquaresFilled({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-squares-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={8} y={8} width={12} height={12} rx={2} /><Path d="M8 14.5l6.492 -6.492" /><Path d="M13.496 20.004l6.504 -6.504l-6.504 6.504z" /><Path d="M8.586 19.414l10.827 -10.827" /><Path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" /></Svg>;
}
export default IconSquaresFilled;