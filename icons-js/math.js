import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconMath({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-math" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 5h-7l-4 14l-3 -6h-2" /><Path d="M14 13l6 6" /><Path d="M14 19l6 -6" /></Svg>;
}
export default IconMath;