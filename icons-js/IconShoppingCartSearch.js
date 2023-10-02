import Svg, { Path } from 'react-native-svg';
         
function IconShoppingCartSearch({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-search" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M11 17h-5v-14h-2" /><Path d="M6 5l14 1l-.718 5.023m-6.282 1.977h-7" /><Path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M20.2 20.2l1.8 1.8" /></Svg>;

}
export default IconShoppingCartSearch;
        