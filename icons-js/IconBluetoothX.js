import Svg, { Path } from 'react-native-svg';
                    
function IconBluetoothX({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bluetooth-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 8l10 8l-5 4v-16l1 .802m0 6.396l-6 4.802" /><Path d="M16 6l4 4" /><Path d="M20 6l-4 4" /></Svg>;

}
export default IconBluetoothX;
                    