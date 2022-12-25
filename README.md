# Node.js starter template

เป็น template อย่างง่าย 🛠 ซึ่งตอนนี้อยู่ในขั้นตอนการพัฒนา

#### หากต้องการรัน code นี้
1. สร้างไฟล์ .env ใน directory ดูตัวอย่างได้จาก .env.sample จากนั้นนำ password จาก MongoDB Atlas มาใส่ใน `DB_PASS=<YOUR PASSWORD>` เช่น `DB_PASS=Test123`
2. รันคำสั่งใน terminal: yarn insatll
3. หากต้องการ run server: yarn start

----

### APIs
#### http://localhost:8081/.
1. /api/users POST request [Creating a new user]
2. /api/users GET request [Fetching the user list]
3. /api/users/:userId เช่น /api/users/6a1....... GET request [Fetch a single user]

