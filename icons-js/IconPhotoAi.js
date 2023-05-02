import Svg, { Path } from 'react-native-svg';
                    
function IconPhotoAi({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-ai" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 8h.01" /><Path d="M10 21h-4a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5" /><Path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l1 1" /><Path d="M14 21v-4a2 2 0 1 1 4 0v4" /><Path d="M14 19h4" /><Path d="M21 15v6" /></Svg>;

}
export default IconPhotoAi;
                    