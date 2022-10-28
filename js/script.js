/*
    Attraverso l'apposita API di Boolean
    https://flynn.boolean.careers/exercises/api/random/mail
    generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

const { createApp } = Vue;

createApp({
    data () {
        return {
            emailsArray: [],
        }
    },
    methods: {

    },
    created () {
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then( (resp) => {
        console.log(resp);
        });
    },
}).mount("#app");
