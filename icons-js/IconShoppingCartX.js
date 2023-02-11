import Svg, { Path } from 'react-native-svg';
                    
function IconShoppingCartX({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M17 17h-11v-14h-2" /><Path d="M6 5l8 .571m5.43 4.43l-.429 3h-13" /><Path d="M17 3l4 4" /><Path d="M21 3l-4 4" /></Svg>;

}
export default IconShoppingCartX;
                    