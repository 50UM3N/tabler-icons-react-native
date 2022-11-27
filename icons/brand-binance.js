import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandBinance({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-binance" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 8l2 2l4 -4l4 4l2 -2l-6 -6z" /><Path d="M6 16l2 -2l4 4l3.5 -3.5l2 2l-5.5 5.5z" /><Path d="M20 10l1.997 2.001l-1.997 1.999l-2 -2z" /><Path d="M4 10l2 2l-2 2l-2 -2z" /><Path d="M12 10l2 2l-2 2l-2 -2z" /></Svg>;
}
export default IconBrandBinance;