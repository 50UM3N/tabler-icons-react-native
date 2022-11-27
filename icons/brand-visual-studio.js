import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandVisualStudio({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-visual-studio" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 8l2 -1l10 13l4 -2v-12l-4 -2l-10 13l-2 -1z" /></Svg>;
}
export default IconBrandVisualStudio;