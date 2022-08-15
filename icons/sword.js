import Svg, { Path } from "react-native-svg";

function IconSword({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sword" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9z" /><Path d="M6.5 11.5l6 6" /></Svg>;
}

export default IconSword;