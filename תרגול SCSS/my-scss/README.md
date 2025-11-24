מורידים
npm install node-sass

להוסיף בסקירפט ב package json את
"scripts": {
"compile:sass": "sass src/sass/Home.module.scss src/Pages/Home/Home.module.css"
}
#לא לשכוח להשים את הנתיב המתאים לכל תיקיה לפי ה scss שלה

ובדב להוסיף:
"devDependencies": {
"node-sass": "^9.0.0"
}

לאחר מכן להריץ
npm run compile:sass
כשאנחנו מכוונים על תיקית הפרוייקט

אם רוצים שירוץ בכל שינוי עושים
"compile:sass": "sass src/sass/Home.module.scss src/Pages/Home/Home.module.css -w"
