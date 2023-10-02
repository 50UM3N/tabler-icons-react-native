import Svg, { Path } from 'react-native-svg';
         
function IconShoppingCartBolt({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-bolt" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M13.5 17h-7.5v-14h-2" /><Path d="M6 5l14 1l-.858 6.004m-2.642 .996h-10.5" /><Path d="M19 16l-2 3h4l-2 3" /></Svg>;

}
export default IconShoppingCartBolt;
        