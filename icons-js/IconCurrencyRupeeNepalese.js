import Svg, { Path } from 'react-native-svg';
                    
function IconCurrencyRupeeNepalese({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-rupee-nepalese" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 5h-11h3a4 4 0 1 1 0 8h-3l6 6" /><Path d="M21 17l-4.586 -4.414a2 2 0 0 0 -2.828 2.828l.707 .707" /></Svg>;

}
export default IconCurrencyRupeeNepalese;
                    