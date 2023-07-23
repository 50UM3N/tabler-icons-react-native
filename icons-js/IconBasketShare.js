import Svg, { Path } from 'react-native-svg';
         
function IconBasketShare({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-basket-share" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 10l5 -6l5 6" /><Path d="M12.5 20h-5.5c-.966 .024 -1.807 -.817 -2 -2l-2 -8h18l-.75 2.998" /><Path d="M13.782 14.092a2 2 0 1 0 -1.3 2.85" /><Path d="M16 22l5 -5" /><Path d="M21 21.5v-4.5h-4.5" /></Svg>;

}
export default IconBasketShare;
        