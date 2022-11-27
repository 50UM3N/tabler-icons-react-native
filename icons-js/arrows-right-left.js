import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconArrowsRightLeft({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-right-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={21} y1={7} x2={3} y2={7} /><Path d="M18 10l3 -3l-3 -3" /><Path d="M6 20l-3 -3l3 -3" /><Line x1={3} y1={17} x2={21} y2={17} /></Svg>;
}
export default IconArrowsRightLeft;