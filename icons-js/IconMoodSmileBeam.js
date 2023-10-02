import Svg, { Path } from 'react-native-svg';
         
function IconMoodSmileBeam({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-smile-beam" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" /><Path d="M10 10c-.5 -1 -2.5 -1 -3 0" /><Path d="M17 10c-.5 -1 -2.5 -1 -3 0" /><Path d="M14.5 15a3.5 3.5 0 0 1 -5 0" /></Svg>;

}
export default IconMoodSmileBeam;
        