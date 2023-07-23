import Svg, { Path } from 'react-native-svg';
         
function IconBasketCheck({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-basket-check" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 10l5 -6l5 6" /><Path d="M11 20h-4c-.966 .024 -1.807 -.817 -2 -2l-2 -8h18l-.755 3.018" /><Path d="M14 15a2 2 0 1 0 -2.42 1.956" /><Path d="M15 19l2 2l4 -4" /></Svg>;

}
export default IconBasketCheck;
        