
let CommonPlugin = {
  getHistoryCity() {
    //获取localStorage中的历史访问城市
    let localCityHistory;
    let localCity = localStorage.getItem('localHistoryCity')

    if(localCity){
      localCityHistory = JSON.parse(localCity)
    } else {
      localCityHistory = []
    }
    return localCityHistory
  },
  selectedCity (city) {
    let localCities = this.getHistoryCity();
    if (localCities.length == 0) {
      localCities.push(city);
    } else {
      localCities.forEach((element, index) => {
        if (element.id == city.id) {
          localCities.splice(index,1);
        }
      });
    }
    if (localCities.length >= 3) {
      localCities.pop();
      localCities.unshift(city);
    } else {
      localCities.unshift(city);
    }
    localStorage.setItem("localHistoryCity", JSON.stringify(localCities))

    this.$store.commit('CHANGE_CURRENT_CITY', city)
    this.$router.goBack()
  }

};

const commonPlugin = {
  install: function (Vue, options) {
    for (var key in CommonPlugin) {
      Vue.prototype[key] = CommonPlugin[key]
    }
  }
};
export default commonPlugin
