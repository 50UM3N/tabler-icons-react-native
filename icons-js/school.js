import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconSchool({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-school" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" /><Path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" /></Svg>;
}
export default IconSchool;