import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandVcypress({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-vcypress" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19.48 17.007a9 9 0 1 0 -7.48 3.993c.896 0 1.691 -.573 1.974 -1.423l3.526 -10.577" /><Path d="M13.5 9l2 6" /><Path d="M10.764 9.411a3 3 0 1 0 -.023 5.19" /></Svg>;
}
export default IconBrandVcypress;