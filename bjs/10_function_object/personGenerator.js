const personGenerator = {
	surnameJson: `{  
		"count": 15,
		"list": {
			"id_1": "Иванов",
			"id_2": "Смирнов",
			"id_3": "Кузнецов",
			"id_4": "Васильев",
			"id_5": "Петров",
			"id_6": "Михайлов",
			"id_7": "Новиков",
			"id_8": "Федоров",
			"id_9": "Кравцов",
			"id_10": "Николаев",
			"id_11": "Семёнов",
			"id_12": "Славин",
			"id_13": "Степанов",
			"id_14": "Павлов",
			"id_15": "Александров",
			"id_16": "Морозов"
		}
	}`,
	firstNameMaleJson: `{
		"count": 10,
		"list": {     
			"id_1": "Александр",
			"id_2": "Максим",
			"id_3": "Иван",
			"id_4": "Артем",
			"id_5": "Дмитрий",
			"id_6": "Никита",
			"id_7": "Михаил",
			"id_8": "Даниил",
			"id_9": "Егор",
			"id_10": "Андрей"
		}
	}`,
	firstNameFemaleJson: `{
		"count": 10,
		"list": {     
			"id_1": "Мелисса",
			"id_2": "Анна",
			"id_3": "Полина",
			"id_4": "Алиса",
			"id_5": "Мария",
			"id_6": "Диана",
			"id_7": "Татьяна",
			"id_8": "Валентина",
			"id_9": "Елена",
			"id_10": "Екатерина"
		}
	}`,

	patronymicJson: `{
		"count": 10,
		"list": {     
			"id_1": "Александров",
			"id_2": "Борисов",
			"id_3": "Вадимов",
			"id_4": "Данилов",
			"id_5": "Егоров",
			"id_6": "Игорев",
			"id_7": "Кириллов",
			"id_8": "Олегов",
			"id_9": "Павлов",
			"id_10": "Иванов"
		}
	}`,

// профессии задаем двух типов, только мужские, и все остальные
	professionJson: `{
		"unisex": {
			"count": 10,
			"list": {     
				"id_1": "бармен",
				"id_2": "администратор",
				"id_3": "бухгалтер",
				"id_4": "менеджер",
				"id_5": "врач",
				"id_6": "учитель",
				"id_7": "юрист",
				"id_8": "экономист",
				"id_9": "актёр",
				"id_10": "повар"
			}
		},
		"male": {
			"count": 5,
			"list": {     
				"id_1": "слесарь",
				"id_2": "солдат",
				"id_3": "машинист",
				"id_4": "шахтёр",
				"id_5": "фрезеровщик"
			}
		}
	}`,

// задаем месяцы по номерам, и количество дней в месяце
	month: `{
		"1": {
			"name": "январь",
			"days": 31
		},
		"2": {
			"name": "февраль",
			"days": 28
		},
		"3": {
			"name": "март",
			"days":31
		},
		"4": {
			"name": "апрель",
			"days": 30
		},
		"5": {
			"name": "май",
			"days": 31
		},
		"6": {
			"name": "июнь",
			"days": 30
		},
		"7": {
			"name": "июль",
			"days": 31
		},
		"8": {
			"name": "август",
			"days": 31
		},
		"9": {
			"name": "сентябрь",
			"days": 30
		},
		"10": {
			"name": "октябрь",
			"days": 31
		},
		"11": {
			"name": "ноябрь",
			"days": 30
		},
		"12": {
			"name": "декабрь",
			"days": 31
		}
	}`,

	GENDER_MALE: 'Мужчина',
	GENDER_FEMALE: 'Женщина',

	randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

	randomValue: function (json) {
		const obj = JSON.parse(json);
		const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
		return obj.list[prop];
	},

// выбираем имя в зависимости от пола
	randomFirstName: function(isMale) {
		if (isMale) {
			return this.randomValue(this.firstNameMaleJson);
		} else {
		   return this.randomValue(this.firstNameFemaleJson); 
		}

	},

// выбираем фамилию
	randomSurname: function() {

		return this.randomValue(this.surnameJson);

	},

// выбираем отчество
	randomPatronymic: function() {

		return this.randomValue(this.patronymicJson);

	},

// выбираем профессию
	randomProfession: function(isMale) {
		const obj = JSON.parse(this.professionJson);
		if (isMale) {
			let i = this.randomIntNumber(obj.unisex.count + obj.male.count, 1);
			// i - номер варианта профессии, если больше obj.unisex.count берем из списка "мужских" профессий
			if (i > obj.unisex.count) {
				const prop = `id_${i - obj.unisex.count}`;
				return obj.male.list[prop];
			} else {
				const prop = `id_${i}`;
				return obj.unisex.list[prop];
			}
		} else {
			const prop = `id_${this.randomIntNumber(obj.unisex.count, 1)}`;
			return obj.unisex.list[prop];
		}

	},

// выводит дату рождения
	randonBirthday: function () {
		let year = this.randomIntNumber(2021, 1921);
		const obj = JSON.parse(this.month);
		let monthNum = this.randomIntNumber(12, 1);
		let month = obj[monthNum].name;
		let day = this.randomIntNumber(obj[monthNum.toString()]["days"], 1);
		return `${day} ${month} ${year}`
	},


	getPerson: function () {
		this.person = {};
		this.person.birthday = this.randonBirthday();
		// выбираем пол (1 - мужчина, 0 - женщина)
		let gender = this.randomIntNumber();
		this.person.firstName = this.randomFirstName(gender);
		this.person.profession = this.randomProfession(gender);
		if (gender) {
			this.person.gender = this.GENDER_MALE;
			this.person.surname = this.randomSurname();
			this.person.patronymic = (this.randomPatronymic() + 'ич');
		} else {
			this.person.gender = this.GENDER_FEMALE;
			this.person.surname = (this.randomSurname() + 'а');
			this.person.patronymic = (this.randomPatronymic() + 'на');
		}
		return this.person;
	}
};
