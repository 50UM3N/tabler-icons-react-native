import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconTrash({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={4} y1={7} x2={20} y2={7} /><Line x1={10} y1={11} x2={10} y2={17} /><Line x1={14} y1={11} x2={14} y2={17} /><Path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><Path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></Svg>;
}
export default IconTrash;