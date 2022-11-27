import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconSpider({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-spider" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 4v2l5 5" /><Path d="M2.5 9.5l1.5 1.5h6" /><Path d="M4 19v-2l6 -6" /><Path d="M19 4v2l-5 5" /><Path d="M21.5 9.5l-1.5 1.5h-6" /><Path d="M20 19v-2l-6 -6" /><Circle cx={12} cy={15} r={4} /><Circle cx={12} cy={9} r={2} /></Svg>;
}
export default IconSpider;