import Svg, { Path } from 'react-native-svg';
         
function IconFileTypePng({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-type-png" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 3v4a1 1 0 0 0 1 1h4" /><Path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><Path d="M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3" /><Path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" /><Path d="M11 21v-6l3 6v-6" /></Svg>;

}
export default IconFileTypePng;
        