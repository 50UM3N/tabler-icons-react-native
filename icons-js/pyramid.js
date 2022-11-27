import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconPyramid({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pyramid" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 17l9 4l9 -4l-9 -14z" /><Path d="M12 3v18" /></Svg>;
}
export default IconPyramid;