const express = require('express');

const app = express()

app.listen(3000, () => {
    console.log(`Server is listening on port: 3000`)
    const serversToWakeUp = [
        "https://wake-up-server-ugof.onrender.com",
        "https://sriram-jenkins-app.onrender.com/",
        "https://aec-semester-exam-results-retriever.onrender.com"
    ];
    setInterval(() => {
        for(const server of serversToWakeUp) {
            fetch(server)
                .then((response) => console.log(`Success: ${server}`))
                .catch((error) => console.log(`Error: ${server}`))
        }
    }, 840000)
})
