import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconPrison({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-prison" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 4v16" /><Path d="M14 4v16" /><Path d="M6 4v5" /><Path d="M6 15v5" /><Path d="M10 4v5" /><Path d="M11 9h-6v6h6z" /><Path d="M10 15v5" /><Path d="M8 12h-.01" /></Svg>;
}
export default IconPrison;