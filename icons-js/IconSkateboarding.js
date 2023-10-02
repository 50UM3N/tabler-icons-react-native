import Svg, { Path } from 'react-native-svg';
         
function IconSkateboarding({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-skateboarding" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><Path d="M5.5 15h3.5l.75 -1.5" /><Path d="M14 19v-5l-2.5 -3l2.5 -4" /><Path d="M8 8l3 -1h4l1 3h3" /><Path d="M17.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill={color} /><Path d="M3 18c0 .552 .895 1 2 1h14c1.105 0 2 -.448 2 -1" /><Path d="M6.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill="currentColor" /></Svg>;

}
export default IconSkateboarding;
        