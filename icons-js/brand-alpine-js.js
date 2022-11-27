import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandAlpineJs({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-alpine-js" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 11.5l4.5 4.5h9l-9 -9z" /><Path d="M16.5 16l4.5 -4.5l-4.5 -4.5l-4.5 4.5" /></Svg>;
}
export default IconBrandAlpineJs;