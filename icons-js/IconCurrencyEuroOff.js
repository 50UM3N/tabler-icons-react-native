import Svg, { Path } from 'react-native-svg';
                    
function IconCurrencyEuroOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-euro-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17.2 7c-1.977 -2.26 -4.954 -2.602 -7.234 -1.04m-1.913 2.079c-1.604 2.72 -1.374 6.469 .69 8.894c2.292 2.691 6 2.758 8.356 .18" /><Path d="M10 10h-5m0 4h8" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconCurrencyEuroOff;
                    