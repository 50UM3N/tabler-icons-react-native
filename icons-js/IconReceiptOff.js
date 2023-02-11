import Svg, { Path } from 'react-native-svg';
                    
function IconReceiptOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-receipt-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 21v-16m2 -2h10a2 2 0 0 1 2 2v10m0 4.01v1.99l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" /><Path d="M11 7l4 0" /><Path d="M9 11l2 0" /><Path d="M13 15l2 0" /><Path d="M15 11l0 .01" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconReceiptOff;
                    