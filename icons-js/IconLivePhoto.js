import Svg, { Path } from 'react-native-svg';
         
function IconLivePhoto({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-live-photo" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /><Path d="M15.9 20.11l0 .01" /><Path d="M19.04 17.61l0 .01" /><Path d="M20.77 14l0 .01" /><Path d="M20.77 10l0 .01" /><Path d="M19.04 6.39l0 .01" /><Path d="M15.9 3.89l0 .01" /><Path d="M12 3l0 .01" /><Path d="M8.1 3.89l0 .01" /><Path d="M4.96 6.39l0 .01" /><Path d="M3.23 10l0 .01" /><Path d="M3.23 14l0 .01" /><Path d="M4.96 17.61l0 .01" /><Path d="M8.1 20.11l0 .01" /><Path d="M12 21l0 .01" /></Svg>;

}
export default IconLivePhoto;
        