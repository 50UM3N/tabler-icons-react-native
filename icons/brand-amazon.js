import Svg, { Path } from "react-native-svg";

function IconBrandAmazon({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-amazon" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 6c.5 -2 2 -3 4.089 -3c2.441 .08 3.93 1.557 3.911 3.667v5.5c0 .903 1.04 1.833 2 1.833" /><Path d="M15 8.13c-14.133 -1.558 -6.545 11.61 0 2.82" /><Path d="M19.877 22l2.123 -4l-4 -1" /><Path d="M22 18.01c-3.05 1.966 -6.493 2.996 -9.993 2.99c-3.507 .006 -6.953 -1.027 -10.007 -3" /></Svg>;
}

export default IconBrandAmazon;