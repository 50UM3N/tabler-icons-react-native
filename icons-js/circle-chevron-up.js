import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconCircleChevronUp({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-chevron-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 13l3 -3l3 3" /><Circle cx={12} cy={12} r={9} /></Svg>;
}
export default IconCircleChevronUp;