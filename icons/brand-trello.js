import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconBrandTrello({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-trello" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={2} /><Path d="M7 7h3v10h-3z" /><Path d="M14 7h3v6h-3z" /></Svg>;
}
export default IconBrandTrello;