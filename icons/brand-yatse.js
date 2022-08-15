import Svg, { Path } from "react-native-svg";

function IconBrandYatse({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-yatse" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7.002 3l4.998 2.876v5.088l4.197 -2.73l4.803 2.731l-9.281 5.478l-2.383 1.41l-2.334 1.377l-3.002 1.77v-5.565l3.002 -1.771z" /></Svg>;
}

export default IconBrandYatse;