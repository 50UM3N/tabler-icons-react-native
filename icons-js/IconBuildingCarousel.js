import Svg, { Path } from 'react-native-svg';
         
function IconBuildingCarousel({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-carousel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" /><Path d="M5 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M19 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M5 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M19 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M8 22l4 -10l4 10" /></Svg>;

}
export default IconBuildingCarousel;
        