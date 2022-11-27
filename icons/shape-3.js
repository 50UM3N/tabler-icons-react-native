import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconShape3({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shape-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={5} cy={5} r={2} /><Circle cx={19} cy={19} r={2} /><Circle cx={19} cy={5} r={2} /><Circle cx={5} cy={19} r={2} /><Path d="M7 5h10m-12 2v10m14 -10v10" /></Svg>;
}
export default IconShape3;