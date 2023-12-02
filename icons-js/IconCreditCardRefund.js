import Svg, { Path } from 'react-native-svg';
         
function IconCreditCardRefund({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card-refund" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" /><Path d="M3 10h18" /><Path d="M7 15h.01" /><Path d="M11 15h2" /><Path d="M16 19h6" /><Path d="M19 16l-3 3l3 3" /></Svg>;

}
export default IconCreditCardRefund;
        