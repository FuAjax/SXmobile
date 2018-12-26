/*
    Created by name: "FuDi", Date:2018/11/16 ,Time:9:36
*/
let m = {

  handleScroll () {
    this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    if(this.scrollTop>500){
      this.goTopShow=true
    }else{
      this.goTopShow=false

    }
  },
  goTop(){
    let timer=null,_that=this;
    cancelAnimationFrame(timer)
    timer=requestAnimationFrame(function fn(){
      if(_that.scrollTop>0){
        _that.scrollTop-=50;
        document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
        timer=requestAnimationFrame(fn)
      }else {
        cancelAnimationFrame(timer);
        _that.goTopShow=false;
      }
    })
  }
}
export default m
