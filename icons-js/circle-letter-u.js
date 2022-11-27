import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconCircleLetterU({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-letter-u" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Path d="M10 8v6a2 2 0 1 0 4 0v-6" /></Svg>;
}
export default IconCircleLetterU;