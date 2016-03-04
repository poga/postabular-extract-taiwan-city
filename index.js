"use strict"

let postabular = require("postabular")
let _ = require("lodash")

let cities = ["臺北市", "新北市", "桃園市", "臺中市", "臺南市", "高雄市", "基隆市", "新竹市", "嘉義市", "新竹縣", "苗栗縣", "彰化縣", "南投縣", "雲林縣", "嘉義縣", "屏東縣", "宜蘭縣", "花蓮縣", "臺東縣", "澎湖縣", "金門縣", "連江縣"]

module.exports = postabular.plugin('column-type', function(tabular, result) {
    result.header = tabular.header
    tabular.eachColumn((col, colIdx) => {
        let replacedCount = 0
        let replaced = []
        col.eachCell((cell) => {
            let cellReplaced = false
            for(let i =0; i < cities.length; i++) {
                if (`${cell.value}`.indexOf(cities[i]) != -1) {
                    replaced.push(cities[i])
                    replacedCount+=1
                    cellReplaced = true
                    break
                }
            }
            if (!cellReplaced) { replaced.push(cell.value) }
        })
        result.insertColumnAfter(colIdx, replaced)
    })
})
