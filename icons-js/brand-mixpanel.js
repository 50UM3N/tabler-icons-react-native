import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandMixpanel({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-mixpanel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={4.5} cy={12} r={2.5} /><Circle cx={20.5} cy={12} r={1.5} /><Circle cx={13} cy={12} r={2} /></Svg>;
}
export default IconBrandMixpanel;