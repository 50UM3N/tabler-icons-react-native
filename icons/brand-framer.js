import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandFramer({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-framer" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 15h12l-12 -12h12v6h-12v6l6 6v-6" /></Svg>;
}
export default IconBrandFramer;