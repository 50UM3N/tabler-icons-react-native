import Svg, { Path, Circle } from "react-native-svg";

function IconSunLow({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun-low" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={4} /><Path d="M4 12h.01" /><Path d="M12 4v.01" /><Path d="M20 12h.01" /><Path d="M12 20v.01" /><Path d="M6.31 6.31l-.01 -.01" /><Path d="M17.71 6.31l-.01 -.01" /><Path d="M17.7 17.7l.01 .01" /><Path d="M6.3 17.7l.01 .01" /></Svg>;
}

export default IconSunLow;