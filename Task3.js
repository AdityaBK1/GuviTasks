
//JSON iterate over all loops(for,forin,for of,forEach)



<!DOCTYPE html>
<html>
    <head>
        <title>Guvi JS Day 3</title>
    </head>
    <body>
        <h1>Hello</h1>
        <h2>This is an example for XML HTTP Request</h2>
        <script>
            console.log("Welcome to HTML JS")

            function handleData(){
                let data = JSON.parse(this.responseText)
                console.log(data)
               data.forEach((data) => {
                    console.log(data.population)
                })
            }

            const req = new XMLHttpRequest();
            req.addEventListener('load',handleData)
            // req.onload = (res)=>{
            //     console.log(JSON.parse(res.srcElement.responseText))
            // }
            req.open("GET","https://restcountries.com/v3.1/all")
            req.send()
        </script>
    </body>
</html>




<!DOCTYPE html>
<html>
    <head>
        <title>Guvi JS Day 3</title>
    </head>
    <body>
        <h1>Hello</h1>
        <h2>This is an example for XML HTTP Request</h2>
        <script>
            console.log("Welcome to HTML JS")

            function handleData(){
                let data = JSON.parse(this.responseText)
                console.log(data)
                 for(let i=0;i<data.length;i++)
                 {
                     console.log(data[i].name.common,data[i].population)
                 }

            }

            const req = new XMLHttpRequest();
            req.addEventListener('load',handleData)
            // req.onload = (res)=>{
            //     console.log(JSON.parse(res.srcElement.responseText))
            // }
            req.open("GET","https://restcountries.com/v3.1/all")
            req.send()
        </script>
    </body>
</html>




<!DOCTYPE html>
<html>
    <head>
        <title>Guvi JS Day 3</title>
    </head>
    <body>
        <h1>Hello</h1>
        <h2>This is an example for XML HTTP Request</h2>
        <script>
            console.log("Welcome to HTML JS")

            function handleData(){
                let data = JSON.parse(this.responseText)
                console.log(data)
              

                 for(i in data)
                 {
                     console.log(data[i].name.common)
                 }

               
            }

            const req = new XMLHttpRequest();
            req.addEventListener('load',handleData)
            // req.onload = (res)=>{
            //     console.log(JSON.parse(res.srcElement.responseText))
            // }
            req.open("GET","https://restcountries.com/v3.1/all")
            req.send()
        </script>
    </body>
</html>





<!DOCTYPE html>
<html>
    <head>
        <title>Guvi JS Day 3</title>
    </head>
    <body>
        <h1>Hello</h1>
        <h2>This is an example for XML HTTP Request</h2>
        <script>
            console.log("Welcome to HTML JS")

            function handleData(){
                let data = JSON.parse(this.responseText)
                console.log(data)
               

                 for(e of data)
                 {
                     console.log(e.name.common,e.population)
                 }
            }

            const req = new XMLHttpRequest();
            req.addEventListener('load',handleData)
            // req.onload = (res)=>{
            //     console.log(JSON.parse(res.srcElement.responseText))
            // }
            req.open("GET","https://restcountries.com/v3.1/all")
            req.send()
        </script>
    </body>
</html>






                                                                     // Resume data in Json format

let details = [{
            name : "Aditya",
            email: "adityaitjob@gmail.com"
            mobile: "8668023928"
            age   : 22,
            Education : {
                   Standard : SSLC;
                   Percentage : 93;
                      }
                  { 
                   Standard : HSC;
                   Percentage: 80;
                    }
           technical proficiency:{
                              1 : "Javascript"
                              2 : "Java"
                              3 :  "Sql"
           }
           software  proficiency :{
                               1: "Vs"
                               2: "Github"
            }
}
]
console.log(details.software profiency);
