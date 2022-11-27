import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconBackhoe({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-backhoe" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={4} cy={17} r={2} /><Circle cx={13} cy={17} r={2} /><Line x1={13} y1={19} x2={4} y2={19} /><Line x1={4} y1={15} x2={13} y2={15} /><Path d="M8 12v-5h2a3 3 0 0 1 3 3v5" /><Path d="M5 15v-2a1 1 0 0 1 1 -1h7" /><Path d="M21.12 9.88l-3.12 -4.88l-5 5" /><Path d="M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -.88l4.24 -4.24z" /></Svg>;
}
export default IconBackhoe;