import Svg, { Path } from 'react-native-svg';
         
function IconCurrencyEuro({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-euro" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17.2 7a6 7 0 1 0 0 10" /><Path d="M13 10h-8m0 4h8" /></Svg>;

}
export default IconCurrencyEuro;
        