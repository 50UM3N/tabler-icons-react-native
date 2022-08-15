import Svg, { Path } from "react-native-svg";

function IconSoup({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-soup" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 19h18" /><Path d="M3 11h18a8 8 0 0 1 -8 8h-2a8 8 0 0 1 -8 -8z" /><Path d="M9 8v-3" /><Path d="M12 5v3" /><Path d="M15 5v3" /></Svg>;
}

export default IconSoup;