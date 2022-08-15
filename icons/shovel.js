import Svg, { Path } from "react-native-svg";

function IconShovel({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shovel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 4l3 3" /><Path d="M18.5 5.5l-8 8" /><Path d="M8.276 11.284l4.44 4.44a0.968 .968 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1 -5.809 -5.81l2.704 -2.703a0.968 .968 0 0 1 1.37 0z" /></Svg>;
}

export default IconShovel;