import Svg, { Path } from 'react-native-svg';
         
function IconBluetoothConnected({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bluetooth-connected" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 8l10 8l-5 4l0 -16l5 4l-10 8" /><Path d="M4 12l1 0" /><Path d="M18 12l1 0" /></Svg>;

}
export default IconBluetoothConnected;
        