import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandApplePodcast({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-apple-podcast" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18.364 18.364a9 9 0 1 0 -12.728 0" /><Path d="M11.766 22h.468a2 2 0 0 0 1.985 -1.752l.5 -4a2 2 0 0 0 -1.985 -2.248h-1.468a2 2 0 0 0 -1.985 2.248l.5 4a2 2 0 0 0 1.985 1.752z" /><Circle cx={12} cy={9} r={2} /></Svg>;
}
export default IconBrandApplePodcast;