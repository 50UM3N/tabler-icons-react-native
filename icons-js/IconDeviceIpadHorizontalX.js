import Svg, { Path } from 'react-native-svg';
                    
function IconDeviceIpadHorizontalX({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-ipad-horizontal-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13.5 20h-8.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" /><Path d="M22 22l-5 -5" /><Path d="M17 22l5 -5" /><Path d="M9 17h4" /></Svg>;

}
export default IconDeviceIpadHorizontalX;
                    