import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconArrowUpRhombus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-rhombus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 16v-13" /><Path d="M15 6l-3 -3l-3 3" /><Path d="M14.5 18.5l-2.5 2.5l-2.5 -2.5l2.5 -2.5z" /></Svg>;
}
export default IconArrowUpRhombus;