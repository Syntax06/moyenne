var vm = new Vue({
  el: "#app",
  data: {
    currentMatiere: "",
    currentNote: 0,
    tabNotes: [
      { vnote: "note", matiere: "matiere", completed: false }
    ],
    moyenne: 0,
    notetotale: 0,
    nbNotes: 0,
  },
  methods: {
    del: function (index) {
      this.tabNotes.splice(index, 1);

    },
    addNote() {
      if (!isNaN(this.currentNote) && this.currentNote >= 0 && this.currentNote <= 20 && this.currentNote !== "" && this.currentMatiere !== "null" && isNaN(this.currentMatiere)) {
        this.tabNotes.push({ vnote: this.currentNote, matiere: this.currentMatiere, completed: false });
      } else {
        alert("erreur de donnée, veuillez recommencer");
      }
    },
    modif: function (index) {
      this.tabNotes[index].vnote = window.prompt("quelle est la note à prendre en compte ?");
    },

    CalculM: function () {
      this.notetotale = 0
      this.nbNotes = this.tabNotes.length - 1;

      for (let i = 1; i <= this.nbNotes; i++) {
        this.notetotale = Number(this.notetotale) + Number(this.tabNotes[i].vnote);
      }
      this.moyenne = this.notetotale / this.nbNotes;

      // if isNaN(this.currentNote) || this.currentNote < 0 || this.currentNote > 20) {
      ////  }
    }
  },
});

