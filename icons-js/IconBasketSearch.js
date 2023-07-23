import Svg, { Path } from 'react-native-svg';
         
function IconBasketSearch({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-basket-search" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 10l5 -6l5 6" /><Path d="M11.5 20h-4.5c-.966 .024 -1.807 -.817 -2 -2l-2 -8h18l-.387 1.546" /><Path d="M12.857 13.192a2 2 0 0 0 -1.798 3.573" /><Path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M20.2 20.2l1.8 1.8" /></Svg>;

}
export default IconBasketSearch;
        