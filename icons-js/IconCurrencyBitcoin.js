import Svg, { Path } from 'react-native-svg';
         
function IconCurrencyBitcoin({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-bitcoin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" /><Path d="M8 6l0 12" /><Path d="M8 12l6 0" /><Path d="M9 3l0 3" /><Path d="M13 3l0 3" /><Path d="M9 18l0 3" /><Path d="M13 18l0 3" /></Svg>;

}
export default IconCurrencyBitcoin;
        