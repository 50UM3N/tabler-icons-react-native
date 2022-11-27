import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconLetterCaseLower({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-case-lower" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={6.5} cy={15.5} r={3.5} /><Path d="M10 12v7" /><Circle cx={17.5} cy={15.5} r={3.5} /><Path d="M21 12v7" /></Svg>;
}
export default IconLetterCaseLower;