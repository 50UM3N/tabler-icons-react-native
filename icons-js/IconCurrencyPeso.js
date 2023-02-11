import Svg, { Path } from 'react-native-svg';
                    
function IconCurrencyPeso({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-peso" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 19v-14h3.5a4.5 4.5 0 1 1 0 9h-3.5" /><Path d="M18 8h-12" /><Path d="M18 11h-12" /></Svg>;

}
export default IconCurrencyPeso;
                    