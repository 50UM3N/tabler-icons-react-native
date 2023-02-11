import Svg, { Path } from 'react-native-svg';
                    
function IconSlideshow({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-slideshow" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 6l.01 0" /><Path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><Path d="M3 13l4 -4a3 5 0 0 1 3 0l4 4" /><Path d="M13 12l2 -2a3 5 0 0 1 3 0l3 3" /><Path d="M8 21l.01 0" /><Path d="M12 21l.01 0" /><Path d="M16 21l.01 0" /></Svg>;

}
export default IconSlideshow;
                    