import Svg, { Path } from 'react-native-svg';
                    
function IconCurrencyKroneDanish({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-krone-danish" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 6v12" /><Path d="M5 12c3.5 0 6 -3 6 -6" /><Path d="M5 12c3.5 0 6 3 6 6" /><Path d="M15 10v8" /><Path d="M19 10a4 4 0 0 0 -4 4" /><Path d="M20 18.01v-.01" /></Svg>;

}
export default IconCurrencyKroneDanish;
                    