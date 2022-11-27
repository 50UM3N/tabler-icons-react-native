import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandSuperhuman({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-superhuman" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 12l4 3l-8 7l-8 -7l4 -3" /><Path d="M12 3l-8 6l8 6l8 -6z" /><Path d="M12 15h8" /></Svg>;
}
export default IconBrandSuperhuman;