import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconReceiptOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-receipt-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 21v-16m2 -2h10a2 2 0 0 1 2 2v10m0 4.01v1.99l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" /><Line x1={11} y1={7} x2={15} y2={7} /><Line x1={9} y1={11} x2={11} y2={11} /><Line x1={13} y1={15} x2={15} y2={15} /><Line x1={15} y1={11} x2={15} y2={11.01} /><Line x1={3} y1={3} x2={21} y2={21} /></Svg>;
}
export default IconReceiptOff;