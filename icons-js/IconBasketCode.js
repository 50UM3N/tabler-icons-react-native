import Svg, { Path } from 'react-native-svg';
         
function IconBasketCode({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-basket-code" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 10l5 -6l5 6" /><Path d="M11 20h-4c-.966 .024 -1.807 -.817 -2 -2l-2 -8h18l-.747 2.987" /><Path d="M13.927 14.464a2 2 0 1 0 -2.406 2.478" /><Path d="M20 21l2 -2l-2 -2" /><Path d="M17 17l-2 2l2 2" /></Svg>;

}
export default IconBasketCode;
        