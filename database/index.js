const sqlite3 = require('sqlite3')
const express = require('express')
const cors = require('cors')
const res = require('express/lib/response')
const app = express()
app.disable('x-powered-by')
app.use(cors())

const PORT = 8000
let db = new sqlite3.Database('database.db', (err) => {
    if (!err) {
        db.run('CREATE TABLE tbl_about_myself (name text, email text)', (err2) => {
            if (!err2) {
                db.run(
                    "INSERT INTO tbl_about_myself (name, email) VALUES ('dduR','ym7596@naver.com')"
                )
            }
        })
        db.run('CREATE TABLE IF NOT EXISTS tbl_my_resume (date DATE, title TEXT, content TEXT, URL TEXT, UNIQUE(date, title))',
        (err2) => {
            if (!err2) {
                const resume = [
                    {
                        date: '1990-07-28',
                        title: '탄생',
                        content: 'IT악동 신용민 등장 짜쟌~',
                        URL: null,
                    },
                    {
                        date: '2018-01-30',
                        title: '첫직장',
                        content: 'Unity 3d 게임 프로그래밍 및 3D 애니메이션 제작 및 특수효과 및 랜더링 담당, 토몬카 제작',
                        URL: 'https://www.youtube.com/channel/UCsCu3VfJS8UsFjlWycQmMww',
                    },
                    {
                        date: '2021-03-15',
                        title: '한컴MDS',
                        content: 'RPA(Robotic Process Automation)이라는 새로운 장르/직무에 입사.',
                        URL: null,
                    }
                ]
                resume.forEach((item) => {
                    const query = `INSERT OR IGNORE INTO tbl_my_resume (date,title,content,URL) VALUES ('${item.date}', '${item.title}','${item.content}','${item.URL}')`
                    db.run(query)
                })
            }
        })
    }
})

app.listen(PORT, () => {
    console.log(`Listening...wait.... ${PORT}`)
})
app.get('/', (req, res, next) => {
    res.json({ rsp: 'ok' })
})

app.get('/db/about-me', (req, res, next) => {
    let result = {
        rsp: 'fail',
    }
    db.get('SELECT * FROM tbl_about_myself', (err, row) => {
        if(!err) {
            result.data = row
            db.all('SELECT *FROM tbl_my_resume ORDER BY date desc', (err2, rows) => {
                if (!err2) {
                    result.rsp = 'ok'
                    result.data.resume = rows
                    res.json(result)
                }
                else {
                    res.json(result)
                }
            })
        } 
        else {
            res.json(result)
        }
    })
    


    // db.get('SELECT * FROM tbl_about_myself', (err, row) => {
    //     if (!err) {
    //         result.data = row
    //         db.all('SELECT * FROM tbl_my_resume ORDER BY date desc', (err2, rows) => {
    //             if (!err2) {
    //                 result.rsp = 'ok'
    //                 result.data.resume = rows
    //                 res.json(result)
    //             } else {
    //                 res.json(result)
    //             }
    //         })
    //     } else {
    //         res.json(result)
    //     }
    // })
})