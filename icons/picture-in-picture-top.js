import Svg, { Path, Rect } from "react-native-svg";

function IconPictureInPictureTop({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-picture-in-picture-top" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 5h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-4" /><Rect transform="matrix(1 0 0 -1 0 15)" x={14} y={5} width={7} height={5} rx={1} /></Svg>;
}

export default IconPictureInPictureTop;