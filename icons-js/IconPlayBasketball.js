import Svg, { Path } from 'react-native-svg';
         
function IconPlayBasketball({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-play-basketball" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><Path d="M5 21l3 -3l.75 -1.5" /><Path d="M14 21v-4l-4 -3l.5 -6" /><Path d="M5 12l1 -3l4.5 -1l3.5 3l4 1" /><Path d="M18.5 16a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill={color} /></Svg>;

}
export default IconPlayBasketball;
        