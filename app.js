var app = new Vue({
    el: '#app',
    data: {
        inputValue: '',
        dateValue: '',
        timeValue: '',
        notesList: [
          {
            "value": "Сходить какнуть",
            "time": "12:49",
            "date": "12.02.2021"
          }
        ]
    },
    mounted: function(){
      const popup = setInterval(this.sendMessage, 1000)      
    },
    methods:{
        getValue(event){
          this.inputValue = event.target.value
          return this.inputValue
        },
        getTime(event){
          this.timeValue = event.target.value
          return this.timeValue
        },
        getDate(event){
          this.dateValue = event.target.value
          return this.dateValue
        },
        createNote(){
          const obj = {
            "value": this.inputValue,
            "date": this.dateValue,
            "time": this.timeValue
          }
          this.notesList.push(obj)

          this.inputValue = ''
          this.dateValue = ''
          this.timeValue = ''

        },
        sendMessage(){

          var date = new Date();
          const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

          this.notesList.map((item, index) => {
            if(time[0] == 0){
              if(item.time + ':0' === '0' + time){
                alert(`Ку-ку Курвидер веремя ${item.value}`)
              }
            } else {
              if(item.time + ':0' === time){
                alert(`Ку-ку Курвидер веремя ${item.value}`)
              }
            }
          })
        },
    }
})