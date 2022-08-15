import Svg, { Path } from "react-native-svg";

function IconMist({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mist" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 5h3m4 0h9" /><Path d="M3 10h11m4 0h1" /><Path d="M5 15h5m4 0h7" /><Path d="M3 20h9m4 0h3" /></Svg>;
}

export default IconMist;