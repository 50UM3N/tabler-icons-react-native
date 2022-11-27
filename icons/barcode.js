import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconBarcode({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-barcode" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 7v-1a2 2 0 0 1 2 -2h2" /><Path d="M4 17v1a2 2 0 0 0 2 2h2" /><Path d="M16 4h2a2 2 0 0 1 2 2v1" /><Path d="M16 20h2a2 2 0 0 0 2 -2v-1" /><Rect x={5} y={11} width={1} height={2} /><Line x1={10} y1={11} x2={10} y2={13} /><Rect x={14} y={11} width={1} height={2} /><Line x1={19} y1={11} x2={19} y2={13} /></Svg>;
}
export default IconBarcode;