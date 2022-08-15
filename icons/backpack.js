import Svg, { Path } from "react-native-svg";

function IconBackpack({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-backpack" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 7h2a6 6 0 0 1 6 6v6a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-6a6 6 0 0 1 6 -6z" /><Path d="M10 7v-1a2 2 0 1 1 4 0v1" /><Path d="M10 15h4" /></Svg>;
}

export default IconBackpack;