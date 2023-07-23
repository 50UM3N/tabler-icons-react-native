import Svg, { Path } from 'react-native-svg';
         
function IconBasketDiscount({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-basket-discount" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 10l5 -6l5 6" /><Path d="M12 20h-5c-.966 .024 -1.807 -.817 -2 -2l-2 -8h18l-.644 2.577" /><Path d="M13.448 13.62a2 2 0 1 0 -.823 3.28" /><Path d="M16 21l5 -5" /><Path d="M21 21v.01" /><Path d="M16 16v.01" /></Svg>;

}
export default IconBasketDiscount;
        