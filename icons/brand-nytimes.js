import Svg, { Path } from "react-native-svg";

function IconBrandNytimes({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-nytimes" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11.036 5.058a8.001 8.001 0 1 0 8.706 9.965" /><Path d="M12 21v-11l-7.5 4" /><Path d="M17.5 3a2.5 2.5 0 1 1 0 5l-11 -5a2.5 2.5 0 0 0 -.67 4.91" /><Path d="M9 12v8" /><Path d="M16 13h-.01" /></Svg>;
}

export default IconBrandNytimes;