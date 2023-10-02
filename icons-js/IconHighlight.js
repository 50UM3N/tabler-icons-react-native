import Svg, { Path } from 'react-native-svg';
         
function IconHighlight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-highlight" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><Path d="M12.5 5.5l4 4" /><Path d="M4.5 13.5l4 4" /><Path d="M21 15v4h-8l4 -4z" /></Svg>;

}
export default IconHighlight;
        