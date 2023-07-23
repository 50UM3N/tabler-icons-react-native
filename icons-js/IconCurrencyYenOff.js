import Svg, { Path } from 'react-native-svg';
         
function IconCurrencyYenOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-yen-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 19v-7m5 -7l-3.328 4.66" /><Path d="M8 17h8" /><Path d="M8 13h5" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconCurrencyYenOff;
        