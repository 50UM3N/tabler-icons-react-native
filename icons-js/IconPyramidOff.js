import Svg, { Path } from 'react-native-svg';
         
function IconPyramidOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pyramid-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21.384 17.373a1.004 1.004 0 0 0 -.013 -1.091l-8.54 -13.836a.999 .999 0 0 0 -1.664 0l-1.8 2.917m-1.531 2.48l-5.209 8.439a1.005 1.005 0 0 0 .386 1.452l8.092 4.054a1.994 1.994 0 0 0 1.789 0l5.903 -2.958" /><Path d="M12 2v6m0 4v10" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconPyramidOff;
        