import Svg, { Path } from 'react-native-svg';
         
function IconCarSuv({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-car-suv" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M16 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M5 9l2 -4h7.438a2 2 0 0 1 1.94 1.515l.622 2.485h3a2 2 0 0 1 2 2v3" /><Path d="M10 9v-4" /><Path d="M2 7v4" /><Path d="M22.001 14.001a4.992 4.992 0 0 0 -4.001 -2.001a4.992 4.992 0 0 0 -4 2h-3a4.998 4.998 0 0 0 -8.003 .003" /><Path d="M5 12v-3h13" /></Svg>;

}
export default IconCarSuv;
        