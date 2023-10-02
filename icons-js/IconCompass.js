import Svg, { Path } from 'react-native-svg';
         
function IconCompass({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 16l2 -6l6 -2l-2 6l-6 2" /><Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><Path d="M12 3l0 2" /><Path d="M12 19l0 2" /><Path d="M3 12l2 0" /><Path d="M19 12l2 0" /></Svg>;

}
export default IconCompass;
        