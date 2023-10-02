import Svg, { Path } from 'react-native-svg';
         
function IconCurrencyYuan({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-yuan" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 19v-7l-5 -7" /><Path d="M17 5l-5 7" /><Path d="M8 13h8" /></Svg>;

}
export default IconCurrencyYuan;
        