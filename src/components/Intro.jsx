export default function Intro({isEnglish}){
  return(
    <section className="intro">
      <h2 className="intro__title">{isEnglish ? "What haven't we seen there?" : `Чего мы там не видели?`}</h2>
      <p className="intro__text">{isEnglish 
      ?
      "According to VTsIOM polls, 95% of Russians dream of going somewhere, but only 36% plan to spend their holidays in their native country. What haven't we seen here at home? In fact, Russia is a whole universe with the gentle sea of the south, the dense forests of the Sayan Mountains and the harsh ice of the Putorana Plateau. And you can see all these beauties without millions in your account, passports and hours-long flights. Like, for example, Vera Bashmakova - a brave young mother who took three children in a handful, put them in her Lada and drove 20 thousand kilometres across her native country. We have selected and described some interesting places worthy of your holiday."
      :
      'По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только 36% планируют провести отпуск в родной стране. Мол, чего мы тут, дома, не видели? На самом деле, Россия — это целая вселенная с ласковым морем юга, густыми лесами Саян и суровыми льдами плато Путорана. А ещё увидеть все эти красоты можно без миллионов на счету, загранпаспорта и многочасовых перелетов. Как, например, Вера Башмакова — смелая молодая мама, которая взяла в охапку троих детей, усадила их в свою «Ладу» и проехала 20 тысяч километров по родной стране. Мы выбрали и описали некоторые интересные места, достойные вашего отпуска.'}
      </p>
      <p className="intro__info">{isEnglish ? 'Timezones' : 'Часовых поясов'}&nbsp;<span className="intro__quantity">11</span></p>
      <p className="intro__info">{isEnglish ? 'UNESCO natural heritage sites': 'Объектов природного наследия ЮНЕСКО'}&nbsp;<span className="intro__quantity">12</span></p>
      <p className="intro__info">{isEnglish ? 'UNESCO Cultural Heritage Sites' :'Объектов Культурного наследия ЮНЕСКО'}&nbsp;<span className="intro__quantity">16</span></p>
      <p className="intro__info">{isEnglish ? 'Nature reserves' :'Природных заповедников'}&nbsp;<span className="intro__quantity">105</span></p>
      <p className="intro__info">{isEnglish ? 'Airports' :'Аэропортов'}&nbsp;<span className="intro__quantity">241</span></p>
    </section>
  )
}