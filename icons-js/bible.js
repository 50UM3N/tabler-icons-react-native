import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBible({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bible" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" /><Path d="M19 16h-12a2 2 0 0 0 -2 2" /><Path d="M12 7v6" /><Path d="M10 9h4" /></Svg>;
}
export default IconBible;