import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconSquareLetterU({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-letter-u" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={2} /><Path d="M10 8v6a2 2 0 1 0 4 0v-6" /></Svg>;
}
export default IconSquareLetterU;