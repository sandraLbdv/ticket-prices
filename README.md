# TicketPrices
https://ticket-prices.vercel.app/

## FAQ
**Q**: Какова структура приложения?

**A**: Работа приложения построена на двух компонентах: родительском и дочернем.
<br/>
Родительский компонент PassengerFormComponent:
- содержит в себе форму
- передает данные формы в дочерний компонент
<br/>

Дочерний компонент CostInfoComponent:
- рендерится отдельно для каждого перевозчика
- содержит в себе информацию о стоимости билетов
<br/>

**Q**: Где находятся данные, поставляемые компонентам?

**A**: В tariffs.service. Данные по тарифам и общие функции по вычислению стоимости билетов вынесены из самих компонентов в сервис.
<br/>
<br/>

**Q**: Как насчет тестов?

**A**: Помимо встроенных тестов написаны тесты для функции по вычислению стоимости билетов. Посмотреть их можно в tariffs.service.spec
<br/>
<br/>

**Q**: Зачем здесь нужны миксины?

**A**: Чтобы применять разные стили в зависимости от ориентации устройства
<br/>
<br/>

**Q**: Что было бы, если бы на задание давалось больше времени?

**A**: 
- Качественные тесты! Это мои первые тесты на Angular и мне хотелось бы узнать о них больше (и писать их лучше)
- CI с запуском тестов. Почему Github Actions не работает с этим приложением так, как должен? Об этом я узнаю, когда будет свободное время.
- Ограничение ввода в Firefox. Почему Firefox дает вводить цифры в input с типом number, а Firefox - нет? 
<br/>
<br/>

**Q**: Что-то не так с использованием TypeScript. Почему?

**A**: Потому что что-то не так с моими знаниями TypeScript ¯\_(ツ)_/¯ Буду рада фидбэку!
<br/>
<br/>

**Q**: Зачем здесь вообще Angular? 

**A**: Потому что это тестовое задание для вакансии, в которой требуются знания Angular






