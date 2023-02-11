import Svg, { Path } from 'react-native-svg';
                    
function IconFileOrientation({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-orientation" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 3v4a1 1 0 0 0 1 1h4" /><Path d="M10 21h-3a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v2" /><Path d="M13 20h5a2 2 0 0 0 2 -2v-5" /><Path d="M15 22l-2 -2l2 -2" /><Path d="M18 15l2 -2l2 2" /></Svg>;

}
export default IconFileOrientation;
                    