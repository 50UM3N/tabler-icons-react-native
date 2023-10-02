import Svg, { Path } from 'react-native-svg';
         
function IconDevices2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-devices-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 15h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h6" /><Path d="M13 4m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" /><Path d="M7 19l3 0" /><Path d="M17 8l0 .01" /><Path d="M17 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M9 15l0 4" /></Svg>;

}
export default IconDevices2;
        