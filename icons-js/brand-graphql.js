import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandGraphql({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-graphql" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5.308 7.265l5.385 -3.029" /><Path d="M13.308 4.235l5.384 3.03" /><Path d="M20 9.5v5" /><Path d="M18.693 16.736l-5.385 3.029" /><Path d="M10.692 19.765l-5.384 -3.03" /><Path d="M4 14.5v-5" /><Path d="M12.772 4.786l6.121 10.202" /><Path d="M18.5 16h-13" /><Path d="M5.107 14.988l6.122 -10.201" /><Circle cx={12} cy={3.5} r={1.5} /><Circle cx={12} cy={20.5} r={1.5} /><Circle cx={4} cy={8} r={1.5} /><Circle cx={4} cy={16} r={1.5} /><Circle cx={20} cy={16} r={1.5} /><Circle cx={20} cy={8} r={1.5} /></Svg>;
}
export default IconBrandGraphql;