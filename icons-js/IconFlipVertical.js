import Svg, { Path } from 'react-native-svg';
                    
function IconFlipVertical({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flip-vertical" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 3l0 18" /><Path d="M16 7l0 10l5 0l-5 -10" /><Path d="M8 7l0 10l-5 0l5 -10" /></Svg>;

}
export default IconFlipVertical;
                    