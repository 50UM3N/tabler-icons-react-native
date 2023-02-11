import Svg, { Path } from 'react-native-svg';
                    
function IconFileShredder({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-shredder" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 3v4a1 1 0 0 0 1 1h4" /><Path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><Path d="M3 12l18 0" /><Path d="M6 16l0 2" /><Path d="M10 16l0 6" /><Path d="M14 16l0 2" /><Path d="M18 16l0 4" /></Svg>;

}
export default IconFileShredder;
                    