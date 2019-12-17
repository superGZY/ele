var Mock = require("mockjs")
var express = require("express")
var router = express.Router();

router.use("/entries",function (req,res) {
    console.log(req.body);
    var Random = Mock.Random
    //调用mock方法模拟数据
    Random.extend({
        constellation: function(date) {
            let size = Math.ceil(Math.random() *3)
            let num = Math.floor(Math.random() * 9)
            var constellations = ['其他快餐','品质联盟','螺蛳粉','川湘菜','支持自取','烤冷面','面馆','黄焖鸡米饭','烧腊饭']
            return constellations.slice(num, num+size)
        },
        tags : function (params) {
            let size = Math.ceil(Math.random() *5)
            let num = Math.floor(Math.random() * 6)
            var constellations = [{
                'icon_name':'减',
                'tips':'满25减1，满35减3，满55减6'
            },
            {
                'icon_name':'折',
                'tips':'单品折扣'
            },
            {
                'icon_name':'首',
                'tips':'新用户下单立减6元'
            },
            {
                'icon_name':'新',
                'tips':'本店新用户立减1元'
            },
            {
                'icon_name':'特',
                'tips':'特价商品11元起'
            },
            {
                'icon_name':'保',
                'tips':'该商户食品安全已由国泰产险承担，食品安全有保障'
            }]
            return constellations.slice(num, num+size)
        }
    })
    var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|7': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1,
                'name':"@ctitle()",
                'image_path':"@image('130x130', '#ffcc33', '#FFF', 'png', '~')",
                'is_new':'@boolean(1, 9, true)',
                'recent_order_num':'@natural( 0, 9999 )',
                'rating':'@float( 0, 9,1,1 )',
                'support_tags':"@constellation()",
                'direction':'@natural( 0, 9999)',
                'time':'@natural( 0, 120)',
                'sendprice':'@natural( 0, 20)',
                'senddetail|1':["免费配送","4元起送","10元起送"],
                'tags':'@tags()',
            }]
        }
    );
    return res.json(data);
})

module.exports = router;