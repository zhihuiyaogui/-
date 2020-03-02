import { CHANGE_CURRENT_CITY, GET_HEADER_HEIGHT, SET_CITY_DATA, CHANGE_PATH_ROUTER } from './mutation-types'

const mutations = {
  [SET_CITY_DATA](state, payload) { //设置所有城市数据
    state.cityData = payload;
    return state.cityData;
  },
  [CHANGE_CURRENT_CITY](state, payload) { //设置当前选中城市
    state.currenyCity = payload;
    return state.currenyCity;
    },
    [GET_HEADER_HEIGHT](state, val) { //头部的高度
    state.headerHeight = val;
    return state.headerHeight;
  },
  [CHANGE_PATH_ROUTER](state, val) {  //设置登录后要跳转的路由
    state.pathRoute = val;
    return state.pathRoute;
  }
}
export default mutations;
