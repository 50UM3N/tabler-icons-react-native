import Svg, { Path } from "react-native-svg";

function IconTrademark({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trademark" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4.5 9h5m-2.5 0v6" /><Path d="M13 15v-6l3 4l3 -4v6" /></Svg>;
}

export default IconTrademark;