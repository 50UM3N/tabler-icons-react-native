import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconPlaceholder({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-placeholder" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 20.415a8 8 0 1 0 3 -15.415h-3" /><Path d="M13 8l-3 -3l3 -3" /><Path d="M7 17l4 -4l-4 -4l-4 4z" /></Svg>;
}
export default IconPlaceholder;