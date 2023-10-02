import Svg, { Path } from 'react-native-svg';
         
function IconFileTypePpt({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-type-ppt" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 3v4a1 1 0 0 0 1 1h4" /><Path d="M14 3v4a1 1 0 0 0 1 1h4" /><Path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" /><Path d="M11 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" /><Path d="M16.5 15h3" /><Path d="M18 15v6" /><Path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /></Svg>;

}
export default IconFileTypePpt;
        