import Svg, { Path } from 'react-native-svg';
                    
function IconCurrencyRipple({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-ripple" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M17 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M10 12h3l2 -2.5" /><Path d="M15 14.5l-2 -2.5" /></Svg>;

}
export default IconCurrencyRipple;
                    