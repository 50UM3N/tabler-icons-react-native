import Svg, { Path } from "react-native-svg";

function IconArrowAutofitWidth({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-autofit-width" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" /><Path d="M10 18h-7" /><Path d="M21 18h-7" /><Path d="M6 15l-3 3l3 3" /><Path d="M18 15l3 3l-3 3" /></Svg>;
}

export default IconArrowAutofitWidth;