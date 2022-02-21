const TYPE =  require('./type.js')

function fn_about_me(db) {
	db.run(
		'CREATE TABLE IF NOT EXISTS tbl_about_myself (name TEXT , email TEXT, UNIQUE(name, email))',
		(err) => {
			if (!err) {
				db.run("INSERT OR IGNORE INTO tbl_about_myself (name,email) VALUES ('dduR','ym7596@naver.com')")
			}
		}
	)
}


function fn_resume(db) {
db.run(
	'CREATE TABLE IF NOT EXISTS tbl_my_resume (date DATE, title TEXT, content TEXT, url TEXT, UNIQUE(date, title))',
	(err) => {
		if (!err) {
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
					date: '2020-05-10',
					title: '스마트팩토리 국비교육 6개월',
					content: '파이썬, 플라스크,자바등 기본교육 후 스마트팩토리 프로젝트 제작 (클라이언트 담당)',
					URL: 'https://www.youtube.com/watch?v=A4lrnlOoJgg',
				},
				{
					date: '2021-03-15',
					title: '한컴MDS',
					content: 'RPA(Robotic Process Automation)이라는 새로운 장르/직무에 입사.',
					URL: null,
				}
			]
			resume.forEach((item) => {
				const query = `INSERT OR IGNORE INTO tbl_my_resume(date,title,content,url) VALUES ('${item.date}','${item.title}','${item.content}','${item.URL}')`
				db.run(query)
			})
		}
	}
)
}

function fn_applications(db) {
	db.run(
		'CREATE TABLE IF NOT EXISTS tbl_applications (id INT, name TEXT , content TEXT, date DATE, platform TEXT, url TEXT, image TEXT, UNIQUE(name,date))',
		(err) => {
			if (!err) {
				const applications = [
					{
						id: 1,
						name: '도랏맨1 : 급식충의 반란',
						content:
						'매우 간단한 게임 제작의 간단한 과정을 보여주기 위해 제작하였던 게임, 블로그에 포스팅을 하기 위하여 제작을 하였으며 현재 원스토어에 올라가있음',
						date: '2016.10.04',
						platform: 'Android',
						url: 'https://m.onestore.co.kr/mobilepoc/apps/appsDetail.omp?prodId=0000706254&scYn=Y',
						image: 'http://localhost:8000/assets/dorat.jpg',
					},
					{
						id: 2,
						name: '토몬카',
						content:
						'토몬카 애니메이션 유튜브용 제작, UNITY 3D 를 사용한 랜더링과 특수효과 카메라 효과등을 겸하면서 애니메이션 제작을 하였음',
						date: '2019.10.01',
						platform: 'Youtube',
						url: 'https://www.youtube.com/channel/UCsCu3VfJS8UsFjlWycQmMww',
						image: 'http://localhost:8000/assets/tomoncar.jpg',
					},
				]

				applications.forEach((item) => {
					const query = `INSERT OR IGNORE INTO tbl_applications (id, name, content, date, platform, url, image) VALUES (${item.id}, '${item.name}','${item.content}',
					'${item.date}','${item.platform}','${item.url}','${item.image}')`
					db.run(query)
				})
			}
		}
	)
}

function fn_notification(db) {
	db.run(
		"CREATE TABLE IF NOT EXISTS tbl_notification (id INTEGER PRIMARY KEY AUTOINCREMENT, content TEXT, expiration DATE, type TEXT)",
		(err) => {
			if (!err) {
				let query = "DELETE from tbl_notification";
				db.run(query);

				query = `INSERT INTO tbl_notification (content, expiration, type) VALUES ('사이트 재단장 중입니다 :) 일부 사용에 제한이 있을 수 있습니다.','2099-12-31','warning')`;
				db.run(query);
			}
		}
	);

}
module.exports.run = function (db, type) {
	if (type == TYPE.about_me) {
		fn_about_me(db)

	}
	else if(type == TYPE.resume) {
		fn_resume(db)
	}
	else if(type == TYPE.applications) {
		fn_applications(db)
	}
	else if(type == TYPE.notification) {
		fn_notification(db)
	}
}