import Svg, { Path } from 'react-native-svg';
                    
function IconFileTextAi({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-text-ai" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 3v4a1 1 0 0 0 1 1h4" /><Path d="M10 21h-3a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v3.5" /><Path d="M9 9h1" /><Path d="M9 13h2.5" /><Path d="M9 17h1" /><Path d="M14 21v-4a2 2 0 1 1 4 0v4" /><Path d="M14 19h4" /><Path d="M21 15v6" /></Svg>;

}
export default IconFileTextAi;
                    