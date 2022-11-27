import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconGenderBigender({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gender-bigender" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={11} cy={11} r={4} /><Path d="M19 3l-5 5" /><Path d="M15 3h4v4" /><Path d="M11 16v6" /><Path d="M8 19h6" /></Svg>;
}
export default IconGenderBigender;