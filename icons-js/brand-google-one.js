import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandGoogleOne({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google-one" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 4.998v13.982a1.998 1.998 0 0 0 3.995 0v-13.982a1.998 1.998 0 1 0 -3.995 0z" /><Path d="M6.63 8.407a2.125 2.125 0 0 0 -.074 2.944c.77 .834 2.051 .869 2.862 .077l4.95 -4.834c.812 -.792 .846 -2.11 .076 -2.945a1.984 1.984 0 0 0 -2.861 -.077l-4.953 4.835z" /></Svg>;
}
export default IconBrandGoogleOne;