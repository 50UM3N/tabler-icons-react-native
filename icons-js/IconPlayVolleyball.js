import Svg, { Path } from 'react-native-svg';
         
function IconPlayVolleyball({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-play-volleyball" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><Path d="M20.5 10a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill={color} /><Path d="M2 16l5 1l.5 -2.5" /><Path d="M11.5 21l2.5 -5.5l-5.5 -3.5l3.5 -4l3 4l4 2" /></Svg>;

}
export default IconPlayVolleyball;
        