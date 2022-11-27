import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconLassoPolygon({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lasso-polygon" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4.028 13.252l-1.028 -3.252l2 -7l7 5l8 -3l1 9l-9 3l-5.144 -1.255" /><Circle cx={5} cy={15} r={2} /><Path d="M5 17c0 1.42 .316 2.805 1 4" /></Svg>;
}
export default IconLassoPolygon;