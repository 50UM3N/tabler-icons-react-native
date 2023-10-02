import Svg, { Path } from 'react-native-svg';
         
function IconBasketShare({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-basket-share" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 10l-2 -6" /><Path d="M7 10l2 -6" /><Path d="M12.5 20h-5.256a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.478 2.723" /><Path d="M14 14a2 2 0 1 0 -2 2" /><Path d="M16 22l5 -5" /><Path d="M21 21.5v-4.5h-4.5" /></Svg>;

}
export default IconBasketShare;
        