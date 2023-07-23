import Svg, { Path } from 'react-native-svg';
         
function IconPlayFootball({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-play-football" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><Path d="M3 17l5 1l.75 -1.5" /><Path d="M14 21v-4l-4 -3l1 -6" /><Path d="M6 12v-3l5 -1l3 3l3 1" /><Path d="M19.5 20a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill={color} /></Svg>;

}
export default IconPlayFootball;
        