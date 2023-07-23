import Svg, { Path } from 'react-native-svg';
         
function IconCartDown({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cart-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M12.5 17h-6.5v-14h-2" /><Path d="M6 5l14 1l-.859 6.011m-2.641 .989h-10.5" /><Path d="M19 16v6" /><Path d="M22 19l-3 3l-3 -3" /></Svg>;

}
export default IconCartDown;
        