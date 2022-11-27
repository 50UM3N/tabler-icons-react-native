import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconCreditCardOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={3} y1={3} x2={21} y2={21} /><Path d="M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -.128 .87" /><Path d="M18.87 18.872a3 3 0 0 1 -.87 .128h-12a3 3 0 0 1 -3 -3v-8c0 -1.352 .894 -2.495 2.124 -2.87" /><Line x1={3} y1={11} x2={11} y2={11} /><Line x1={15} y1={11} x2={21} y2={11} /><Line x1={7} y1={15} x2={7.01} y2={15} /><Line x1={11} y1={15} x2={13} y2={15} /></Svg>;
}
export default IconCreditCardOff;