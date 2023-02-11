import Svg, { Path } from 'react-native-svg';
                    
function IconCurrencyDogecoin({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-dogecoin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 12h6" /><Path d="M9 6v12" /><Path d="M6 18h6a6 6 0 1 0 0 -12h-6" /></Svg>;

}
export default IconCurrencyDogecoin;
                    