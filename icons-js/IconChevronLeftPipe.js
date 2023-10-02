import Svg, { Path } from 'react-native-svg';
         
function IconChevronLeftPipe({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left-pipe" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 6v12" /><Path d="M18 6l-6 6l6 6" /></Svg>;

}
export default IconChevronLeftPipe;
        