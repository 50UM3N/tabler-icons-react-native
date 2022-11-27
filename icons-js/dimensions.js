import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconDimensions({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dimensions" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 5h11" /><Path d="M12 7l2 -2l-2 -2" /><Path d="M5 3l-2 2l2 2" /><Path d="M19 10v11" /><Path d="M17 19l2 2l2 -2" /><Path d="M21 12l-2 -2l-2 2" /><Rect x={3} y={10} width={11} height={11} rx={2} /></Svg>;
}
export default IconDimensions;