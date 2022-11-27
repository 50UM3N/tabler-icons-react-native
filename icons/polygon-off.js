import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconPolygonOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-polygon-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={5} r={2} /><Circle cx={19} cy={8} r={2} /><Circle cx={5} cy={11} r={2} /><Circle cx={15} cy={19} r={2} /><Path d="M6.5 9.5l1.546 -1.311" /><Path d="M14 5.5l3 1.5" /><Path d="M18.5 10l-1.185 3.318m-1.062 2.972l-.253 .71" /><Path d="M13.5 17.5l-7 -5" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconPolygonOff;