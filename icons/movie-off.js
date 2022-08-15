import Svg, { Path } from "react-native-svg";

function IconMovieOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-movie-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 4h10a2 2 0 0 1 2 2v10m-.592 3.42c-.362 .359 -.859 .58 -1.408 .58h-12a2 2 0 0 1 -2 -2v-12c0 -.539 .213 -1.028 .56 -1.388" /><Path d="M8 8v12" /><Path d="M16 4v8m0 4v4" /><Path d="M4 8h4" /><Path d="M4 16h4" /><Path d="M4 12h8m4 0h4" /><Path d="M16 8h4" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconMovieOff;