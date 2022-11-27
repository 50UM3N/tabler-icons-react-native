import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconBrandBlogger({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-blogger" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 21h8a5 5 0 0 0 5 -5v-3a3 3 0 0 0 -3 -3h-1v-2a5 5 0 0 0 -5 -5h-4a5 5 0 0 0 -5 5v8a5 5 0 0 0 5 5z" /><Rect x={7} y={7} width={6} height={3} rx={1.5} /><Rect x={7} y={14} width={10} height={3} rx={1.5} /></Svg>;
}
export default IconBrandBlogger;