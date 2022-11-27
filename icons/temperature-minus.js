import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconTemperatureMinus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-temperature-minus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" /><Line x1={8} y1={9} x2={12} y2={9} /><Line x1={16} y1={9} x2={22} y2={9} /></Svg>;
}
export default IconTemperatureMinus;