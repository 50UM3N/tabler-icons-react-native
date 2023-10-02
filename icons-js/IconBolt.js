import Svg, { Path } from 'react-native-svg';
         
function IconBolt({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bolt" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" /></Svg>;

}
export default IconBolt;
        