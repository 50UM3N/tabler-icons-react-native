import Svg, { Path } from 'react-native-svg';
         
function IconShoppingBagDiscount({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-bag-discount" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.416 2.7" /><Path d="M9 11v-5a3 3 0 0 1 6 0v5" /><Path d="M16 21l5 -5" /><Path d="M21 21v.01" /><Path d="M16 16v.01" /></Svg>;

}
export default IconShoppingBagDiscount;
        