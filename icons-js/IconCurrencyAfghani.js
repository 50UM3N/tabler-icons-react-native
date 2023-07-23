import Svg, { Path } from 'react-native-svg';
         
function IconCurrencyAfghani({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-afghani" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 13h-3.5a3.5 3.5 0 1 1 3.5 -3.5v6.5h-7" /><Path d="M12 3v.01" /><Path d="M12 19v2" /></Svg>;

}
export default IconCurrencyAfghani;
        