import Svg, { Path } from 'react-native-svg';
         
function IconDeviceGamepad3({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-gamepad-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 12l-3 -3h-2a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h2l3 -3z" /><Path d="M14 12l3 -3h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2l-3 -3z" /><Path d="M12 14l-3 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1 -1v-2l-3 -3z" /><Path d="M12 10l-3 -3v-2a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v2l-3 3z" /></Svg>;

}
export default IconDeviceGamepad3;
        