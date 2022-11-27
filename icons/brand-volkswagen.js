import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandVolkswagen({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-volkswagen" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" /><Path d="M5 7l4.5 11l1.5 -5h2l1.5 5l4.5 -11" /><Path d="M9 4l2 6h2l2 -6" /></Svg>;
}
export default IconBrandVolkswagen;