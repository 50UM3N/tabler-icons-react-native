import Svg, { Path } from 'react-native-svg';
                    
function IconHttpQue({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-http-que" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" /><Path d="M6 15l1 1" /><Path d="M21 8h-4v8h4" /><Path d="M17 12h2.5" /><Path d="M10 8v6a2 2 0 1 0 4 0v-6" /></Svg>;

}
export default IconHttpQue;
                    