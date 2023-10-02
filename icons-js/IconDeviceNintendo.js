import Svg, { Path, Circle } from 'react-native-svg';
         
function IconDeviceNintendo({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-nintendo" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 20v-16h-3a4 4 0 0 0 -4 4v8a4 4 0 0 0 4 4h3z" /><Path d="M14 20v-16h3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-3z" /><Circle cx="17.5" cy="15.5" r="1" fill={color} /><Circle cx="6.5" cy="8.5" r="1" fill="currentColor" /></Svg>;

}
export default IconDeviceNintendo;
        