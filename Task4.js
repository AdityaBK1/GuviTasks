let details1 = {name:"Person 1",age:"5"}
let details2 = {name:"Person 1",age:"5"}

let flag = true
for(let e in details1)
{
    if(details1[e]!==details2[e])
    {
        flag = false;
        break
    }
}
flag?console.log("Equall"):console.log("Not Equall")
                             
                             //  2 Display Country Flags

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
                    console.log(data[i].flags)
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


                    //  3 Display all countries names,Regions,Subregion,Population

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
             

                for(i in data)
                {
                    console.log(data[i].subregion)
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
                    console.log(data[i].region)
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
                    console.log(data[i].population)
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




