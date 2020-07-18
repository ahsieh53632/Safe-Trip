# Safe-Trip: 放心出遊!:
### English version README: check README_eng.md
免安裝, 不論出遊還是搭Uber 只需透過手機內建相機掃描QRCODE就能隨時確保自己遠離疫情


# Description
不須下載任何app, 只需要註冊一次帳號, 即可透過手機內建相機掃描QRCODE, 隨時記錄所到之處, 也可在搭乘Uber, 住宿AirBnb, 出遊, <br/>
或跟別人見面時確保對方並沒有接觸過或出現過患者, 放心享受旅遊/與人互動的當下順便保護自己遠離Covid-19

# Built With
前端使用 React.js, 後端使用 Node.js + MySQL, 也使用Gatsby創建React app


# Structure
###### BackEnd: /api <br/>
###### Everything else: front end/gatsby stuff

# Pre-req/installation guide
Node.js <br/>
安裝Dependicies:
 `npm install`
 ## BackEnd config:
此project 的backend server 架設在 localhost 上面, 需要安裝Mysql, 手動設置connection 並跑 /api/create_db.sql 來創建需要的table <br />
`Table: person, beento, encounter, location` <br/>
跑server: <br/>
`gatsby develop` <br />
跑api: <br/>
進到api folder <br/>
`npm install` <br/>
`npm start`

# Functinoality:
  - Login/Register: 第一次使用需要註冊帳號 (api 要有運作), 之後便會自己登入
  - 掃描QRCODE: 不須開啟網頁或安裝App, 使用手機相機掃描特定格式QRCODE後 會自動call api 並update 資料
    - ###### 因DB設在localhost 上面, 如需測試請參考下面
    - 人/Uber: 會告知你這個人或Uber司機是否最近接觸過染病人士, 並記錄雙方的接觸
    - 景點: 會記錄你在今天去過這個位置
  - AtRisk: 顯示最近去的地方有沒有出現疫情或見過的人有沒有生病 (不會顯示染病者個人資訊)
  - MyQRCODE: 生成個人的QRCODE 讓人掃描, 店家或景點也可以生成自己的QRCODE
    - ###### 註: 得到肺炎與否透過醫生端QRCODE update 無法透過網站更新
  - UpdateInfo: 更新個人資料 (名字, 電話, 地址等)
  - AddID: 無法掃描QRCODE 情況下手動更新到Database
    - ###### 註: 目前只有前端 連結api 部分沒有做
  - Alert: 若最近有接觸過疫情, 會在MainPage 顯示一個提醒 (ICON)
  - MainPage: 主頁面
  - ViewInfo: 檢視個人資料

# Test QRCODE api calls locally:
## 人與人見面 (or Uber, AirBnb):
 - 前往 /scanCode?info={"type": "encounter", "otherpersonid": "接觸人帳號", "locationid": "位置id (在資料庫上的location)", "date": "日期"}
## 景點:
 - 前往 /scanCode?info={"type": "beento", "locationid": "位置id (在資料庫上的location)", "date": "日期"}

