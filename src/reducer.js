export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'INIT_DATA':
      return Object.assign({}, state, {
        videos: [
          {
            id: 'Z_5MEYzXL9g',
            title: 'Alan Walker - Faded (theToughBeard Cover)',
            img: '//img.youtube.com/vi/Z_5MEYzXL9g/default.jpg'
          },
          {
            id: 'QN2bmSoxxvY',
            title: '20 САУНДТРЕКОВ к фильмам за 5 минут [Акустическая Гитара соло]',
            img: '//img.youtube.com/vi/QN2bmSoxxvY/default.jpg'
          },
          {
            id: 'qQU3sfMitxc',
            title: '10 ИГР на ГИТАРЕ | Музыка из ИГРЫ [Игра на гитаре]',
            img: '//img.youtube.com/vi/qQU3sfMitxc/default.jpg'
          },
          {
            id: 'pzxtoxS7snk',
            title: '10 МУЛЬТФИЛЬМОВ на Гитаре | Музыка из Мультиков [соло на акустике]',
            img: '//img.youtube.com/vi/pzxtoxS7snk/default.jpg'
          }
        ]
      })
    default:
      return state
  }
}
