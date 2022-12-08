import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandZhihu({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-zhihu" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 6h6v12h-2l-2 2l-1 -2h-1z" /><Path d="M4 12h6.5" /><Path d="M10.5 6h-5" /><Path d="M6 4c-.5 2.5 -1.5 3.5 -2.5 4.5" /><Path d="M8 6v7c0 4.5 -2 5.5 -4 7" /><Path d="M11 18l-3 -5" /></Svg>;
}
export default IconBrandZhihu;