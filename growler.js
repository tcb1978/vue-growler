var growler = new Vue({
  el: '#growler',
  data: {
    appName: `<a href="/">Growler</a>`,
    accentColor: 'accent-color',
    headers: 'headers',
    canConnect: false,
    query: '',
    isPowerSyntaxEnabled: false,
    searchIndexes: [],
    pageCount: 5,
    user: {
      firstName: 'Matt',
      fingers: 10,
      tags : ['male', 'gemini'],
      socialmedia: {
        twitter: '@tcb1978',
        youtube: 'tcb1978'
      }
    },
    pages: [
      {
        number: 1,
        url: '?page=1',
        sections: ['A', 'B', 'C']
      },
      {
        number: 2,
        url: '?page=2',
        sections: ['A', 'B', 'C']
      },
      {
        number: 3,
        url: '?page=3',
        sections: ['A', 'B', 'C']
      },
    ],
    beers: [
      {
        name: 'Tikibalang Barley Wine',
        abv: 9.6
      },
      {
        name: 'Hyote Chocolate Stout',
        abv: 7.4
      },
      {
        name: 'Pope Lick porter',
        abv: 6.5
      },
      {
        name: 'Ahool Ale',
        abv: 5.4
      },
      {
        name: 'North Adjule Lager',
        abv: 3.5
      },
    ],
    maxAbv: 7.0,
    results: [
      {name: 'Ahool Ale', ibu: '33 i.b.u'},
      {name: 'Yhool Ale', ibu: '33 i.b.u'},
      {name: 'Bhool Ale', ibu: '33 i.b.u'},
      {name: 'Fhool Ale', ibu: '33 i.b.u'},
      {name: 'Dhool Ale', ibu: '33 i.b.u'},
      {name: 'Chool Ale', ibu: '33 i.b.u'},
    ]
  },
  filters: {
    convertIBU: (value, empty) => {
      !value ? '' : empty
      value = value.toString();
      value = value.replace(/\./g, '');
      return value.toUpperCase();
    },
  },
  computed: {
    isOnline: {
      get: () => this.canConnect ? 'Yes' : 'No',
      set: (newValue) => this.canConnect = newValue
    }
  },
  created: () => {
    axios.get('https://www.ecofic.com').then((res) => {
      growler.canConnect = true;
    }).catch((err) => {
      growler.canConnect = false;
    })
  },
  methods: {
    executeSearch: (e) => {
      this.query ? document.forms[0].submit() : alert('Please enter a query');
    }
  }
});