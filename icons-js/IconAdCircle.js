import Svg, { Path } from 'react-native-svg';
         
function IconAdCircle({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ad-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0" /><Path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" /><Path d="M7 13h3" /><Path d="M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" /></Svg>;

}
export default IconAdCircle;
        