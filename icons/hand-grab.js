import Svg, { Path } from "react-native-svg";

function IconHandGrab({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hand-grab" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 11v-3.5a1.5 1.5 0 0 1 3 0v2.5" /><Path d="M11 9.5v-3a1.5 1.5 0 0 1 3 0v3.5" /><Path d="M14 7.5a1.5 1.5 0 0 1 3 0v2.5" /><Path d="M17 9.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" /></Svg>;
}

export default IconHandGrab;