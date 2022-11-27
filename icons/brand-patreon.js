import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandPatreon({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-patreon" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3h3v18h-3z" /><Circle cx={15} cy={9.5} r={6.5} /></Svg>;
}
export default IconBrandPatreon;