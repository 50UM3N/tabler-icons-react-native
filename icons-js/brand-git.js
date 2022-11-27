import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandGit({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-git" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={16} cy={12} r={1} /><Circle cx={12} cy={8} r={1} /><Circle cx={12} cy={16} r={1} /><Path d="M12 15v-6" /><Path d="M15 11l-2 -2" /><Path d="M11 7l-1.9 -1.9" /><Path d="M10.5 20.4l-6.9 -6.9c-.781 -.781 -.781 -2.219 0 -3l6.9 -6.9c.781 -.781 2.219 -.781 3 0l6.9 6.9c.781 .781 .781 2.219 0 3l-6.9 6.9c-.781 .781 -2.219 .781 -3 0z" /></Svg>;
}
export default IconBrandGit;