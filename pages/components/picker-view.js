// picker-view.js
Page({

  /**
   * 页面的初始数据
   */
  data: getData(),

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  pickerChange(event) {
    console.log("picker change", event, event.detail.value);
    var value = event.detail.value.slice(0);
    var cities, counties
    if(this.data.value[0] != value[0]){
      cities= this.data.provinces[value[0]].sub;
      value[1] = 0;
      this.setData({cities});
    }

    if(cities || this.data.value[1] != value[1]){
      counties = this.data.cities[value[1]].sub;
      value[2] = 0
      this.setData({ counties });
    }

    this.setData({value});
    console.log(value);
  }
})


function getData(){
  var provinces = getAddressOptions(),
      cities = provinces[0].sub,
      counties = cities[0].sub;

  return {
    provinces,
    cities,
    counties,
    value: []
  }
}


function getAddressOptions(){
  return [
    {
      "sub": [
        {
          "sub": [
            {
              "name": "密云区",
              "id": "110228"
            },
            {
              "name": "延庆区",
              "id": "110229"
            },
            {
              "name": "怀柔区",
              "id": "110116"
            },
            {
              "name": "平谷区",
              "id": "110117"
            },
            {
              "name": "门头沟区",
              "id": "110109"
            },
            {
              "name": "房山区",
              "id": "110111"
            },
            {
              "name": "海淀区",
              "id": "110108"
            },
            {
              "name": "昌平区",
              "id": "110114"
            },
            {
              "name": "丰台区",
              "id": "110106"
            },
            {
              "name": "通州区",
              "id": "110112"
            }
          ],
          "name": "北京市",
          "id": "110100"
        }
      ],
      "name": "北京",
      "id": "110000"
    },
    {
      "sub": [
        {
          "sub": [
            {
              "name": "蓟县",
              "id": "120225"
            }
          ],
          "name": "天津市",
          "id": "120100"
        }
      ],
      "name": "天津",
      "id": "120000"
    },
    {
      "sub": [
        {
          "sub": [
            {
              "name": "涞水县",
              "id": "130623"
            },
            {
              "name": "易县",
              "id": "130633"
            },
            {
              "name": "涞源县",
              "id": "130630"
            }
          ],
          "name": "保定市",
          "id": "130600"
        },
        {
          "sub": [
            {
              "name": "昌黎县",
              "id": "130322"
            }
          ],
          "name": "秦皇岛市",
          "id": "130300"
        },
        {
          "sub": [
            {
              "name": "沽源县",
              "id": "130724"
            },
            {
              "name": "怀来县",
              "id": "130730"
            }
          ],
          "name": "张家口市",
          "id": "130700"
        },
        {
          "sub": [
            {
              "name": "双桥区",
              "id": "130802"
            },
            {
              "name": "丰宁满族自治县",
              "id": "130826"
            }
          ],
          "name": "承德市",
          "id": "130800"
        }
      ],
      "name": "河北省",
      "id": "130000"
    },
    {
      "sub": [
        {
          "sub": [
            {
              "name": "吴中区",
              "id": "320506"
            },
            {
              "name": "昆山市",
              "id": "320583"
            }
          ],
          "name": "苏州市",
          "id": "320500"
        },
        {
          "sub": [
            {
              "name": "宜兴市",
              "id": "320282"
            }
          ],
          "name": "无锡市",
          "id": "320200"
        }
      ],
      "name": "江苏省",
      "id": "320000"
    },
    {
      "sub": [
        {
          "sub": [
            {
              "name": "长兴县",
              "id": "330522"
            }
          ],
          "name": "湖州市",
          "id": "330500"
        }
      ],
      "name": "浙江省",
      "id": "330000"
    },
    {
      "sub": [
        {
          "sub": [
            {
              "name": "林芝县",
              "id": "542621"
            }
          ],
          "name": "林芝地区",
          "id": "542600"
        }
      ],
      "name": "西藏自治区",
      "id": "540000"
    }
  ]
}