import Svg, { Path } from 'react-native-svg';
         
function IconScissors({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-scissors" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M8.6 8.6l10.4 10.4" /><Path d="M8.6 15.4l10.4 -10.4" /></Svg>;

}
export default IconScissors;
        