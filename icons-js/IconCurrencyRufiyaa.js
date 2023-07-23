import Svg, { Path } from 'react-native-svg';
         
function IconCurrencyRufiyaa({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-rufiyaa" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 16h.01" /><Path d="M4 16c9.5 -4 11.5 -8 14 -9" /><Path d="M12 8l5 3" /></Svg>;

}
export default IconCurrencyRufiyaa;
        