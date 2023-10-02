import Svg, { Path } from 'react-native-svg';
         
function IconSpider({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spider" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 4v2l5 5" /><Path d="M2.5 9.5l1.5 1.5h6" /><Path d="M4 19v-2l6 -6" /><Path d="M19 4v2l-5 5" /><Path d="M21.5 9.5l-1.5 1.5h-6" /><Path d="M20 19v-2l-6 -6" /><Path d="M12 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><Path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></Svg>;

}
export default IconSpider;
        