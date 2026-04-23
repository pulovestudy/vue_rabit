//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin={
  install(app){
//懒加载指令逻辑
    //定义全局指令，可以去vue官网查看
    app.directive('img-lazy', {
      mounted(el, binding) {
        //el:指令绑定的那个元素（这里指的就是图片）
        //binding:指令对象 有个很常用的属性binding.value，即指令等号后面绑定的表达式的值（这里指的图片的url）
        const {stop}=useIntersectionObserver(
          el,
          ([entry]) => {//entry是监听目标的状态对象
            if (entry.isIntersecting)//entry.isIntersecting表示是否进入可视区域
            {
              el.src = binding.value
              stop()
            }
          },
        )
      }
    })
  }
}