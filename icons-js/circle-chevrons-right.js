import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconCircleChevronsRight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-chevrons-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 9l3 3l-3 3" /><Path d="M13 9l3 3l-3 3" /><Path d="M3 12a9 9 0 1 0 .004 -.265l-.004 .265z" /></Svg>;
}
export default IconCircleChevronsRight;