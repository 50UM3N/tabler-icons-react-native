import Svg, { Path } from 'react-native-svg';
         
function IconShoppingCartCancel({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-cancel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M12 17h-6v-14h-2" /><Path d="M6 5l14 1l-.857 5.998m-3.643 1.002h-9.5" /><Path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M17 21l4 -4" /></Svg>;

}
export default IconShoppingCartCancel;
        