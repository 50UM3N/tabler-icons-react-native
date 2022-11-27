import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconColumnInsertLeft({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-column-insert-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1z" /><Line x1={5} y1={12} x2={9} y2={12} /><Line x1={7} y1={10} x2={7} y2={14} /></Svg>;
}
export default IconColumnInsertLeft;