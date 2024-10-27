
export const upForm = {
    'row1': [
        {
            "name": "Тема",
            "type": "input",
            "required": true,
            "plusBtn": false,
            "searchBtn": false,
            "calendarBtn": false,
            "value" : '',
        },
        {
            "name": "Статус",
            "type": "input",
            "required": false,
            "plusBtn": false,
            "searchBtn": false,
            "calendarBtn": false,
            "value" : '',
        },
    ],
    'row2': [
        {
            "name": "Описание",
            "type": "input",
            "required": false,
            "plusBtn": false,
            "searchBtn": false,
            "calendarBtn": false,
            "value" : '',
        },
        {
            "name": "Продукт",
            "type": "input",
            "required": false,
            "plusBtn": false,
            "searchBtn": true,
            "calendarBtn": false,
            "value" : '',
        },
    ],
    'row3': [
        {
            "name": "Рабочие заметки",
            "type": "input",
            "required": true,
            "plusBtn": false,
            "searchBtn": false,
            "calendarBtn": false,
            "value" : '',
        },
        {
            "name": "Приоритет",
            "type": "input",
            "required": false,
            "plusBtn": false,
            "searchBtn": false,
            "calendarBtn": false,
            "value" : '',
        },
    ],
    'row4': [
        {
            "name": "Ответственный",
            "type": "select",
            "required": false,
            "plusBtn": true,
            "searchBtn": true,
            "calendarBtn": false,
            "value" : '',
            'people': [
                {
                    'name': 'Андрей Пивоваров',
                    'close': false
                },
            ]
        },
        {
            "name": "Группа",
            "type": "select",
            "required": false,
            "plusBtn": true,
            "searchBtn": true,
            "calendarBtn": false,
            "value" : '',
            'people': [
                {
                    'name': 'Андрей Пивоваров',
                    'close': false
                },
            ]
        },
    ],
}

export const downForm = {
    'row1': [
        {
            "name": "Когда открыто",
            "type": "input",
            "required": false,
            "plusBtn": false,
            "searchBtn": false,
            "calendarBtn": true,
            "value" : '22.10.2024',
        },
        {
            "name": "Когда создано",
            "type": "input",
            "required": false,
            "plusBtn": false,
            "searchBtn": false,
            "calendarBtn": true,
            "value" : '22.10.2024',
        },
    ],
    'row2': [
        {
            "name": "Кем открыто",
            "type": "select",
            "required": false,
            "plusBtn": true,
            "searchBtn": true,
            "calendarBtn": false,
            "value" : '',
            'people': [
                {
                    'name': 'Андрей Пивоваров',
                    'close': false
                },
    ]
        },
        {
            "name": "Кем создано",
            "type": "select",
            "required": false,
            "plusBtn": true,
            "searchBtn": true,
            "calendarBtn": false,
            "value" : '',
            'people': [
                {
                    'name': 'Андрей Пивоваров',
                    'close': false
                },
            ]
        },
    ],
}

export const input = {
            "name": "Продукт",
            "type": "input",
            "required": false,
            "plusBtn": false,
            "searchBtn": false,
            "calendarBtn": false,
            "value" : '',
}

export const selectForm = {
    "name": 'Согласующие',
    "plusBtn": true,
    "searchBtn": true,
    "calendarBtn": false,
    "required": false,
    'people': [
        {
            'name': 'Андрей Пивоваров',
            'close': true
        },
        {
            'name': 'Максим Галактионов',
            'close': true
        },
        {
            'name': 'Алла Лин',
            'close': true
        },
        {
            'name': 'Константин Константинопольский Константинович',
            'close': true
        },
        {
            'name': 'Игорь Иванченко',
            'close': true
        },
        {
            'name': 'Юлия Эйчаровна',
            'close': true
        },
        {
            'name': 'Артём Подпрыгайко-Саппортов',
            'close': true
        },
        {
            'name': 'Илья Вазнец',
            'close': true
        },
        {
            'name': 'Михаил Вортенов',
            'close': true
        },
        {
            'name': 'Наталья Нашевна',
            'close': true
        },
        {
            'name': 'Евгения Итамовна',
            'close': true
        },
        {
            'name': 'Алиса Киральчук',
            'close': true
        },
    ]
}

export const asideFolders = [
    {'name' : 'Моя работа'},
    {'name' : 'Структура портала'},
    {'name' : 'Личное расписание'},
    {'name' : 'Отсутствие на рабочем месте'},
    {'name' : 'Портфель услуг'},
    {'name' : 'Дашборды'},
    {'name' : 'Доски задач'},
    {'name' : 'Обращения'},
    {'name' : 'События'},
    {'name' : 'Инциденты'},
    {'name' : 'Проблемы'},
    {'name' : 'Настройка каталогов'},
    {'name' : 'Запросы на обслуживание'},
    {'name' : 'Запросы на изменение'},
    {'name' : 'Управление конфигурациями'},
    {'name' : 'Управление уровнем услуг'},
    {'name' : 'Настройка соответствий'},
]