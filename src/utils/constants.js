import __item1 from '../images/__item1.jpg'
import __item2 from '../images/__item2.jpg'
import __item3 from '../images/__item3.jpg'
import __item4 from '../images/__item4.jpg'
import __item5 from '../images/__item5.jpg'
import __item6 from '../images/__item6.jpg'
import __item7 from '../images/__item7.jpg'
import __item8 from '../images/__item8.jpg'
import __item9 from '../images/__item9.jpg'
import __item10 from '../images/__item10.jpg'
import __item11 from '../images/__item11.jpg'
import __item12 from '../images/__item12.jpg'
import img1 from '../images/__image1.jpg'
import img2 from '../images/__image2.jpg'
import img3 from '../images/__image3.jpg'
import img4 from '../images/__image4.jpg'
import img5 from '../images/__image5.jpg'

const photogrid = [
  {
    name: 'Вид из поезда',
    link: __item1
  },
  {
    name: 'Вершина',
    link: __item2
  },
  {
    name: 'Поле',
    link: __item3
  },
  {
    name: 'Леса',
    link: __item4
  },
  {
    name: 'Лед',
    link: __item5
  },
  {
    name: 'Пляж',
    link: __item6
  },
  {
    name: 'Горы',
    link: __item7
  },
  {
    name: 'Знак',
    link: __item8
  },
  {
    name: 'Туман',
    link: __item9
  },
  {
    name: 'Пейзаж',
    link: __item10
  },
  {
    name: 'Обрыв',
    link: __item11
  },
  {
    name: 'Облака',
    link: __item12
  }
]

const place = [
  {
    name: 'Куршская коса',
    nameEng: 'Curonian Spit',
    url: 'park-kosa.ru',
    linkName: 'park-kosa.ru',
    firstParagraph:'Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два водных горизонта спокойного Куршского залива с одной стороны и подёрнутого рябью волн Балтийского моря с другой. Уникальная природная зона на краю российского анклава.',
    secondParagraph:'На этом Калининградская область не заканчивается. Для путешественника и исследователя там же по соседству самая западная точка России, Балтийская коса, и немецкое наследие россыпи небольших приморских городов. Атмосфера здешних мест исключает суету, окуная в спокойствие природы и запах стального, прохладного моря.',
    link: img1,
    firstParagraphEng: 'Here, amidst forests and sand dunes, you can see the two water horizons of the calm Gulf of Kursh on one side and the rippling Baltic Sea on the other. A unique natural zone on the edge of the Russian enclave.',
    secondParagraphEng: 'The Kaliningrad region does not end there. For the traveller and explorer, the westernmost point of Russia, the Baltic Spit, and the German heritage of a scattering of small seaside towns are right next door. The atmosphere of the area eliminates the hustle and bustle, plunging you into the tranquillity of nature and the smell of the steely, cool sea.'
  },
  {
    name: 'Кольский',
    nameEng: 'Kolsky',
    url: 'https://www.nationalgeographic.com/',
    linkName: 'National Geographic',
    firstParagraph: 'Почти весь полуостров находится за Полярным кругом. Саамская тундра, от которой на юг тайга, а на север Ледовитый океан, прикидывающийся Баренцевым морем.',
    secondParagraph: 'Возможно, вы смотрели Звягинцева и даже слышали  историю арктического фестиваля в Териберке. Возможно, слово Хибины не осталось под снегом школьных воспоминаний об уроках географии. Возможно, вы не интересовались пронизывающей земную кору сверхглубокой скважиной, а от апатитов вас давно накрывает апатия. Но ваша мечта увидеть северное сияние начинает сбываться с билетом в Мурманск.',
    link: img2,
    firstParagraphEng: 'Almost the entire peninsula lies above the Arctic Circle. The Saami tundra, from which to the south is taiga, and to the north is the Arctic Ocean, pretending to be the Barents Sea.',
    secondParagraphEng: "Perhaps you have watched Zvyagintsev and even heard the story of the Arctic festival in Teriberka. Perhaps the word Khibiny has not remained under the snow of your school memories of geography lessons. Perhaps you were not interested in the super-deep well penetrating the Earth's crust, and apatites have long been making you apathetic. But your dream to see the northern lights starts to come true with a ticket to Murmansk."
  },
  {
    name: 'Алтай',
    nameEng: 'Altai',
    url: 'https://www.youtube.com/watch?v=hL_WP4ugEno',
    linkName: 'YouTube',
    firstParagraph: 'Алтай одно из красивейших мест в России. В первую очередь из-за гор: если ехать вдоль хребта, вы увидите склоны, усыпанные соснами, горные реки и озёра. А если вы откроете в автомобиле окна, сможете познакомиться с невидимым чудом здешних мест горным воздухом.',
    secondParagraph: 'Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом. Так вы увидите всё разнообразие местной флоры и фауны. По лесам Алтая бродят лоси, над хребтами летают орлы, а на равнинах пасутся косули. И знаменитые манулы тоже обитатели Алтайского края.',
    link: img3,
    firstParagraphEng: 'Altai is one of the most beautiful places in Russia. First of all, because of the mountains: if you drive along the ridge, you will see slopes covered with pine trees, mountain rivers and lakes. And if you open the windows in the car, you can get acquainted with the invisible miracle of the local mountain air.',
    secondParagraphEng: 'Altai has a moderate climate, so it is best to come here in summer. This way you will see all the variety of local flora and fauna. Elk roam the Altai forests, eagles fly over the ridges, and roe deer graze on the plains. And the famous manulas are also inhabitants of the Altai region.'
  },
  {
    name: 'Зимний Байкал',
    nameEng: 'Winter Baikal',
    url: 'https://vk.com/baikal_region',
    linkName: 'https://vk.com/baikal_region',
    firstParagraph: 'Всем известен Байкал как крупнейшее озеро в мире. Многие также знают, что это самый большой источник пресной воды и одно из красивейших мест в России.',
    secondParagraph: 'Конечно, это всё так. Но Байкал ещё идеальное место для соревнований по скийорингу. Это такой вид спорта, когда лыжник привязывает себя к мотоциклу, и тандем старается развить как можно бóльшую скорость на льду. В марте 2019 года на фестивале Байкальская миля был поставлен мировой рекорд 197.011 км/ч.',
    link: img4,
    firstParagraphEng: 'Everyone knows Baikal as the largest lake in the world. Many people also know that it is the largest source of fresh water and one of the most beautiful places in Russia.',
    secondParagraphEng: "Of course, that's all true. But Baikal is also an ideal place for skijoring competitions. This is a sport where a skier ties himself to a motorbike, and the tandem tries to develop as much speed as possible on the ice. In March 2019, a world record of 197.011 kilometres per hour was set at the Baikal Mile Festival."
  },
  {
    name: 'Карелия',
    nameEng: 'Karelia',
    url: 'http://vodlozero.ru/',
    linkName: 'http://vodlozero.ru/',
    firstParagraph: `Сибирь заканчивается не на Урале, а в Карелии: образующая тайгу сибирская лиственница не растёт западнее Водлозера. Зато здесь она вымахивает на 30 метров леса карельских национальных парков из-за непроходимых болот никогда не знали топора. Некоторым соснам уже больше чем полтысячелетия. Прикоснитесь к живому существу, видевшему солнце раньше, чем увидал его Иван Грозный. В девственном лесу на сотню километров не встретишь тропы. А на редких тропинках деревья в паре метров от земли помечены медвежьими когтями. Чтобы все знали, кто тут хозяин.`,
    link: img5,
    firstParagraphEng: "Siberia ends not in the Urals, but in Karelia: Siberian larch, which forms the taiga, does not grow west of Vodlozero. But here it grows up to 30 metres, the forests of Karelian national parks have never known the axe because of impassable bogs. Some pine trees are more than half a millennium old. Touch a living creature that saw the sun before Ivan the Terrible saw it. In a virgin forest, you won't find a trail for a hundred kilometres. And on the rare paths, trees a few metres off the ground are marked with bear claws. So that everyone knows who is the boss.",
  }
]

export {photogrid, place}