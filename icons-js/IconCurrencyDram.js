import Svg, { Path } from 'react-native-svg';
         
function IconCurrencyDram({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-dram" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 10a6 6 0 1 1 12 0v10" /><Path d="M12 16h8" /><Path d="M12 12h8" /></Svg>;

}
export default IconCurrencyDram;
        