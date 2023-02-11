import Svg, { Path } from 'react-native-svg';
                    
function IconCurrencyBahraini({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-bahraini" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2 -2v-3" /><Path d="M7 19.01v-.01" /><Path d="M14 15.01v-.01" /><Path d="M17 15h2a2 2 0 0 0 1.649 -3.131l-2.653 -3.869" /></Svg>;

}
export default IconCurrencyBahraini;
                    