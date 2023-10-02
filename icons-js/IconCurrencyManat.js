import Svg, { Path } from 'react-native-svg';
         
function IconCurrencyManat({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-manat" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 19v-7a5 5 0 1 1 10 0v7" /><Path d="M12 5v14" /></Svg>;

}
export default IconCurrencyManat;
        