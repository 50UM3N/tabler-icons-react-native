import Svg, { Path, Circle } from 'react-native-svg';
         
function IconDeviceAudioTape({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-audio-tape" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><Path d="M3 17l4 -3h10l4 3" /><Circle cx="7.5" cy="9.5" r=".5" fill={color} /><Circle cx="16.5" cy="9.5" r=".5" fill="currentColor" /></Svg>;

}
export default IconDeviceAudioTape;
        