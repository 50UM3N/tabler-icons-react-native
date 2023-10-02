import Svg, { Path } from 'react-native-svg';
         
function IconBasketCog({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-basket-cog" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 10l-2 -6" /><Path d="M7 10l2 -6" /><Path d="M12 20h-4.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.267 1.522" /><Path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><Path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M19.001 15.5v1.5" /><Path d="M19.001 21v1.5" /><Path d="M22.032 17.25l-1.299 .75" /><Path d="M17.27 20l-1.3 .75" /><Path d="M15.97 17.25l1.3 .75" /><Path d="M20.733 20l1.3 .75" /></Svg>;

}
export default IconBasketCog;
        