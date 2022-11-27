import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconMarkdown({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-markdown" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={5} width={18} height={14} rx={2} /><Path d="M7 15v-6l2 2l2 -2v6" /><Path d="M14 13l2 2l2 -2m-2 2v-6" /></Svg>;
}
export default IconMarkdown;