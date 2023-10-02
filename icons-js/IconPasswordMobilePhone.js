import Svg, { Path } from 'react-native-svg';
         
function IconPasswordMobilePhone({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-password-mobile-phone" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 17v4" /><Path d="M10 20l4 -2" /><Path d="M10 18l4 2" /><Path d="M5 17v4" /><Path d="M3 20l4 -2" /><Path d="M3 18l4 2" /><Path d="M19 17v4" /><Path d="M17 20l4 -2" /><Path d="M17 18l4 2" /><Path d="M7 14v-8a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v8" /><Path d="M11 5h2" /><Path d="M12 17v.01" /></Svg>;

}
export default IconPasswordMobilePhone;
        