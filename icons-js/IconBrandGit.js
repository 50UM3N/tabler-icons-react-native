import Svg, { Path } from 'react-native-svg';
                    
function IconBrandGit({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-git" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M12 15v-6" /><Path d="M15 11l-2 -2" /><Path d="M11 7l-1.9 -1.9" /><Path d="M10.5 20.4l-6.9 -6.9c-.781 -.781 -.781 -2.219 0 -3l6.9 -6.9c.781 -.781 2.219 -.781 3 0l6.9 6.9c.781 .781 .781 2.219 0 3l-6.9 6.9c-.781 .781 -2.219 .781 -3 0z" /></Svg>;

}
export default IconBrandGit;
                    