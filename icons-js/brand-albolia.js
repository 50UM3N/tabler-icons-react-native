import Svg, { Path, Rect, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandAlbolia({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-albolia" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={2} /><Path d="M11.5 7h1" /><Path d="M7.403 9.11l.707 -.706" /><Circle cx={12} cy={13} r={3.5} /><Path d="M12 12v1l.9 -.5z" /></Svg>;
}
export default IconBrandAlbolia;