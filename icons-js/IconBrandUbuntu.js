import Svg, { Path } from 'react-native-svg';
         
function IconBrandUbuntu({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-ubuntu" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M17.723 7.41a7.992 7.992 0 0 0 -3.74 -2.162m-3.971 0a7.993 7.993 0 0 0 -3.789 2.216m-1.881 3.215a8 8 0 0 0 -.342 2.32c0 .738 .1 1.453 .287 2.132m1.96 3.428a7.993 7.993 0 0 0 3.759 2.19m4 0a7.993 7.993 0 0 0 3.747 -2.186m1.962 -3.43a8.008 8.008 0 0 0 .287 -2.131c0 -.764 -.107 -1.503 -.307 -2.203" /><Path d="M5 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M19 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></Svg>;

}
export default IconBrandUbuntu;
        