import Svg, { Path } from 'react-native-svg';
                    
function IconCreditCardOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3l18 18" /><Path d="M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -.128 .87" /><Path d="M18.87 18.872a3 3 0 0 1 -.87 .128h-12a3 3 0 0 1 -3 -3v-8c0 -1.352 .894 -2.495 2.124 -2.87" /><Path d="M3 11l8 0" /><Path d="M15 11l6 0" /><Path d="M7 15l.01 0" /><Path d="M11 15l2 0" /></Svg>;

}
export default IconCreditCardOff;
                    